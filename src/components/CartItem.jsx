import styles from '../css/CartItem.module.css'

import Fade from 'react-reveal/Fade';

import { RiDeleteBinLine } from 'react-icons/ri'

export function CartItem({data, delFromCart}) {

    const {Title, Id, OriginalPrice, SalePrice, Img1, Quantity} = data;

    return (
        <div className={styles.cartItem}>
            <Fade>
                <div className={styles.img}>
                    <img src={Img1} alt={Title} />   
                </div>
                <div className={styles.cartItemContain}>
                    <div className={styles.description}>                    
                        <h3 className={styles.title}>{Title}</h3>
                        <p className={styles.salePrice}>${SalePrice}</p>
                    </div>
                    <div className={styles.btns}>
                        <div className={styles.btnsQuantity}>                        
                            <button onClick={() => delFromCart(Id)} className={styles.btn}>-</button>
                            <button className={styles.btn}>1</button>
                            <button className={styles.btn}>+</button>
                        </div>
                        <button onClick={() => delFromCart(Id, true)} className={`${styles.btn} ${styles.btnDel}`}><RiDeleteBinLine className={styles.btnDel}/></button>
                    </div>
                </div>  
            </Fade>
        </div>
    )
}