import { Link } from "react-router-dom";
import styles from '../css/Footer.module.css';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import visa from '../pintures/visa.png';
import paypal from '../pintures/paypal.png';
import discover from '../pintures/discover.png';
import americanExpress from '../pintures/american-express.png';


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerList}>
                    <Link to='/'><h2 className={styles.footerSubmenu}>EORUM</h2></Link> 
                    <ul className={styles.footerIcons}>
                        <li><a href='https://google.com' target='blank'><AiFillFacebook size={25} /></a></li>
                        <li><a href='https://www.instagram.com/eorum.oficial/t' target='blank'><AiFillInstagram size={25} /></a></li> 
                    </ul>
                    <p>Support@eorum.com</p>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>ABOUT</p>
                    <ul className={styles.footerList}>
                        <li><Link to='/about'>About</Link> </li>
                        <li><Link to='/privacy'>Privacy</Link> </li>
                        <li><Link to='/terms'>Terms</Link> </li>
                        <li><Link to='/contact'>Contact</Link> </li>
                        <li><Link to='/refund'>Refund</Link> </li>
                        <li><Link to='/shipping'>Shipping</Link> </li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>MENU</p>
                    <ul className={styles.footerList}>
                        <li><Link to='/new'>New 🔥</Link></li>
                        <li><Link to='/hoddies'>Hoddies</Link></li>
                        <li><Link to='/jackets'>Jackets</Link></li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>SUBSCRIBE</p>
                    <p>Subribete para obtener ofertas y descuentos especiales</p>
                    <label className={styles.footerLabel}>
                        <div>
                            <TfiEmail size={25}/>
                            <input className={styles.footerInput} type="email" placeholder='Enter your email' />
                        </div>
                        <input className={styles.footerSubmit} type="submit" value='Subcribe'/>
                    </label>
                    <ul className={styles.payments}>
                        <li> <img width={56} height={56} src={visa} alt="visa" /> </li>
                        <li> <img width={56} height={56} src={paypal} alt="paypal" /></li>
                        <li> <img width={56} height={56} src={discover} alt="discover" /></li>
                        <li> <img width={56} height={56} src={americanExpress} alt="american express" /></li>
                    </ul>
                </div>
            </div>
            <p className={styles.copyrights}>&copy; {`2017 - 2022 Eorum. All rights reserved.`}</p>
        </footer>
    )
}