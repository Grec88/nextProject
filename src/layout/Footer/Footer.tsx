import styles from './Sidebar.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';


export const Footer = ({...divAttributes}: FooterProps): JSX.Element =>{
    return(
        <div {...divAttributes}>
            Footer
        </div>
    );
};