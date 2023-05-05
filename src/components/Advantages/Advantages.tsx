import styles from './Advantages.module.css';
import CheckIcon from './Check.svg';
import cn from 'classnames';


export const Advantages = (): JSX.Element => {
    return (
        <section className={styles.advantages}>
            <h2 className={styles['advantages-title']}>
                Преимущества
            </h2>
            <div className={styles['advantages-card']}>
                <CheckIcon className={styles['advantages-icon']}/>
                <h2 className={styles['advantages-card-title']}>
                    Мобильность специалиста
                </h2>
                <p className={styles['advantages-card-desc']}>
                    Выше указаны программы Adobe InDesign, Adobe Illustrator, 
                    Corel Draw и ими можно успешно пользоваться дома или в дороге. 
                    Современные ноутбуки хорошо справляются с нагрузкой, так зачем 
                    загонять специалиста в душный офис. В этой профессии важным 
                    считается вдохновение, поэтому дизайнеры ищут его в 
                    разных местах.
                </p>
            </div>
            <div className={styles['advantages-card']}>
                <CheckIcon className={styles['advantages-icon']}/>
                <h2 className={styles['advantages-card-title']}>
                    Индивидуальный график работы
                </h2>
                <p className={styles['advantages-card-desc']}>
                Если освоить программы и найти заказы по графическому дизайну, вскоре 
                окажется, что вставать в 6:00 вовсе не обязательно. Когда у человека 
                вечером продуктивность выше, надо этим пользоваться.
                </p>
            </div>
            <div className={styles['advantages-card']}>
                <CheckIcon className={styles['advantages-icon']}/>
                <h2 className={styles['advantages-card-title']}>
                    Контроль дохода
                </h2>
                <p className={styles['advantages-card-desc']}>
                Прохождения собеседований в крупные компании могут принести свои плоды. 
                В случае с профессией графического дизайна вполне возможна работа на 
                рынке фриланса. Специалист сам выбирает регион, с кем работать и сколько 
                работать. В связи с этим получится точно контролировать доход в большую 
                или меньшую сторону.
                </p>
            </div>
            <div className={styles['advantages-card']}>
                <CheckIcon className={styles['advantages-icon']}/>
                <h2 className={styles['advantages-card-title']}>
                    Выбор работы
                </h2>
                <p className={styles['advantages-card-desc']}>
                Пользователи сети, которые знают Photoshop, не обязательно должны выполнять одну работу. 
                Профессия графического дизайнера дает возможность отойти от обычных проектов и повысить 
                скил в других компьютерных программах.
                </p>
            </div>
            <p className={styles['advantages-card-desc']}>
            При завершении очередного проекта над графикой, специалист всегда задает себе вопрос о 
            дальнейших перспективах. Отличие профессиональных дизайнеров заключается в том, что они 
            гибкие. Сегодня разрабатывается логотип новой компании, а завтра вполне можно 
            переключиться на иллюстрацию культовой книги.
            </p>
        </section>
    );
};