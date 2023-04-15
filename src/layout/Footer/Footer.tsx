import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';


export const Footer = ({className}:FooterProps): JSX.Element =>{
    return(
        <footer className={cn(className, styles.footer)} >
            <div>
            OwlTop © 2020 - 2021 Все права защищены
            </div>
            <a href="#" className={styles.link}>
            Пользовательское соглашение
            </a>
            <a href="#" className={styles.link}>
            Политика конфиденциальности
            </a>
        </footer>
    );
};