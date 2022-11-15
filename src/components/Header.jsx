import styles from "../css/Header.module.css";
import { CgShoppingCart } from 'react-icons/cg';
import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";


export function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>                
                <h2><Link to='/'>EORUM</Link></h2>
                <ul className={styles.list}>
                    <li><Link to='/new'>New 🔥</Link></li>
                    <li><Link to='/sweatshirts'>Sweatshirts</Link></li>
                    <li><Link to='/jackets'>Jackets</Link></li>
                </ul>
                <ul className={styles.list}>
                    <li>
                        <select name="Concurry" id="Concurry">
                            <option value="USD">USD</option>
                            <option value="MXN">MXN</option>
                        </select>
                    </li>
                    <li> <Link to='/acount'><HiOutlineUser size={25}/></Link> </li>
                    <li> <Link to='/shoppingCart'><CgShoppingCart size={25} /></Link> </li>
                </ul>
            </div>
        </header>
    )
}