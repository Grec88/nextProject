import { declOfNum, priceRu } from '../../../helpers/helpers';
import { Button } from '../button/Button';
import { Card } from '../card/Card';
import { Rating } from '../rating/rating';
import { Tag } from '../tag/tag';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';
import Image from 'next/image';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className }: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);

    const variants = {
        visible:{ opacity: 1, height: 'auto'},
        hidden: { opacity: 0, height: 0 }
    }

    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block:'start'
        });
    };

    return (
        <div className={className} ref={ref}>
            <Card className={styles['product']}>
                <div className={styles['product-logo']}>
                    <Image
                        src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
                        alt={product.title}
                        width={70}
                        height={70}
                    />
                </div>
                <div className={styles['product-title']}>
                    {product.title}
                </div>
                <div className={styles['product-price']}>
                    {priceRu(product.price)}
                    {product.oldPrice > 0 && <Tag color='green' className={styles['product-price-discount']}>{priceRu(product.price - product.oldPrice)}</Tag>}
                </div>
                <div className={styles['product-credit']}>
                    {priceRu(product.credit)}/<span className={styles['product-credit-months']}>мес</span>
                </div>
                <div className={styles['product-rating']}>
                    <Rating rating={product.reviewAvg ?? product.initialRating} />
                </div>
                <div className={styles['product-tag']}>
                    {product.categories.map(category =>
                        <Tag className={styles['product-tag-category']} key={category} color='ghost'>
                            {category}
                        </Tag>
                    )}
                </div>
                <div className={styles['product-price-title']}>
                    цена
                </div>
                <div className={styles['product-credit-title']}>
                    кредит
                </div>
                <div className={styles['product-rating-title']}>
                <Link className={styles['product-rating-title-link']} href="#ref" onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</Link>
                </div>
                <hr className={styles['product-hr']} />
                <p className={styles['product-desc']}>
                    {product.description}
                </p>
                <div className={styles['product-feature']}>
                    {product.characteristics.map(characteristic => (
                        <div className={styles['product-feature-characteristic']} key={characteristic.name}>
                            <span className={styles['product-feature-characteristic-name']}>
                                {characteristic.name}
                            </span>
                            <span className={styles['product-feature-characteristic-dots']}>
                            </span>
                            <span className={styles['product-feature-characteristic-value']}>
                                {characteristic.value}
                            </span>
                        </div>
                    ))}
                </div>
                <div className={styles['product-adv']}>
                    {product.advantages && product.advantages.length > 0 && <div className={styles['product-advantages']}>
                        <div className={styles['product-advantages-title']}>
                            Преимущества
                        </div>
                        <div>
                            {product.advantages}
                        </div>
                    </div>}
                    {product.disadvantages && product.disadvantages.length > 0 && <div className={styles['product-disadvantages']}>
                        <div className={styles['product-disadvantages-title']}>
                            Недостатки
                        </div>
                        <div>
                            {product.disadvantages}
                        </div>
                    </div>}
                </div>
                <hr className={cn(styles['product-hr'], styles['product-hr-last'])} />
                <div className={styles['product-actions']}>
                    <Button appearance='primary'>Узнать подробнее</Button>
                    <Button
                        className={styles['product-actions-button']}
                        appearance='ghost'
                        arrow={isReviewOpened ? 'down' : 'right'}
                        onClick={() => setIsReviewOpened(!isReviewOpened)
                        }
                    >Читать отзывы</Button>
                </div>
            </Card>
            <motion.div
            animate={isReviewOpened ? "visible" : "hidden"}
            variants={variants}
            initial={"hidden"}
            >
            <Card color='blue' ref={reviewRef} className={styles['product-review']}>
                {product.reviews.map(review => (
                    <div key={review._id}>
                        <Review  review={review} />
                        <hr className={styles['product-hr']} />
                    </div>
                ))}
            </Card>
            <ReviewForm productId={product._id}/>
            </motion.div>
        </div>
    );
}));