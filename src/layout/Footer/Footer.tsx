import styles from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';


export const Footer = ({className}:FooterProps): JSX.Element =>{
    return(
        <div className={cn(className, styles.footer)}>
            <div>
            OwlTop © 2020 - 2021 Все права защищены
            </div>
            <div>
            Пользовательское соглашение
            </div>
            <div>
            Политика конфиденциальности
            </div>
        </div>
    );
};