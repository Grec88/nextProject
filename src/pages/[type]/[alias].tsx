import { withLayout } from '../../layout/layout';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { MenuItem } from '../../../Interfaces/menu.interface';
import { TopLevelCategory, TopPageModel } from '../../../Interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../../Interfaces/product.interface';
import { firstLevelMenu } from '../../../helpers/helpers';


const Course = ({ products }: CourseProps) => {
    return (
        <>
            {products?.length}
        </>
    );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: m.id
        });
        paths = paths.concat(menu.flatMap(s => s.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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
        const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
            firstCategory: firstCategoryItem.id
        });
        if (menu.length == 0) {
            return {
                notFound: true
            };
        }

        const { data: page } = await axios.get<TopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias)

        const { data: products } = await axios.post<ProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
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

interface CourseProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: TopLevelCategory;
    page: TopPageModel;
    products: ProductModel[];
}