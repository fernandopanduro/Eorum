import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

import { Products } from '../utils/Products';

import styles from "../css/Header.module.css";




export function Header() {

    // Change Burger Classes
    const [isOpen, setIsOpen] = useState(false);

    // const productLength = Products.Cart.length

    // const [productLength, setProductLength] = useState(Products.Cart.length);

    // useEffect(() => {
        
    //     setProductLength(Products.Cart.length)
    // }, [])




    return (
        <header className={`${styles.header} ${styles.fine} ${styles.fineTop}`} id='header'>
            <div className={`container ${styles.headerContainer}`}>  

                <h2><Link to='/'>EORUM</Link></h2>

                <ul className={`${styles.list} ${styles.listResponsive} ${isOpen && styles.activelistResponsive}`}>
                    <li className={`${styles.listItem}`}><Link to='/new'>New🔥</Link></li>
                    <li className={styles.listItem}><Link to='/jackets'>Jackets</Link></li>
                    <li className={styles.listItem}><Link to='/hoddies'>Hoddies</Link></li>
                    <li className={`${styles.listItem} ${styles.itemSocial}`}>
                        <a href='https://google.com' target='blank'><AiFillFacebook size={25} /></a>
                        </li>
                    <li className={`${styles.listItem} ${styles.itemSocial}`}>
                        <a href='https://www.instagram.com/eorum.oficial/t' target='blank'><AiFillInstagram size={25} /></a>
                        </li>
                </ul>  
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <select name="Concurry" id="Concurry">
                            <option value="USD">USD</option>
                            <option value="MXN">MXN</option>
                        </select>
                    </li>
                    <li className={styles.listItem}> <Link to='/login'><HiOutlineUser size={25}/></Link></li>
                    <li className={`${styles.listItem} ${styles.shoppingCart}`}> 
                        <div /* onClick={() => setProductLength(productLength + 1)} */ className={styles.shoppingCartBall}>{/* {productLength} */}</div> 
                        <Link to='/shoppingCart'><CgShoppingCart size={25} /></Link>
                    </li> 
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