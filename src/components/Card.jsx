import styles from '../css/Card.module.css';
import { AiFillStar, AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { get } from '../utils/httpClient';
import { useEffect, useState } from 'react';

export function Card({id, title, salePrice, originalPrice, save, currency, img1, img2}) {

    const [TitleProduct , setTitleProduct] = useState([]);
    const [appSalePrice , setAppSalePrice] = useState([]);
    const [appOriginalPrice , setAppOriginalPrice] = useState([]);
    const [appCurrency, setAppCurrency] = useState([]);
    const [idProduct, setIdProduct] = useState([]);
    const [imgMain, setImgMain] = useState([])
    const [img, setImg] = useState([])

    useEffect( () => {
         get(id).then(response => {
            setIdProduct(response.product_id);
            setTitleProduct(response.product_title);
            setAppSalePrice(response.app_sale_price);
            setAppOriginalPrice(response.original_price);
            setAppCurrency(response.app_sale_price_currency);
            console.log(response)
        }).catch(err => console.error(err));
    }, []);


    return (
        <li className={styles.card}>
            <div className={styles.cardImgContent}>
                <img src={img1} alt={title} className={`${styles.cardImg} ${styles.cardImg1}`}/>
                <img src={img2} alt={title} className={`${styles.cardImg} ${styles.cardImgHover}`}/>
                <div className={styles.cardSave}> {`Save $${save} ${currency}`} </div>
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
        </li>
    );
};