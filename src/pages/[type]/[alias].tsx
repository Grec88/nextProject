import { withLayout } from '../../layout/layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../../Interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../../Interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../../Interfaces/product.interface';
import { firstLevelMenu } from '../../../helpers/helpers';
import { TopPageComponent } from '../../../page-component';
import { API } from '../../../helpers/api';
import Head from 'next/head';


const TopPage = ({ firstCategory, page, products }: TopPageProps) => {
    if (!page || !products) {
        return <></>;
    }
    return (
        <>
            <Head>
                <title>{page.metaTitle}</title>
                <meta name="description" content={page.metaDescription} />
                <meta content={page.metaTitle} property="og:title" />
                <meta property="og:description" content={page.metaDescription} />
                <meta property="og:type" content='article' />
            </Head>
            <TopPageComponent
                firstCategory={firstCategory}
                page={page}
                products={products} />
        </>
    );
};

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if (!params) {
        return {
            notFound: true
        };
    }
    try {
        const firstCategoryItem = firstLevelMenu.find(m => m.route == params.type);
        if (!firstCategoryItem) {
            return {
                notFound: true
            };
        }
        const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {
                notFound: true
            };
        }

        const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);

        const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
            category: page.category,
            limit: 10
        });
        return {
            props: {
                page,
                firstCategory: firstCategoryItem.id,
                menu,
                products
            }
        };
    } catch {
        return {
            notFound: true
        };
    }
};

interface TopPageProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}