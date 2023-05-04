import styles from './tag.module.css';
import { TagProps } from './tag.props';
import cn from 'classnames';


export const Tag = ({ children, size = "s", color = 'ghost', href, className }: TagProps): JSX.Element => {
    return (
        <div className={cn(
            styles.tag,
            className,
            size == 's' && styles.small,
            size == 'l' && styles.large,
            color == 'primary' && styles.primary,
            color == 'ghost' && styles.ghost,
            color == 'green' && styles.green,
            color == 'red' && styles.red,
            color == 'gray' && styles.gray,
        )}>
            {
                href
                    ? <a href={href}>{children}</a>
                    : <>{children}</>
            }
        </div>
    );
};