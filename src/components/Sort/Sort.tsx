import styles from './Sort.module.css';
import { SortEnum, SortProps } from './Sort.props';
import cn from 'classnames';
import SortIcon from './Sort.svg';


export const Sort = ({ sort, setSort, className }: SortProps): JSX.Element => {
    return (
        <div className={cn(styles.sort, className)}>
            <div className={styles['sort-name']} id='sort'>Сортировка</div>
            <button
            id='rating'
            onClick={() => setSort(SortEnum.Rating)}
            className={cn(
                sort === SortEnum.Rating && styles.active,

            )}
            aria-selected={sort == SortEnum.Rating}
            aria-labelledby='sort rating'
            >
                <SortIcon className={styles['sort-icon']}/>По рейтингу
            </button>
            <button 
            id='price'
            onClick={() => setSort(SortEnum.Price)}
            className={cn(
                sort === SortEnum.Price && styles.active,
                
            )}
            aria-selected={sort == SortEnum.Price}
            aria-labelledby='sort price'
            >
                <SortIcon className={styles['sort-icon']}/>По цене
            </button>
        </div>
    );
};