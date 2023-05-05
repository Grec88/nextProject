import { HhData, Tag } from "@/components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPage.module.css';
import { TopLevelCategory } from "../../Interfaces/page.interface";
import { priceRu } from "../../helpers/helpers";
import { Advantages } from "@/components/Advantages/Advantages";

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
                juniorSalary={priceRu(page.hh.juniorSalary)}
                middleSalary={priceRu(page.hh.middleSalary)}
                seniorSalary={priceRu(page.hh.seniorSalary)} />}
                <Advantages/>
                <section className={styles.skills}>
                <h2 className={styles['skills-title']}>
                Получаемые навыки
                </h2>
                <Tag color="primary" size='s'>Работа в Photoshop</Tag>
                <Tag color="primary" size='s' className={styles['skills-tag']}>Подготовка макетов</Tag>
                <Tag color="primary" size='s' className={styles['skills-tag']}>Графический дизайн</Tag>
                <Tag color="primary" size='s' className={styles['skills-tag']}>Web дизайн</Tag>
                <Tag color="primary" size='s' className={styles['skills-tag']}>Дизайн сайтов</Tag>
                </section>
        </div>
    );
};