import { useReducer } from 'react';
import { ProductItem } from '../components/ProductItem';
import styles from '../css/ShoppingCart.module.css';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer';
import { Products } from '../utils/Products';

export function ShoppingCart() {
    

    const delFromCart = () => {};
    const clearCart = () => {};


    return (
        <section>
            <h2>Shopping Cart</h2>
            <h3>Products</h3>
            <article className={styles.box}>
            </article>
            <h3>Carrito</h3>
            <article className={styles.box}>
                <button onClick={clearCart}>Clear</button>
            </article>
        </section>
    )
}