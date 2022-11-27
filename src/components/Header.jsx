import styles from "../css/Header.module.css";
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useState } from "react";


export function Header() {

    // Change Burger Classes
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>  

                <h2><Link to='/'>EORUM</Link></h2>

                <ul className={`${styles.list} ${styles.listResponsive} ${isOpen && styles.activelistResponsive}`}>
                    <li className={styles.listItem}><Link to='/new'>New 🔥</Link></li>
                    <li className={styles.listItem}><Link to='/jackets'>Jackets</Link></li>
                    <li className={styles.listItem}><Link to='/hoddies'>Hoddies</Link></li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <select name="Concurry" id="Concurry">
                            <option value="USD">USD</option>
                            <option value="MXN">MXN</option>
                        </select>
                    </li>
                    <li className={styles.listItem}> <Link to='/acount'><HiOutlineUser size={25}/></Link></li>
                    <li className={styles.listItem}> <Link to='/shoppingCart'><CgShoppingCart size={25} /></Link></li>
                </ul>

                <div className={`${styles.barsMenu}`} onClick={() => setIsOpen(!isOpen)}>
                    <span className={`${styles.line1__barsMenu} ${isOpen && styles.activeline1__barsMenu}`}></span>
                    <span className={`${styles.line2__barsMenu} ${isOpen && styles.activeline2__barsMenu}`}></span>
                    <span className={`${styles.line3__barsMenu} ${isOpen && styles.activeline3__barsMenu}`}></span>
                </div>

                </div>

        </header>
    )
}