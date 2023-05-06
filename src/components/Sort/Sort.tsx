import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import cn from 'classnames';
import SortIcon from './Sort.svg';


export const Sort = ({ sort, setSort, className }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)}>
            <span 
            onClick={() => setSort(SortEnum.Rating)}
            className={cn(
                sort === SortEnum.Rating && styles.active,

            )}
            >
                <SortIcon className={styles['sort-icon']}/>По рейтингу
            </span>
            <span 
            onClick={() => setSort(SortEnum.Price)}
            className={cn(
                sort === SortEnum.Price && styles.active,
                
            )}
            >
                <SortIcon className={styles['sort-icon']}/>По цене
            </span>
        </div>
    );
};