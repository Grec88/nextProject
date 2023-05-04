import styles from './Card.module.css';
import { CardProps } from './Card.props';
import cn from 'classnames';


export const Card = ({children, color='white', className}: CardProps): JSX.Element =>{
    return(
        <div className={cn(
            styles.card, 
            className, color === 'blue' && styles.blue
        )}>
            {children}
        </div>
    );
};