import { HhData, Sort, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPage.module.css';
import { TopLevelCategory } from "../../Interfaces/page.interface";
import { priceRu } from "../../helpers/helpers";
import { Advantages } from "@/components/Advantages/Advantages";
import { SortEnum } from "@/components/Sort/Sort.props";
import { sortReducer } from "./sort.reducer";
import { useReducer } from "react";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    const [{ products: sortProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating })

    const setSort = (sort: SortEnum) => {
        dispathSort({ type: sort });
    };


    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>{page.title}</h1>
                {products?.length && <Tag color='gray' size='l'>{products.length}</Tag>}
                <Sort sort={sort} setSort={setSort} />
            </div>
            <div>
                {!!sortProducts?.length && sortProducts.map(product => (<div key={product._id}>{product.title}</div>))}
            </div>
            <div className={styles['hh-title']}>
                <h2>Вакансии - {page.category}</h2>
                <Tag color='red' size='l'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && <HhData
                count={page.hh.count}
                juniorSalary={priceRu(page.hh.juniorSalary)}
                middleSalary={priceRu(page.hh.middleSalary)}
                seniorSalary={priceRu(page.hh.seniorSalary)} />}
            {page.advantages && page.advantages.length > 0 && 
                <Advantages advantages={page.advantages} seoText={page.seoText} />}
            <section className={styles.skills}>
                <h2 className={styles['skills-title']}>
                    Получаемые навыки
                </h2>
                {page.tags.map((tag, i) => (
                <Tag key={i} color="primary" size='s' className={styles['skills-tag']}>{tag}</Tag>
                ))}
            </section>
        </div>
    );
};