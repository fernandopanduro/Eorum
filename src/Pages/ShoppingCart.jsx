import { useReducer } from 'react';
import { shoppingReducer } from '../Reducers/shoppingReducer';

import styles from '../css/ShoppingCart.module.css';

import Fade from 'react-reveal/Fade';

import { Products } from '../utils/Products';
import { Ruta } from '../components/Ruta'
import { CartItem } from '../components/CartItem';
import { TYPES } from '../Actions/shoppingActions';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';


export function ShoppingCart() {
    
    const [ state, dispatch] = useReducer(shoppingReducer, Products);

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
        }
    };

    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART })
    };
    
    let totalPrices = 0;

    Products.Cart.map(item => {
        totalPrices =   parseInt(item.SalePrice) + totalPrices;
        })

    

    return (
        <section className={`${styles.shoppingCart} container`}>
            <Helmet>
                <title>Shopping Cart 🛒 || Eorum 🔥</title>
                <meta name="description" content="Shopping Cart Eorum Website" />
            </Helmet>
            <Fade top>
                <Ruta ruta='Shopping Cart' />
                <h2 className='title'>Shopping Cart</h2>
            </Fade>

            <Fade bottom>
                <div className={styles.itemsContainer}>
                    <p>Items: {Products.Cart.length}</p>
                    <button onClick={clearCart}>Clear To Cart</button>
                </div>

                <article className={styles.box}>
                    {
                        Products.Cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
                    }
                </article>


                <div className={styles.pricesContainer}>
                    <div className={styles.priceContainer}>
                        <p>Subtotal Price:</p> 
                        <p>${totalPrices}</p>
                    </div>
                    <div className={styles.priceContainer}>
                        <p>Shipping Price:</p>
                        <p>$8</p>
                    </div>
                </div>
                
                <div className={styles.totalContainer}>
                    <div className={styles.priceContainer}>
                        <p>Total Price:</p> 
                        <p>${totalPrices + 8}</p>
                    </div>
                </div>

                <Link to='/checkout'><button className='btn'>Cheackout</button></Link>
            </Fade>

        </section>  
    )
}