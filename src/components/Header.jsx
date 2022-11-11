import styles from "../css/Header.module.css";


export function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>                
                <h2>Eorum</h2>
                <ul className={styles.list}>
                    <li>T-Shirts</li>
                    <li>Sweatshirts</li>
                    <li>Jackets</li>
                    <li>Hoodies</li>
                </ul>
                <ul className={styles.list}>
                    <li>MXN</li>
                    <li>Cuenta</li>
                    <li>Carrito</li>
                </ul>
            </div>
        </header>
    )
}