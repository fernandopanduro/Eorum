import styles from '../css/Shipping.module.css'
import { Ruta } from '../components/Ruta'

export function Shipping() {
    return (
        <section className='container'>
            <Ruta ruta='Shipping' />
            <h2 className={styles.title}>Shipping</h2>
            <div className={styles.shippingContainer}>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>How are your products packaged for shipment?</h3>
                    <p className={styles.answer}>All products are shipped with bubble-wrapped envelop ensuring protection during shipment.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>What if my address was wrong?</h3>
                    <p className={styles.answer}>Sorry, but we cannot do anything about it. Please take extra care when entering your delivery details as we are unable to change delivery details or resend items which have been sent to the wrong address. If it would be an issue at our end we would fix it asap and send you a new package.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>What if the product is lost in the mail?</h3>
                    <p className={styles.answer}>If the mail service loses your package, we will ship you a new one at our costs.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>What are the shipping costs?</h3>
                    <p className={styles.answer}>Normally, Standard Shipping costs $4.99 usd. It's $14.99 usd at the moment due to COVID-19.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>What countries can I ship my order to?</h3>
                    <p className={styles.answer}>You can ship to any country in the world including United States, United Kingdom, Canada, Australia, Germany, Italy, France, Spain, although shipping carriers and delivery times may vary.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>How quickly can I get my hands on what I just ordered with priority shipping?</h3>
                    <p className={styles.answer}>The delivery times varies depending from where you made the order. On average Standard Shipping is between 7 and 10 business days.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>Is there tracking available for my package?</h3>
                    <p className={styles.answer}>Yes, in your order confirmation mail there is a link that allows you to track your package at all times.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>Processing Time vs Shipping Time</h3>
                    <p className={styles.answer}>Please note that processing time (1-2 business days) is different from shipping time and should be added to the total delivery time. Orders generally take 1-2 business days to be fully processed (checked, packed, forwarded to logistics and sent forth to the post office).</p>
                    <p>After your order has been processed, your package will then be picked up by our shipping company for dispatch. An email with your online tracking information will be available on our website.</p>
                    <p>Processing Time - in very rare instances, may take longer than the stated expected time frame. During busy time like holidays, promotions or other instances processing time might take longer. We do our best to deliver as fast as possible and seek your understanding and patience during such events.</p>
                </div>
                <div className={styles.questionContainer}>
                    <h3 className={styles.question}>Customs and import taxes</h3>
                    <p className={styles.answer}>Buyers are responsible for any customs and import taxes that may apply. In some cases, there will be VAT (Value Added Tax), other taxes, customs and/or duty fees levied by your destination country. These additional charges are not included and are the responsibility of the recipient. We cannot determine the charges since customs and taxation policies vary widely from country to country. Please contact your local customs office if you have any questions. We do not refund shipping costs for customers that reject their packages upon arrival for failure to pay duty fees.</p>
                    <p>Customs clearance procedures may be required; under these circumstances, delays may occur, which will affect our original delivery time. Delivery time of orders can be extended by delivery service for indefinite period for reasons beyond our control.</p>
                </div>
            </div>
        </section>
    )
}