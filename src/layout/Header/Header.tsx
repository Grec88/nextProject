import styles from './Sidebar.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';


export const Header = ({...divAttributes}: HeaderProps): JSX.Element =>{
    return(
        <div {...divAttributes}>
            Header
        </div>
    );
};