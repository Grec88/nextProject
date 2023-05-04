import { HhData, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPage.module.css';
import { TopLevelCategory } from "../../Interfaces/page.interface";

export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <h1>{page.title}</h1>
                {products?.length && <Tag color='gray' size='l'>{products.length}</Tag>}
                <span>Сортировка</span>
            </div>
            <div>
                {products?.length && products.map(product => (<div key={product._id}>{product.title}</div>))}
            </div>
            <div className={styles['hh-title']}>
                <h2>Вакансии - {page.category}</h2>
                <Tag color='red' size='l'>hh.ru</Tag>
            </div>
            {firstCategory == TopLevelCategory.Courses && <HhData
                count={page.hh.count}
                juniorSalary={page.hh.juniorSalary}
                middleSalary={page.hh.middleSalary}
                seniorSalary={page.hh.seniorSalary} />}
        </div>
    );
};