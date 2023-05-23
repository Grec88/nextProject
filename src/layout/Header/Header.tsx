import styles from './Header.module.css';
import { HeaderProps } from './Header.props';
import cn from 'classnames';
import Logo from '../logo/Logo.svg';
import MobileMenuIcon from './MobileMenuIcon.svg';
import { Sidebar } from '../Sidebar/Sidebar';
import { motion } from 'framer-motion';
import CloseMenuIcon from './CloseMenu.svg';
import { useEffect, useState } from 'react';
import {useRouter} from 'next/router';


export const Header = ({className}: HeaderProps): JSX.Element =>{
    const [isOpened, setIsOpened] = useState<boolean>(false);

    const router = useRouter();
    useEffect(() => {
      setIsOpened(false);  
    }, [router]);

    const variants = {
        opened: {
            opacity: 1,
            x:0,
            transition: {
                stiffness: 20
            }
        },
        closed:{
            opacity: 0,
            x:"100%"
        }
    }

    return(
        <header className={cn(className, styles.header)}>
            <Logo/>
            <MobileMenuIcon className={styles["header-mobile-menu-icon"]} onClick={() => setIsOpened(true)}/>
            <motion.div 
            className={styles["header-mobile-menu"]}
            variants={variants}
            initial={'closed'}
            animate={isOpened ? 'opened' : 'closed'}
            >
                <Sidebar/>
                <CloseMenuIcon className={styles['header-mobile-menu-close']} onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
};