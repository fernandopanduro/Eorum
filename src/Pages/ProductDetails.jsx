import { useReducer } from 'react';
import { useParams } from "react-router-dom";
import { get } from '../utils/httpClient';
import { Products } from '../utils/Products';
import { useState } from 'react';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer';
import styles from '../css/ProductDetails.module.css';


export function ProductDetails() {

    const {productId} = useParams();

    const [state, dispatch] = useReducer(shoppingReducer, Products)    
    const {jackets, cart} = state;

    const [productDetails, setProductDetails] = useState();

    let title, id, salePrice, originalPrice, save, img1, img2, currency;

    jackets.map((jacket) => {
        if (jacket.Id == productId) {
            title = jacket.Title;
            id = jacket.Id;
            salePrice = jacket.SalePrice;
            originalPrice = jacket.OriginalPrice;
            save = jacket.Save;
            img1 = jacket.Img1;
            img2 = jacket.Img2;
            currency = jacket.Currency;
        }
    })

    

    

        

    return (
        <section className={styles.productDetails}>

        </section>
    );
};









/*     const [TitleProduct , setTitleProduct] = useState([]);
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
    }, [productId]); */