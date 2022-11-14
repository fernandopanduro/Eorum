import { Banner } from "../components/Banner";
import { GridCards } from "../components/GridCards";
import styles from '../css/LandingPage.module.css';


export function LandingPage() {
    return (
        <div className="container">
            <Banner />
            <GridCards />
        </div>
    );
}