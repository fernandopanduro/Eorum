import styles from '../css/Cheackout.module.css'
import { Ruta } from '../components/Ruta'
import { Link } from 'react-router-dom'
import discover from '../pintures/discover.png'
import visa from '../pintures/visa.png'
import paypal from '../pintures/paypal.png'
import americanExpress from '../pintures/american-express.png'
import { MdArrowForwardIos } from 'react-icons/md'


export function Checkout() {
    return (
        <section className='container'>
            <Ruta ruta='Checkout' />

            <h2 className={styles.title}>Checkout</h2>

            <form action="" className={styles.form}>

                <fieldset className={styles.fieldset}>
                    <h3 className={styles.subtitle}>Contact information</h3>
                    <input className={styles.input} type="email" placeholder='Email' required autoComplete='email' />
                    <div className={styles.checkboxContainer}>
                        <input className={styles.input} type="checkbox" name="emailNewOffers" id="emailNewOffers" defaultChecked/>
                        <label htmlFor="emailNewOffers">Email me with news and exclusive offers</label>
                    </div>
                </fieldset>

                <fieldset className={styles.fieldset}>
                    <h3 className={styles.subtitle}>Shipping address</h3>
                    <select className={styles.input} name="" id="">
                        <option value="">Mexico</option>
                        <option value="">EUA</option>
                        <option value="">Canada</option>
                    </select>
                    <div className={styles.names}>
                        <input className={styles.input} type="text" required placeholder='First Name' autoComplete='name'/>
                        <input className={styles.input} type="text" required placeholder='Last Name' autoComplete='last-name'/>
                    </div>
                    <input className={styles.input} type="text" placeholder='Address' name="" id="" />
                    <input className={styles.input} type="text" placeholder='Aparment, suite, etc. (optional)' name="" id="" />
                    <div className={styles.address}>
                        <input className={styles.input} type="number" placeholder='Postal Code' />
                        <input className={styles.input} type="text" placeholder='City' autoComplete='city' />
                        <select className={styles.input} name="state" id="">
                            <option value="">Sinaloa</option>
                            <option value="">Jalisto</option>
                            <option value="">Quintana Roo</option>
                        </select>
                    </div>
                    <input className={styles.input} type="numbe" placeholder='Phone' required/>
                    <div className={styles.checkboxContainer}>
                        <input className={styles.input} type="checkbox" defaultChecked name="saveInfo" id="saveInfo" />
                        <label htmlFor="saveInfo">Save this information for next time.</label>
                    </div>
                </fieldset>

                <hr />

                <fieldset className={styles.shippingBtns}>
                    <Link to='/shoppingCart' className={styles.shoppingCart}> <MdArrowForwardIos size={25+4} className={styles.arrow}/> Return to cart</Link>
                    <button className={styles.shippingBtn}><Link to='/payment'>Continue for shipping</Link></button>
                </fieldset>

            </form>

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

        </section>
    )
}