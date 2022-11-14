import { useState } from "react";
import { Products } from "../utils/Products";
import { Card } from "./Card";
import styles from '../css/GridCards.module.css'

export function GridCards() {
    console.log(Products.Jackets[0].ImgMain)

    return (

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

    );
}