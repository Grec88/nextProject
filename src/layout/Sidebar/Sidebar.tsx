import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';


export const Sidebar = ({...divAttributes}: SidebarProps): JSX.Element =>{
    return(
        <div {...divAttributes}>
            Sidebar
        </div>
    );
};