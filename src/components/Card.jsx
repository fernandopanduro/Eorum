import styles from '../css/Card.module.css';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import img2 from '../pintures/phenix.jpg'
import { get } from '../utils/httpClient';
import { useEffect, useState } from 'react';

export function Card() {

    const [TitleProduct , setTitleProduct] = useState([]);
    const [appSalePrice , setAppSalePrice] = useState([]);
    const [originalPrice , setOriginalPrice] = useState([]);
    const [currency, setCurrency] = useState([]);
    const [idProduct, setIdProduct] = useState([]);
    const [imgMain, setImgMain] = useState([])
    const [img, setImg] = useState([])

    useEffect(() => {
        get().then(response => {
            setIdProduct(response.product_id);
            setTitleProduct(response.product_title);
            setAppSalePrice(response.app_sale_price);
            setOriginalPrice(response.original_price);
            setCurrency(response.app_sale_price_currency);
            setImgMain(response.product_main_image_url);
            setImg(response.product_small_image_urls.string[1]);
            console.log(response)
        }).catch(err => console.error(err));
    }, []);




    return (
        <div className={styles.card}>
            <div className={styles.cardImgContent}>
                <img src={imgMain} alt={TitleProduct} className={`${styles.cardImg} ${styles.cardImg1}`}/>
                <img src={img} alt={TitleProduct} className={`${styles.cardImg} ${styles.cardImgHover}`}/>
                <div className={styles.cardSave}> {`Save $${originalPrice - appSalePrice} ${currency}`} </div>
                <div className={styles.cardPlus}> <AiOutlineHeart size={23} /> </div>
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
                    <p className={styles.cardPrice}>${appSalePrice}</p><p className={styles.cardPreviousPrice}>${originalPrice}</p>
                </div>
            </div>
        </div>
    );
};