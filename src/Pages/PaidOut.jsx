import styles from '../css/PaidOut.module.css'

import { GiShoppingCart, GiCheckMark } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';

import { Helmet } from 'react-helmet';


export function PaidOut() {
    return (
        <section className={`${styles.paidOut}`}>
            <Helmet>
                <title>Paidout ⭐ || Eorum 🔥</title>
                <meta name="description" content="Paidout Eorum Website" />
            </Helmet>
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
                <Link to='/'><button className='btn'>Continue Shopping</button></Link>
            </Fade>
        </section>
    )
}