import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({children, arrow='none', appearance, className}: ButtonProps): JSX.Element =>{
    return(
        <button className={cn(
            styles.button, 
            className,
            appearance === 'primary' && styles.primary,
            appearance == 'ghost' && styles.ghost
        )}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, arrow === 'down' && styles.down)}>
                <ArrowIcon />
                </span>}
        </button>
    );
};