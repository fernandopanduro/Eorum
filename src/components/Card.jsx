import styles from '../css/Card.module.css';
import { AiOutlinePlus, AiFillStar } from "react-icons/ai";

export function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.cardImg}>
                <div className={styles.cardSave}>200 USD</div>
                <div className={styles.cardPlus}> <AiOutlinePlus size={23} /> </div>
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
                <h3 className={styles.cardName}>Sudadera Mamadora de phoenix</h3>
                <div className={styles.cardPrices}>
                    <p className={styles.cardPrice}>$30.99</p><p className={styles.cardPreviousPrice}>$230.99</p>
                </div>
            </div>
        </div>
    );
};