import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import styles from '../css/LandingPage.module.css';


export function LandingPage() {
    return (
        <div className="container">
            <Banner />
            <Card />
        </div>
    );
}