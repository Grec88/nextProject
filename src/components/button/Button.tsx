import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';
import { motion } from 'framer-motion';

export const Button = ({children, arrow='none', appearance, onClick, className}: ButtonProps): JSX.Element =>{
    return(
        <motion.button 
        whileHover={{scale:1.05}}
        className={cn(
            styles.button, 
            className,
            appearance === 'primary' && styles.primary,
            appearance == 'ghost' && styles.ghost
        )} onClick={onClick}>
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, arrow === 'down' && styles.down)}>
                <ArrowIcon />
                </span>}
        </motion.button>
    );
};