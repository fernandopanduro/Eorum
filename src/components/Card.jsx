import styles from '../css/Card.module.css';
import { AiFillStar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';

export function Card({id ,title, salePrice, originalPrice, currency, img1, img2}) {

    return (
        <li className={styles.card}>
            <Link to={`/products/${id}`}>
                <div className={styles.cardImgContent}>
                    <img src={img1} alt={title} className={`${styles.cardImg} ${styles.cardImg1}`}/>
                    <img src={img2} alt={title} className={`${styles.cardImg} ${styles.cardImgHover}`}/>
                    <div className={styles.cardSave}> {`Save $${parseInt(originalPrice - salePrice)} ${currency}`} </div>
                    <div className={styles.cardPlus}> <AiTwotoneHeart className={`${styles.cardHeart} ${styles.cardHeartSelect}`}  size={23}/> <AiOutlineHeart className={`${styles.cardHeart} ${styles.cardHeartNoSelect}`} size={23} /> </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.review}>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <p>Reviews</p>
                    </div>
                    <h3 className={styles.cardName}>{title}</h3>
                    <div className={styles.cardPrices}>
                        <p className={styles.cardPrice}>${salePrice}</p><p className={styles.cardPreviousPrice}>${originalPrice}</p>
                    </div>
                </div>
            </Link>
        </li>
    );
};