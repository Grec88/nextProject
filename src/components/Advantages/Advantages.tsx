import styles from './Advantages.module.css';
import { AdvantagesProps } from './Advantages.props';
import CheckIcon from './Check.svg';
import cn from 'classnames';


export const Advantages = ({ advantages, seoText }: AdvantagesProps): JSX.Element => {
    return (

        <section className={styles.advantages}>
            <h2 className={styles['advantages-title']}>
                Преимущества
            </h2>
            {advantages.map(advantage => (
                <div key={advantage._id} className={styles['advantages-card']}>
                    <CheckIcon className={styles['advantages-icon']} />
                    <h2 className={styles['advantages-card-title']}>
                        {advantage.title}
                    </h2>
                    <p className={styles['advantages-card-desc']}>
                        {advantage.description}
                    </p>
                </div>
            ))}
             {seoText.length > 0 && seoText && <div className={cn(styles['advantages-card-desc'], styles['advantage-seo'])} dangerouslySetInnerHTML={{ __html: seoText }}/>}
        </section>
    );
};