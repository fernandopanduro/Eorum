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
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
                <Card id={4001269647500} title={Products.Jackets[0].Title} salePrice={Products.Jackets[0].SalePrice} originalPrice={Products.Jackets[0].OriginalPrice} save={Products.Jackets[0].Save} currency={Products.Jackets[0].Currency} img1={Products.Jackets[0].Img1} img2={Products.Jackets[0].Img2}/>
            </ul>
        </section>


    );
}