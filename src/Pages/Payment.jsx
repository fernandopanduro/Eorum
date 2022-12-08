import { Ruta } from '../components/Ruta'
import styles from '../css/Payment.module.css'
import { Link } from 'react-router-dom'

export function Payment() {
    return (
        <section className='container'>
            <Ruta ruta='Payment' />
            <h2 className='title'>Payment</h2>
            <form action="" className='form'>
                <fieldset>
                    <div>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input className='input' type="number" id='cardNumber' placeholder='1234 7843 1237 1279' required/>
                    </div>
                    <div className={styles.labelsContainer}>
                        <div className={styles.labelContainer}>
                            <label htmlFor="dateExpiry">Expiry Date</label>
                            <input className='input' type="month" name="" id="dateExpiry" required/>
                        </div>
                        <div className={styles.labelContainer}>
                            <label htmlFor="cvv">CVV</label>
                            <input className='input' type="number" name="" id="cvv" placeholder='XXX' required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="cardName">Card Name</label>
                        <input className='input' type="text" id='cardName' placeholder='Name' required/>
                    </div>
                    <div className='checkboxContainer'>
                        <input type="checkbox" name="saveCard" id="saveCard" checked/>
                        <label htmlFor="saveCard">Save card details</label>
                    </div>
                </fieldset>
            </form>
                <button className='btn'><Link to='/paidOut'>Pay</Link></button>
        </section>
    )
}