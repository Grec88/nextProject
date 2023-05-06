import { Menu } from '../Menu/Menu';
import styles from './Sidebar.module.css';
import Logo from '../logo/Logo.svg';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';
import { Search } from '@/components';


export const Sidebar = ({className}: SidebarProps): JSX.Element =>{
    return(
        <div className={cn(className, styles.sidebar)}>
            <Logo/>
            <Search/>
            <Menu/>
        </div>
    );
};