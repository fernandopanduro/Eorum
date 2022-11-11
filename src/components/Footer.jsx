import styles from '../css/Footer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.footerList}>
                    <h2 className={styles.footerSubmenu}>EORUM</h2>
                    <ul className={styles.footerIcons}>
                        <i>Facebook</i>
                        <i>Instagram</i>
                    </ul>
                    <p>Support@eorum.com</p>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>ABOUT</p>
                    <ul className={styles.footerList}>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Privacy</li>
                        <li>Contact</li>
                        <li>Shipping</li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                    <p className={styles.footerSubmenu}>MENU</p>
                    <ul className={styles.footerList}>
                        <li>New 🔥</li>
                        <li>T-Shirts</li>
                        <li>Sweatshirts</li>
                        <li>Jackets</li>
                        <li>Hoodies</li>
                    </ul>
                </div>

                <div className={styles.footerList}>
                <p className={styles.footerSubmenu}>SUBSCRIBE</p>
                <p>Subribete para obtener ofertas y descuentos especiales</p>
                <label className={styles.footerLabel}><input className={styles.footerInput} type="email" placeholder='Enter your email' /></label>
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