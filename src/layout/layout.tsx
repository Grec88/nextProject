import { FunctionComponent, useState, KeyboardEvent, useRef } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import styles from './Layout.module.css';
import { LayoutProps } from './layout.props';
import { AppContextProvider, IAppContext } from '../../context/app.context';
import { Up } from '@/components';
import Link from 'next/link';
import cn from 'classnames';


export const Layout = ({ children }: LayoutProps): JSX.Element => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if(key.code == 'Enter' || key.code == 'Enter'){
            key.preventDefault();
            bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };

    return (
        <div className={styles.wrapper}>
            <Link 
            href={''}
            onKeyDown={skipContentAction}
            onFocus={() => setIsSkipLinkDisplayed(true)}
            tabIndex={1000} 
            className={cn(
                styles['skip-link'],
                isSkipLinkDisplayed && styles['skip-link-displayed']
            )}>
            Сразу к содержанию
            </Link>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body} ref={bodyRef} tabIndex={0}>
                {children}
            </div>
            <Footer className={styles.footer} />
            <Up/>
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
            <Layout>
                <Component {...props} />
            </Layout>
            </AppContextProvider>
        );

    };
};