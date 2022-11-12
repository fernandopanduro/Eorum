import styles from "../css/Header.module.css";
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from "react-icons/hi";


export function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>                
                <h2>Eorum</h2>
                <ul className={styles.list}>
                    <li>New 🔥</li>
                    <li>T-Shirts</li>
                    <li>Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Hoodies</li>
                </ul>
                <ul className={styles.list}>
                    <li>MXN</li>
                    <li> <HiOutlineUser /> </li>
                    <li> <CgShoppingCart /> </li>
                </ul>
            </div>
        </header>
    )
}