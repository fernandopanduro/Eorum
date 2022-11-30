import styles from '../css/Card.module.css';
import { AiFillStar } from "react-icons/ai";
import { BsPlusLg } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import { shoppingReducer } from '../Reducers/shoppingReducer';
import { TYPES } from '../Actions/shoppingActions';
import { Products } from '../utils/Products';

export function Card({id ,title, salePrice, originalPrice, currency, img1, img2, }) {

    const [ state, dispatch ] = useReducer(shoppingReducer, Products);

    const addToCard = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    };
    

    return (
        <li className={styles.card}>
                <div className={styles.cardImgContainer}>
                    <Link to={`/products/${id}`}>
                        <div className={styles.cardImgContent}>
                            <img src={img1} alt={title} className={`${styles.cardImg} ${styles.cardImg1}`}/>
                            <img src={img2} alt={title} className={`${styles.cardImg} ${styles.cardImgHover}`}/>

                            <div className={styles.cardSave}>
                                {`Save $${parseInt(originalPrice - salePrice)} ${currency}`} 
                            </div>
                        </div>
                    </Link>
                    <div className={styles.cardPlus} onClick={() => addToCard(id)}> 
                        <BsPlusLg className={`${styles.cardHeart} ${styles.cardHeartNoSelect}`} size={15} /> 
                    </div>
                </div>
            <Link to={`/products/${id}`}>
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