import styles from '../css/PaidOut.module.css'
import { GiShoppingCart, GiCheckMark } from 'react-icons/gi'
import { Link } from 'react-router-dom'

export function PaidOut() {
    return (
        <section className={styles.paidOut}>
            <div className={styles.shoppingCartContainer}>
                <GiShoppingCart className={styles.shoppingCart} size={23}/>
            </div>
            <div className={styles.paidOutDescription}>
                <GiCheckMark className={styles.checkMark} size={70}/>
                <h3>Thanks For Shopping</h3>
                <p>Your order has been confirmed check your email</p>
            </div>
            <button className={styles.btn}><Link to='/'>Continue Shopping</Link></button>
        </section>
    )
}