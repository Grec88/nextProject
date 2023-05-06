import { useState } from 'react';
import { Button } from '../button/Button';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import SearchIcon from './SearchIcon.svg';
import cn from 'classnames';
import { useRouter } from 'next/router';


export const Search = ({ className }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push(`/search/${search}`);
    };

    return (
        <div className={cn(styles.search, className)}>
            <input 
            className={cn('form-field', styles.input)} 
            placeholder='Поиск...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <Button 
            appearance='primary'
            className={styles.button}
            onClick={goToSearch}
            >
                <SearchIcon/>
            </Button>
        </div>
    );
};