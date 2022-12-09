import styles from '../css/Banner.module.css';
import { Link } from 'react-router-dom';

import { HiOutlineArrowLongDown } from 'react-icons/hi2'
import { BiMouseAlt } from 'react-icons/bi'

import img from '../pintures/products/japon.jpg'

import Fade from 'react-reveal/Fade';

export function Banner() {
    return (
        <div className={styles.banner}>
            <Fade>
                <img className={styles.img} src={img} alt="" />
            </Fade>
            <div className={styles.bannerContainer}>    
                <Fade top duration={1500}>
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
                <div className={styles.scroll}>
                    <BiMouseAlt size={28} color='white' />
                    <HiOutlineArrowLongDown className={styles.scrollArrow} size={28} color='white' />
                </div>
                </Fade>
            </div>
        </div>
    )
}

