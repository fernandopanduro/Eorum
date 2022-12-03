import styles from '../css/Banner.module.css';
import { Link } from 'react-router-dom';
import img from '../pintures/products/japon.jpg'

export function Banner() {
    return (
        <div className={styles.banner}>
            <img className={styles.img} src={img} alt="" />
            <div className={styles.bannerContainer}>    
                <h2 className={styles.title}>Japonese Street Fashion</h2>
                <div>
                    <p className={styles.subtitle}>Being Bold  And Creative</p>
                    <button className={styles.btn}><Link to='/new'>Shop Now</Link></button>
                </div>
            </div>
        </div>
    )
}

