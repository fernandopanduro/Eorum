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
                    <p className={styles.subtitle}>
                        <span>B</span>
                        <span>e</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                        <span> B</span>
                        <span>o</span>
                        <span>l</span>
                        <span>d</span>
                        <span>  A</span>
                        <span>n</span>
                        <span>d</span>
                        <span> C</span>
                        <span>r</span>
                        <span>e</span>
                        <span>a</span>
                        <span>t</span>
                        <span>i</span>
                        <span>v</span>
                        <span>e</span>

                        </p>
                    <button className={styles.btn}><Link to='/new'>Shop Now</Link></button>
                </div>
            </div>
        </div>
    )
}

