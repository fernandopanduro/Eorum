import { Ruta } from '../components/Ruta'
import { Link } from 'react-router-dom'

import styles from '../css/Payment.module.css'

import Fade from 'react-reveal/Fade';

export function Payment() {
    return (
        <section className='container zIndex'>
            <Fade top>
                <Ruta ruta='Payment' />
                <h2 className='title'>Payment</h2>
            </Fade>
            <Fade bottom>
                <form action="" className='form'>
                    <Fade bottom>
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
                    </Fade>
                </form>
                    <button className='btn'><Link to='/paidOut'>Pay</Link></button>
            </Fade>
        </section>
    )
}