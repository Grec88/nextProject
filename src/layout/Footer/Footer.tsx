import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';


export const Footer = ({className, ...props}:FooterProps): JSX.Element =>{
    return(
        <div className={cn(className, styles.footer)} {...props}>
            <div>
            OwlTop © 2020 - 2021 Все права защищены
            </div>
            <a href="#" className={styles.link}>
            Пользовательское соглашение
            </a>
            <a href="#" className={styles.link}>
            Политика конфиденциальности
            </a>
        </div>
    );
};