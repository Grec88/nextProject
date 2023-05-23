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
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key == 'Enter'){
            goToSearch();
        }
    };

    return (
        <div className={cn(styles.search, className)}>
            <input 
            className={cn('form-field', styles.input)} 
            placeholder='Поиск...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <Button 
            appearance='primary'
            className={styles.button}
            onClick={goToSearch}
            aria-label='Искать по сайту'
            >
                <SearchIcon/>
            </Button>
        </div>
    );
};