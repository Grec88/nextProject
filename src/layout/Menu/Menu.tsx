import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../../context/app.context';
import { IFirstLevelMenuItem, PageItem } from '../../../Interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../../helpers/helpers';
import { motion } from 'framer-motion';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

    const variants = {
        visible: {
            marginBottom: 20,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.1
            }
        },
        hidden: {
            marginBottom: 0
        }
    };

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 30
        },
        hidden: {
            opacity: 0,
            height: 0
        }
    };

    const openSecondLevel = (secondCategory: string) => {
        setMenu && setMenu(menu.map(m => {
            if (m._id.secondCategory == secondCategory) {
                m.isOpened = !m.isOpened;
            }
            return m;
        }));
    };

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(m => (
                    <div key={m.route}>
                        <Link href={`/${m.route}`}>
                            <div className={cn(
                                styles['first-level'],
                                m.id === firstCategory && styles['first-level-active'])}>
                                {m.icon}
                                <span>{m.name}</span>
                            </div>
                        </Link>
                        {m.id == firstCategory && buildSecondLevel(m)}
                    </div>
                ))}
            </>
        );
    };

    const buildSecondLevel = (MenuItem: IFirstLevelMenuItem) => {
        return (
            <div className={styles['second-block']}>
                {menu.map(m => {
                    if (m.pages.map(page => page.alias).includes(router.asPath.split('/')[2])) {
                        m.isOpened = true;
                    }
                    return (
                        <div key={m._id.secondCategory}>
                            <div className={styles['second-level']} onClick={() => openSecondLevel(m._id.secondCategory)}>
                                {m._id.secondCategory}
                                <motion.div
                                    layout
                                    variants={variants}
                                    initial={m.isOpened ? 'visible' : 'hidden'}
                                    animate={m.isOpened ? 'visible' : 'hidden'}
                                    className={styles['second-level-block']}>
                                    {buildThirdLevel(m.pages, MenuItem.route)}
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const buildThirdLevel = (pages: PageItem[], route: string) => {
        return (
            pages.map((page, idx) => (
                <motion.div
                    key={idx}
                    variants={variantsChildren}>
                    <Link href={`/${route}/${page.alias}`} className={cn(
                        styles['third-level'],
                        `/${route}/${page.alias}` === router.asPath && styles['third-level-active'])}>
                        {page.category}
                    </Link>
                </motion.div>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};