import { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cn from 'classnames';


export const Card = forwardRef(({children, color='white', className, ...props}: CardProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element =>{
    return(
        <div className={cn(
            styles.card, 
            className, color === 'blue' && styles.blue
        )} ref={ref} {...props}>
            {children}
        </div>
    );
});