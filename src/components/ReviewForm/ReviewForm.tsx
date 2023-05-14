import { Button } from '../button/Button';
import { Rating } from '../rating/rating';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CrossIcon from './Cross.svg';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../../helpers/api';
import { useState } from 'react';

export const ReviewForm = ({ productId, className }: ReviewFormProps): JSX.Element => {
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setIsError] = useState<string>();


    const onSubmit = async (formData: IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
            if (data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setIsError('Что-то пошло не так');
            }
        } catch (e) {
            if (e instanceof Error) {
                setIsError(e.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cn(
                styles['review-form'],
                className
            )}>
                <div className={styles['review-form-field-wrapper']}>
                    <input
                        {...register('name', { required: { value: true, message: 'Заполните имя' } })}
                        className={cn('form-field', errors.name && styles['review-form-error'])} placeholder={"Имя"} />
                    {errors.name && <span className={styles['review-form-error-message']}>{errors.name.message}</span>}
                </div>
                <div className={cn(styles['review-form-field-wrapper'], styles['review-form-title'])}>
                    <input
                        {...register('title', { required: { value: true, message: 'Заполните название' } })} placeholder={"Заголовок отзыва"}
                        className={cn('form-field', errors.title && styles['review-form-error'])} />
                    {errors.name && <span className={styles['review-form-error-message']}>{errors.name.message}</span>}
                </div>
                <div className={cn(styles['review-form-rating'])}>
                    <span>
                        Оценка:
                    </span>
                    <Controller
                        control={control}
                        name='rating'
                        rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
                        render={({ field }) => (
                            <Rating
                                rating={field.value}
                                ref={field.ref}
                                isEditable
                                setRating={field.onChange}
                                error={errors.rating} />
                        )}
                    />
                </div>
                <div className={cn(styles['review-form-field-wrapper'], styles['review-form-desc'])}>
                    <textarea
                        {...register('description', { required: { value: true, message: 'Заполните текст отзыва' } })}
                        className={cn('form-field', errors.description && styles['review-form-error'])}
                        placeholder={"Заголовок отзыва"} />
                    {errors.name && <span className={styles['review-form-error-message-desc']}>{errors.name.message}</span>}
                </div>
                <div className={styles['review-form-submit']}>
                    <Button appearance='primary'>Отправить</Button>
                    <span className={styles['review-form-submit-info']}>
                        * Перед публикацией отзыв пройдет предварительную модерацию и проверку
                    </span>
                </div>
            </div>
            {isSuccess && <div className={styles['review-form-success']}>
                <div className={styles['review-form-success-title']}>
                    <div>
                    Спасибо, ваш отзыв будет опубликован после проверки.
                    </div>
                    <CrossIcon className={styles['review-form-close-icon']} onClick={() => setIsSuccess(false)}/>
                </div>
            </div>}
           {error && <div className={styles['review-form-post-error']}>
                <div className={styles['review-form-post-error-title']}>
                    <div>
                        Что-то пошло не так, поробуйте обновить страницу .....
                    </div>
                    <CrossIcon className={styles['review-form-close-icon']} onClick={() => setIsError(undefined)}/>
                </div>
            </div>}
        </form>
    );
};