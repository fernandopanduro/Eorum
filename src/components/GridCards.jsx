import { Products } from "../utils/Products";
import { Card } from "./Card";
import styles from '../css/GridCards.module.css'
import { Link } from "react-router-dom";

export function GridCards({title}) {

    return (

        <section className={`${styles.gridCardsContainer} container`}>
            <div className={styles.gridCardTitleContainer}>
                <h2 className={styles.gridCardTitle}>{title}</h2>
                <Link>View All</Link>
            </div>
            <ul className={styles.GridCards}>
                {
                    Products.jackets.map((jacket) => <Card key={jacket.Id} jacket={jacket} id={jacket.Id} title={jacket.Title} salePrice={jacket.SalePrice} originalPrice={jacket.OriginalPrice} save={jacket.Save} currency={jacket.Currency} img1={jacket.Img1} img2={jacket.Img2} />)
                }
                </ul>
        </section>


    );
}