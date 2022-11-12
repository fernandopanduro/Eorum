import { BrowserRouter as Link } from "react-router-dom";
import styles from '../css/Footer.module.css';
import { TfiEmail } from 'react-icons/tfi';
import { AiFillStar, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';


export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerList}>
                    <h2 className={styles.footerSubmenu}>EORUM</h2>
                    <ul className={styles.footerIcons}>
                        {/* <li><Link ><AiFillFacebook size={25} /></Link></li>
                        <li><Link ><AiFillInstagram size={25} /></Link></li> */} 
                    </ul>
                    <p>Support@eorum.com</p>
                </div>

                {/* <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>ABOUT</p>
                    <ul className={styles.footerList}>
                        <li><Link to=''>About</Link> </li>
                        <li><Link to=''>Blog</Link> </li>
                        <li><Link to=''>Privacy</Link> </li>
                        <li><Link to=''>Contact</Link> </li>
                        <li><Link to=''>Shipping</Link> </li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>MENU</p>
                    <ul className={styles.footerList}>
                        <li><Link to=''>New 🔥</Link></li>
                        <li><Link to=''>T-Shirts</Link></li>
                        <li><Link to=''>Sweatshirts</Link></li>
                        <li><Link to=''>Jackets</Link></li>
                        <li><Link to=''>Hoodies</Link></li>
                    </ul>
                </div> */}

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
                    <li>Visa</li>
                    <li>MasterCard</li>
                    <li>Paypal</li>
                    <li>Discover</li>
                </ul>
                </div>
            </div>
            <p className={styles.copyrights}>&copy; {`2017 - 2022 Eorum. All rights reserved.`}</p>
        </footer>
    )
}