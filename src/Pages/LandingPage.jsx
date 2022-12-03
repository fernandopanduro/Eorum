import { Banner } from "../components/Banner";
import { GridCards } from "../components/GridCards";
import styles from '../css/LandingPage.module.css';


export function LandingPage() {
    return (
        <div className={`${styles.landingPage}`}>
            <Banner />
            <GridCards category='New' title='New 🔥'/>
            <GridCards category='Jackets' title='Jackets'/>
            <GridCards category='Hoddies' title='Hoddies'/>
        </div>
    );
}