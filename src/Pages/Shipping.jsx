import styles from '../css/Shipping.module.css'

import Fade from 'react-reveal/Fade';

import { Ruta } from '../components/Ruta'

import avif from '../pintures/shopping.avif'
import jpg from '../pintures/shopping.jpg'
import webp from '../pintures/shopping.webp'

import { Helmet } from 'react-helmet';

export function Shipping() {
    return (
        <section className='container zIndex'>
            <Helmet>
                <title>Shipping 📃 || Eorum 🔥</title>
                <meta name="description" content="About Eorum Website" />
            </Helmet>
            <Fade top>
                <Ruta ruta='Shipping' />
                <h2 className='title'>Shipping</h2>
            </Fade>

            <div className='containerPage'>
                <Fade bottom>
                    <pinture>
                        <source srcSet={avif} type='image/avif' />
                        <source srcSet={webp} type='image/webp' />
                        <img src={jpg} alt="shipping process" className={styles.img} />
                    </pinture>
                    <div>
                        <h3 className='paragrahtTitle'>How are your products packaged for shipment?</h3>
                        <p className='paragrath'>All products are shipped with bubble-wrapped envelop ensuring protection during shipment.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>What if my address was wrong?</h3>
                        <p className='paragrath'>Sorry, but we cannot do anything about it. Please take extra care when entering your delivery details as we are unable to change delivery details or resend items which have been sent to the wrong address. If it would be an issue at our end we would fix it asap and send you a new package.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>What if the product is lost in the mail?</h3>
                        <p className='paragrath'>If the mail service loses your package, we will ship you a new one at our costs.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>What are the shipping costs?</h3>
                        <p className='paragrath'>Normally, Standard Shipping costs $4.99 usd. It's $14.99 usd at the moment due to COVID-19.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>What countries can I ship my order to?</h3>
                        <p className='paragrath'>You can ship to any country in the world including United States, United Kingdom, Canada, Australia, Germany, Italy, France, Spain, although shipping carriers and delivery times may vary.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>How quickly can I get my hands on what I just ordered with priority shipping?</h3>
                        <p className='paragrath'>The delivery times varies depending from where you made the order. On average Standard Shipping is between 7 and 10 business days.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>Is there tracking available for my package?</h3>
                        <p className='paragrath'>Yes, in your order confirmation mail there is a link that allows you to track your package at all times.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>Processing Time vs Shipping Time</h3>
                        <p className='paragrath'>Please note that processing time (1-2 business days) is different from shipping time and should be added to the total delivery time. Orders generally take 1-2 business days to be fully processed (checked, packed, forwarded to logistics and sent forth to the post office).</p>
                        <p className='paragrath'>After your order has been processed, your package will then be picked up by our shipping company for dispatch. An email with your online tracking information will be available on our website.</p>
                        <p className='paragrath'>Processing Time - in very rare instances, may take longer than the stated expected time frame. During busy time like holidays, promotions or other instances processing time might take longer. We do our best to deliver as fast as possible and seek your understanding and patience during such events.</p>
                    </div>
                    <div>
                        <h3 className='paragrahtTitle'>Customs and import taxes</h3>
                        <p className='paragrath'>Buyers are responsible for any customs and import taxes that may apply. In some cases, there will be VAT (Value Added Tax), other taxes, customs and/or duty fees levied by your destination country. These additional charges are not included and are the responsibility of the recipient. We cannot determine the charges since customs and taxation policies vary widely from country to country. Please contact your local customs office if you have any questions. We do not refund shipping costs for customers that reject their packages upon arrival for failure to pay duty fees.</p>
                        <p className='paragrath'>Customs clearance procedures may be required; under these circumstances, delays may occur, which will affect our original delivery time. Delivery time of orders can be extended by delivery service for indefinite period for reasons beyond our control.</p>
                    </div>
                </Fade>    
            </div>
        </section>
    )
}