import styles from '../css/Refund.module.css'

import Fade from 'react-reveal/Fade';

import { Ruta } from '../components/Ruta'

import { Helmet } from 'react-helmet';

export function Refund() {
    return (
        <section className='container zIndex'>
            <Helmet>
                <title>Refund 📃 || Eorum 🔥</title>
                <meta name="description" content="About Eorum Website" />
            </Helmet>
            <Fade top>
                <Ruta ruta='Refund' />
                <h2 className='title'>Refund</h2>
            </Fade>
            <div className='containerPage'>
                <Fade bottom>
                    <div>
                        <p className='paragrahtTitle'>Returns</p>
                        <p className='paragrath'>Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can’t offer you a refund or exchange.</p>
                    </div>
                    <div>
                        <p className='paragrath'>To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>
                    </div>
                    <div>
                        <p className='paragrath'>To complete your return, we require a receipt or proof of purchase.</p>
                    </div>
                    <div>
                        <p className='paragrath'>There are certain situations where only partial refunds are granted (if applicable)</p>
                        <p className='paragrath'>Any item not in its original condition, is damaged or missing parts for reasons not due to our error</p>
                        <p className='paragrath'>Any item that is returned more than 30 days after delivery</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Refunds (if applicable)</p>
                        <p className='paragrath'>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</p>
                        <p className='paragrath'>If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Late or missing refunds (if applicable)</p>
                        <p className='paragrath'>If you haven’t received a refund yet, first check your bank account again.</p>
                        <p className='paragrath'>Then contact your credit card company, it may take some time before your refund is officially posted.</p>
                        <p className='paragrath'>Next contact your bank. There is often some processing time before a refund is posted.</p>
                        <p className='paragrath'>If you’ve done all of this and you still have not received your refund yet, please contact us at support@eorum.com.</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Sale items (if applicable)</p>
                        <p className='paragrath'>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.
                        Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Exchanges (if applicable)</p>
                        <p className='paragrath'>If you need to exchange it for the same item for larger or smaller size, send us an email at support@eorum.com</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Gifts</p>
                        <p className='paragrath'>If the item was marked as a gift when purchased and shipped directly to you, you’ll receive a gift credit for the value of your return. Once the returned item is received, a gift certificate will be mailed to you.</p>
                    </div>
                    <div>
                        <p className='paragrath'>If the item wasn’t marked as a gift when purchased, or the gift giver had the order shipped to themselves to give to you later, we will send a refund to the gift giver and he will find out about your return.</p>
                    </div>
                    <div>
                        <p className='paragrahtTitle'>Shipping</p>
                        <p className='paragrath'>To return your product, you should email us at support@eorum.com first.</p>
                    </div>
                    <div>
                        <p className='paragrath'>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund</p>
                    </div>
                    <div>
                        <p className='paragrath'>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.</p>
                    </div>
                    <div>
                        <p className='paragrath'>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item.</p>
                    </div>
                </Fade>
            </div>
        </section>
    )
}