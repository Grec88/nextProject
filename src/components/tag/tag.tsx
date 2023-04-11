import styles from './tag.module.css';
import { TagProps } from './tag.props';
import cn from 'classnames';


export const Tag = ({children, size="s", color='ghost', href,  className, ...props}: TagProps): JSX.Element =>{
    return(
        <div className={cn(styles.tag, className, {
            [styles.small]: size == 's',
            [styles.large]: size == 'l',
            [styles.primary]: color == 'primary',
            [styles.ghost]: color == 'ghost',
            [styles.green]: color == 'green',
            [styles.red]: color == 'red',
            [styles.gray]: color == 'gray',
        })} {...props}>
            {
                href 
                ? <a href={href}>{children}</a>
                : <>{children}</>
            }
        </div>
    );
};