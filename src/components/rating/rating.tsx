import styles from './rating.module.css';
import { RatingProps } from './rating.props';
import StarIcon from './Star.svg';

import cn from 'classnames';
import { useState, useEffect, KeyboardEvent, forwardRef, ForwardedRef } from 'react';


export const Rating = forwardRef(({ isEditable = false, rating, setRating, className, error }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(() => {
        constructorRating(rating);
    }, [rating]);

    const constructorRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span
                    className={
                        cn(
                            styles.star,
                            i < currentRating && styles.filled,
                            isEditable && styles.editable
                        )}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}>
                    <StarIcon
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
                    />
                </span>
            );
        });
        setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructorRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != "Space" || !isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    return (
        <div ref={ref} className={cn(styles['rating-wrapper'], error && styles['rating-form-error'])}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles['rating-error']}>{error.message}</span>}
        </div>
    );
});