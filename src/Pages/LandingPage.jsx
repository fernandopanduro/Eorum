import { Banner } from "../components/Banner";
import { GridCards } from "../components/GridCards";
import styles from '../css/LandingPage.module.css';


export function LandingPage() {
    return (
        <div className={`${styles.landingPage}`}>
            <Banner />
            <p className={styles.paragrath}>Over the last year, Japanese street fashion has continued to be influential throughout Asia and around the globe. eorum specialized in providing the top quality and modern Japanese style clothing and accessories for men. Here you can find the best Sukajan Jackets, T-shirts, Hoodies, Men's Accessories and more.</p>
            <GridCards category='New' title='New 🔥'/>
            <GridCards category='Jackets' title='Jackets'/>
            <GridCards category='Hoddies' title='Hoddies'/>
        </div>
    );
}