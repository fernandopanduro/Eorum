import { useReducer } from 'react';
import styles from '../css/ShoppingCart.module.css';
import { shoppingInitialState, shoppingReducer } from '../Reducers/shoppingReducer';
import { Products } from '../utils/Products';
import { Ruta } from '../components/Ruta'
import { CartItem } from '../components/CartItem';
import { TYPES } from '../Actions/shoppingActions';


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


    return (
        <section className='container'>
            <Ruta ruta='Shopping Cart' />

            <h2>Shopping Cart</h2>

            <article className={styles.box}>
                {
                    Products.Cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
                }
            </article>
                <button onClick={clearCart}>Clear</button>
        </section>
    )
}