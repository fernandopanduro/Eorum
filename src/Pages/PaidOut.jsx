import styles from '../css/PaidOut.module.css'

import { GiShoppingCart, GiCheckMark } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

export function PaidOut() {
    return (
        <section className={`${styles.paidOut} zIndex`}>
            <div className={styles.shoppingCartContainer}>
                <GiShoppingCart className={styles.shoppingCart} size={23}/>
            </div>
            <Fade bottom>
                <div className={styles.paidOutDescription}>
                    <Fade bottom>
                        <GiCheckMark className={styles.checkMark} size={70}/>
                        <h3>Thanks For Shopping</h3>
                        <p>Your order has been confirmed check your email</p>
                    </Fade>
                </div>
                <button className='btn'><Link to='/'>Continue Shopping</Link></button>
            </Fade>
        </section>
    )
}