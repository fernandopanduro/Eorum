import { Products } from "../utils/Products";
import { Card } from "./Card";
import styles from '../css/GridCards.module.css'
import { Link } from "react-router-dom";

export function GridCards({title, category}) {

    const New = Products.New;
    const Jackets = Products.Jackets;
    const Hoddies = Products.Hoddies;

    return (

        <section className={`${styles.gridCardsContainer} container`}>
            <div className={styles.gridCardTitleContainer}>
                <h2 className={styles.gridCardTitle}>{title}</h2>

                {
                    category == "New" ? 
                    <Link to='/new'>View All</Link>
                    : category == "jackets" ?
                    <Link to='/jackets'>View All</Link>
                    : <Link to='/hoddies'>View All</Link>
                }

            </div>
            
            <ul className={styles.GridCards}>
                {
                    category == "New" ? 
                    New.map((product) => <Card key={product.Id} jacket={product} id={product.Id} title={product.Title} salePrice={product.SalePrice} originalPrice={product.OriginalPrice} save={product.Save} currency={product.Currency} img1={product.Img1} img2={product.Img2} />)
                    : category == "Jackets" ? 
                    Jackets.map((product) => <Card key={product.Id} jacket={product} id={product.Id} title={product.Title} salePrice={product.SalePrice} originalPrice={product.OriginalPrice} save={product.Save} currency={product.Currency} img1={product.Img1} img2={product.Img2} />)
                    : Hoddies.map((product) => <Card key={product.Id} jacket={product} id={product.Id} title={product.Title} salePrice={product.SalePrice} originalPrice={product.OriginalPrice} save={product.Save} currency={product.Currency} img1={product.Img1} img2={product.Img2} />)
                }
                </ul>
        </section>


    );
}

