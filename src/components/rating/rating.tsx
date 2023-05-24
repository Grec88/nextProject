import styles from './rating.module.css';
import { RatingProps } from './rating.props';
import StarIcon from './Star.svg';

import cn from 'classnames';
import { useState, useEffect, KeyboardEvent, forwardRef, ForwardedRef, useRef } from 'react';


export const Rating = forwardRef(({ tabIndex, isEditable = false, rating, setRating, className, error }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        constructorRating(rating);
    }, [rating]);

    const computeFocus = (rating: number, index: number): number => {
        if (!rating && index == 0) {
            return tabIndex ?? 0;
        }
        if(!isEditable) {
            return -1;
        }
        if(rating == index + 1){
            return tabIndex ?? 0;
        }
        return -1;
    };

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
                    tabIndex={computeFocus(rating, i)}
                    onKeyDown={handleKey}
                    onMouseEnter={() => changeDisplay(i + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => onClick(i + 1)}
                    ref={r => ratingArrayRef.current?.push(r)}
                >
                    <StarIcon />
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

    const handleKey = (e: KeyboardEvent) => {
        if (!isEditable || !setRating) {
            return;
        }
        if (e.code == 'ArrowRight' || e.code == "ArrowUp") {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
                ratingArrayRef.current[rating]?.focus();
            }
        }
        if (e.code == 'ArrowLeft' || e.code == "ArrowDown") {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

    return (
        <div tabIndex={tabIndex} ref={ref} className={cn(styles['rating-wrapper'], error && styles['rating-form-error'])}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
            {error && <span className={styles['rating-error']}>{error.message}</span>}
        </div>
    );
});