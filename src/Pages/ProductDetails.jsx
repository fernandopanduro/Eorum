import { useReducer, useRef } from 'react';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from 'react-icons/md'

import styles from '../css/ProductDetails.module.css';

import { Products } from '../utils/Products';
import { shoppingReducer } from '../Reducers/shoppingReducer';
import { TYPES } from '../Actions/shoppingActions';
import { Ruta } from '../components/Ruta'

import Fade from 'react-reveal/Fade';

import { Helmet } from 'react-helmet';


export function ProductDetails() {

    const {productId} = useParams()
    const [state, dispatch] = useReducer(shoppingReducer, Products)    
    const {Jackets, Hoddies, Cart} = state;


    let title, id, salePrice, originalPrice, images, img1, img2, img3, img4, img5, img6, img7, img8, currency;

    const addToCard = (id) => {
        dispatch({type: TYPES.ADD_TO_CART, payload: id})
    };

    Jackets.map((product) => {
        if (product.Id == productId) {
            title = product.Title;
            id = product.Id;
            salePrice = product.SalePrice;
            originalPrice = product.OriginalPrice;
            [img1, img2, img3, img4, img5, img6, img7, img8] = product.Imgs;
            images = product.Imgs;
            currency = product.Currency;
        }
    })   

    Hoddies.map((product) => {
        if (product.Id == productId) {
            title = product.Title;
            id = product.Id;
            salePrice = product.SalePrice;
            originalPrice = product.OriginalPrice;
            [img1, img2, img3, img4, img5, img6, img7, img8] = product.Imgs;
            images = product.Imgs;
            currency = product.Currency;
        }
    })   

    // Change Image
    const [img, setImg] = useState(img1)

    const hoverHandler = (image , i) => {
        setImg(image);
        refs.current[i].classList.add('imgActive');
        for (let j = 0; j < images.length; j++) {
            if (i !== j) {
                refs.current[j].classList.remove('imgActive')
            }
        }
    }

    const refs = useRef([]);
    refs.current = [];
    const addRefs = (el) => {
        if (el && !refs.current.includes(el)) {
            refs.current.push(el);
        }
    };

    // quantityNumber

    const [quantityNumber, setQuantityNumber] = useState(1);

    return (
        <section className='container zIndex'>
            <Helmet>
                <title> {title} 👔 || Eorum 🔥</title>
                <meta name="description" content={title} />
            </Helmet>
            <Link to='/'>
                <div className={styles.return}>
                    <MdArrowForwardIos className={styles.arrowRuta} size={23} />
                    <Ruta ruta={`Product`} />
                </div>
            </Link>
            <div className={`${styles.productDetails}`}>

                <Fade left>

                    <div className={styles.imgContainer}>
                        

                        <div className={styles.pictures}>
                            {   
                                images.map((image, i) => (
                                    <img 
                                    className={i == 0 ? 'imgActive' : ''}
                                    src={image} 
                                    alt={title} 
                                    onMouseOver={() => hoverHandler(image, i)} 
                                    key={i}
                                    ref={addRefs}/>
                                ))
                            }
                        </div>
                        

                        <div className={styles.picture}>
                            <img src={img} alt={title} />
                        </div>


                    </div>

                </Fade>

                <div className={styles.productDetailsDescription}>
                    <Fade right>
                        <div className={styles.header}>
                            <div className={styles.review}>
                                <AiFillStar size={22} color='#f6c74b'/>
                                <AiFillStar size={22} color='#f6c74b'/>
                                <AiFillStar size={22} color='#f6c74b'/>
                                <AiFillStar size={22} color='#f6c74b'/>
                                <AiFillStar size={22} color='#f6c74b'/>
                                <p>Reviews</p>
                            </div>
                            <h2 className={`${styles.title} title`}>{title}</h2>
                            <div className={styles.prices}>
                                <p className={styles.salePrice}>${salePrice}</p>
                                <p className={styles.originalPrice}>${originalPrice}</p>
                                <p>{currency}</p>
                            </div>
                        </div>

                        <hr className={styles.hr} />

                        <div className={styles.details}>
                            <div className={`${styles.detail} ${styles.sizes}`}>
                                <p>Asian Size</p>
                                <ul className={`${styles.sizeBtns} ${styles.list}`}>
                                

                                    <li className={styles.sizeBtn}>M</li>
                                    <li className={styles.sizeBtn}>L</li>
                                    <li className={styles.sizeBtn}>XL</li>
                                    <li className={styles.sizeBtn}>2XL</li>
                                    <li className={styles.sizeBtn}>3XL</li>
                                </ul>
                            </div>
                            <div className={`${styles.detail} ${styles.colors}`}>
                                <p>Color</p>
                                <ul className={`${styles.colorsList} ${styles.list}`}>
                                    <li className={styles.colorItem}><div></div></li>
                                </ul>
                            </div>
                            <div className={`${styles.detail} ${styles.quantity}`}>
                                <p>Quantity</p>
                                <div className={styles.quantitySelect}>
                                    <button className={`${styles.quantityBtn} ${styles.quantityBtn_}`}>-</button>
                                    <p className={styles.quantityNumber}>{quantityNumber}</p>
                                    <button className={styles.quantityBtn}>+</button>
                                </div>

                            </div>
                            <div className={`${styles.detail} ${styles.btns}`}>
                                <button className={styles.btn}>Add To Cart</button>
                                <input className={`${styles.btn} ${styles.btnBuy}`} type="submit" value='Buy It Now'/>
                            </div>
                            <div className={`${styles.detail}`}>
                                <h3>Details</h3>
                                <p>For decades, Harajuku has been the epicenter of unconventional clothing styles. Beginning with kawaii in the 1970s, Harajuku styles have grown to include gothic elements, alongside big-name brands like American Eagle, H&M, and Otaku.</p>
                            </div>
                            <hr />
                            <div className={styles.dropdownDescriptions}>
                                

                                <div className={styles.dropdownDescription}>
                                    <input type="checkbox" name="dropdown-head" id="dropdown-head-size" />
                                    <label htmlFor="dropdown-head-size">Size Chart <MdArrowForwardIos className={styles.arrow}/></label>
                                    <div className={styles.dropdownText}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Size</td>
                                                    <td>Chest (inch)</td>
                                                    <td>Sleeves (inch)</td>
                                                    <td>Heigth (inch)</td>
                                                </tr>
                                                <tr>
                                                    <td>M</td>
                                                    <td>37.8</td>
                                                    <td>24.8</td>
                                                    <td>160 - 169</td>
                                                </tr>
                                                <tr>
                                                    <td>L</td>
                                                    <td>40.9</td>
                                                    <td>25.2</td>
                                                    <td>170 - 175</td>
                                                </tr>
                                                <tr>
                                                    <td>XL</td>
                                                    <td>44.0</td>
                                                    <td>25.8</td>
                                                    <td>176 - 180</td>
                                                </tr>
                                                <tr>
                                                    <td>2XL</td>
                                                    <td>46.4</td>
                                                    <td>27.1</td>
                                                    <td>180 - 189</td>
                                                </tr>
                                                <tr>
                                                    <td>3XL</td>
                                                    <td>49.5</td>
                                                    <td>27.6</td>
                                                    <td>190 - 200</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className={styles.dropdownDescription}>
                                    <input type="checkbox" name="dropdown-head" id="dropdown-head-returns" />
                                    <label htmlFor="dropdown-head-returns">Shipping & Returns <MdArrowForwardIos className={styles.arrow}/></label>
                                    <div className={`${styles.dropdownText} ${styles.dropdownTextReturns}`}>
                                        <h3 className={styles.dropdownTextSubtitle}>Processing Time</h3>
                                        <p className={styles.dropdownParagrath}>1 - 3 Business Days</p>
                                        <h3 className={styles.dropdownTextSubtitle}>Estimated Shipping Times</h3>
                                        <p className={styles.dropdownParagrath}>8 - 14 Bussiness Days</p>
                                        <h3 className={styles.dropdownTextSubtitle}>30 Days Money Back Guaranteed</h3>
                                        <p className={styles.dropdownParagrath}>You can return product within 30 days, as long as the products are not worn, washed or damaged.</p>
                                    </div>
                                </div>

                                <div className={styles.dropdownDescription}>
                                    <input type="checkbox" name="dropdown-head" id="dropdown-head-contact" />
                                    <label htmlFor="dropdown-head-contact">Not Sure About Your Size?<MdArrowForwardIos className={styles.arrow}/></label>
                                    <div className={`${styles.dropdownText} ${styles.dropdownTextContacts}`}>
                                        <p>Questions? Email: support@eorum.com</p>
                                        <form action="">
                                            <div className={styles.labelsContainer}>
                                                <div className={styles.labelContainer}>
                                                    <input className={styles.input} type="text" id='contactName' placeholder='Name'/>
                                                </div>
                                                <div className={styles.labelContainer}>
                                                    <input className={styles.input} type="email" id='email' placeholder='Email'/>
                                                </div>
                                            </div>
                                            <div className={styles.labelContainer}>
                                                <textarea className={styles.input} name="" id="menssge" cols="30" rows="10" placeholder='Menssage'></textarea>
                                                <button className='btn'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>    
                </div>
            </div>
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