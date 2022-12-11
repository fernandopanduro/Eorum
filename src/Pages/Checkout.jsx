import styles from '../css/Cheackout.module.css'

import Fade from 'react-reveal/Fade';

import { Ruta } from '../components/Ruta'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos } from 'react-icons/md'

import discover from '../pintures/discover.png'
import visa from '../pintures/visa.png'
import paypal from '../pintures/paypal.png'
import americanExpress from '../pintures/american-express.png'

import { Helmet } from 'react-helmet';


export function Checkout() {
    return (
        <section className={`${styles.checkout} container`}>
            <Helmet>
                <title>Checkout || Eorum 🔥</title>
                <meta name="description" content="Checkout Eorum Website" />
            </Helmet>

            <Fade top>
                <Ruta ruta='Checkout' />
                <h2 className='title'>Checkout</h2>
            </Fade>

            <form action="" className='form'>

                <Fade bottom>
                    <fieldset className={styles.fieldset}>
                        <h3 className='subtitle'>Contact information</h3>
                        <input className='input' type="email" placeholder='Email' required autoComplete='email' />
                        <div className='checkboxContainer'>
                            <input type="checkbox" name="emailNewOffers" id="emailNewOffers" defaultChecked/>
                            <label htmlFor="emailNewOffers">Email me with news and exclusive offers</label>
                        </div>
                    </fieldset>

                    <fieldset className={styles.fieldset}>
                        <h3 className='subtitle'>Shipping address</h3>
                        <select className='input' name="" id="">
                            <option value="">Mexico</option>
                            <option value="">EUA</option>
                            <option value="">Canada</option>
                        </select>
                        <div className={styles.names}>
                            <input className='input' type="text" required placeholder='First Name' autoComplete='name'/>
                            <input className='input' type="text" required placeholder='Last Name' autoComplete='last-name'/>
                        </div>
                        <input className='input' type="text" placeholder='Address' name="" id="" />
                        <input className='input' type="text" placeholder='Aparment, suite, etc. (optional)' name="" id="" />
                        <div className={styles.address}>
                            <input className='input' type="number" placeholder='Postal Code' />
                            <input className='input' type="text" placeholder='City' autoComplete='city' />
                            <select className='input' name="state" id="">
                                <option value="">Sinaloa</option>
                                <option value="">Jalisto</option>
                                <option value="">Quintana Roo</option>
                            </select>
                        </div>
                        <input className='input' type="numbe" placeholder='Phone' required/>
                        <div className='checkboxContainer'>
                            <input type="checkbox" defaultChecked name="saveInfo" id="saveInfo" />
                            <label htmlFor="saveInfo">Save this information for next time.</label>
                        </div>
                    </fieldset>

                    <hr />

                    <fieldset className={styles.shippingBtns}>
                        <Link to='/shoppingCart' className={styles.shoppingCart}> <MdArrowForwardIos size={25} className={styles.arrow}/> Return to cart</Link>
                        <Link to='/payment'><button className={`${styles.btnShipping} btn`}>Continue for shipping</button></Link>
                    </fieldset>
                </Fade>

            </form>

            <Fade bottom>
                <hr />

                <ul className={styles.paymentsImgs}>
                    <li className={styles.paymentItem}> <img src={discover} alt="discover" /></li>
                    <li className={styles.paymentItem}> <img src={paypal} alt="paypal" /></li>
                    <li className={styles.paymentItem}> <img src={visa} alt="visa" /></li>
                    <li className={styles.paymentItem}> <img src={americanExpress} alt="americanExpress" /></li>
                </ul>

                <hr />

                <ul className={styles.policys}>
                    <li className={styles.policy}><Link to='/shipping'>Shipping</Link></li>
                    <li className={styles.policy}><Link to='/refund'>Refund</Link></li>
                    <li className={styles.policy}><Link to='/terms'>Terms</Link></li>
                </ul>
            </Fade>


        </section>
    )
}