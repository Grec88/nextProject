import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '../../../context/app.context';
import { IFirstLevelMenuItem, PageItem } from '../../../Interfaces/menu.interface';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { firstLevelMenu } from '../../../helpers/helpers';

export const Menu = (): JSX.Element => {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    const router = useRouter();

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
                                <div className={cn(
                                    styles['second-level-block'],
                                    m.isOpened && styles['second-level-block-opened'])}>
                                    {buildThirdLevel(m.pages, MenuItem.route)}
                                </div>
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
                <Link key={idx} href={`/${route}/${page.alias}`} className={cn(
                    styles['third-level'],
                    `/${route}/${page.alias}` === router.asPath && styles['third-level-active'])}>
                    {page.category}
                </Link>
            ))
        );
    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    );
};