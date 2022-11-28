import { useReducer, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Products } from '../utils/Products';
import { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { MdArrowForwardIos } from 'react-icons/md'
import { BiArrowToBottom } from "react-icons/bi";
import { Slide } from 'react-slideshow-image';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer';
import styles from '../css/ProductDetails.module.css';
import ReactImageMagnify from 'react-image-magnify';


export function ProductDetails() {

    const {productId} = useParams();

    const [state, dispatch] = useReducer(shoppingReducer, Products)    
    const {Jackets, cart} = state;

    const [productDetails, setProductDetails] = useState();

    let title, id, salePrice, originalPrice, images, img1, img2, img3, img4, img5, img6, img7, img8, currency;

    Jackets.map((jacket) => {
        if (jacket.Id == productId) {
            title = jacket.Title;
            id = jacket.Id;
            salePrice = jacket.SalePrice;
            originalPrice = jacket.OriginalPrice;
            [img1, img2, img3, img4, img5, img6, img7, img8] = jacket.Imgs;
            images = jacket.Imgs;
            currency = jacket.Currency;
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

    

    return (
        <section className={`${styles.productDetails} container`}>

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
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: {title},
                            isFluidWidth: true,
                            src: img,
                        },
                        largeImage: {
                            src: img,
                            width: 1200,
                            height: 1800
                        }, 
                        enlargedImageContainerDimensions: {
                            width: '150%',
                            height: '150%'
                        }
                    }} />
                </div>


            </div>

            <div className={styles.productDetailsDescription}>
                <div className={styles.header}>
                    <div className={styles.review}>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <AiFillStar size={22} color='#f6c74b'/>
                        <p>Reviews</p>
                    </div>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.prices}>
                        <p className={styles.salePrice}>${salePrice}</p>
                        <p className={styles.originalPrice}>${originalPrice}</p>
                        <p>{currency}</p>
                    </div>
                </div>

                <hr />

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
                            <p>1</p>
                            <button className={styles.quantityBtn}>+</button>
                        </div>

                    </div>
                    <div className={`${styles.detail} ${styles.btns}`}>
                        <input className={styles.btn} type="submit" value='Add To Cart'/>
                        <input className={`${styles.btn} ${styles.btnBuy}`} type="submit" value='Buy It Now'/>
                    </div>
                    <div className={`${styles.detail}`}>
                        <h3>Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ullam error, voluptate sequi adipisci nesciunt voluptatibus enim nemo consequatur recusandae aliquam delectus accusamus quisquam, perferendis totam quae, ut rem fugit dolores nulla aperiam corporis non. Mollitia rem nam eveniet cupiditate aspernatur magni fugiat, minima commodi cum saepe error a enim ratione delectus reiciendis natus!</p>
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
                                <p>1 - 3 Business Days</p>
                                <h3 className={styles.dropdownTextSubtitle}>Estimated Shipping Times</h3>
                                <p>8 - 14 Bussiness Days</p>
                                <h3 className={styles.dropdownTextSubtitle}>30 Days Money Back Guaranteed</h3>
                                <p>You can return product within 30 days, as long as the products are not worn, washed or damaged.</p>
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
                                            <label htmlFor="contactName">Name</label>
                                            <input className={styles.input} type="text" id='contactName'/>
                                        </div>
                                        <div className={styles.labelContainer}>
                                            <label htmlFor="email">Email</label>
                                            <input className={styles.input} type="email" id='email'/>
                                        </div>
                                    </div>
                                    <div className={styles.labelContainer}>
                                        <label htmlFor="menssage">Menssage</label>
                                        <textarea className={styles.input} name="" id="menssge" cols="30" rows="10"></textarea>
                                        <input className={`${styles.btn} ${styles.input}`} type="submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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