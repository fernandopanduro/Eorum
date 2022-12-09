import { Link } from "react-router-dom"
import { Ruta } from "../components/Ruta"

import styles from '../css/Login.module.css'

import Fade from 'react-reveal/Fade';

export function Login() {
    return (
        <section className={`container ${styles.login}`}>
            <Fade top>
                <Ruta ruta='Login' />
                <h2 className='title'>Login</h2>
            </Fade>

            <form className={`${styles.form} form`}>
                <Fade bottom>
                    <div>
                        <label className={styles.label} htmlFor="emailLogin"></label>
                        <input className='input' type="text" id="emailLogin" autoComplete="email" placeholder="Email" required/>
                    </div>
                    <div>
                        <input className='input' type="password" id="passwordLogin" autoComplete="password" placeholder="Password" required/>
                    </div>
                    <button className="btn"><Link to='/'>Sing In</Link></button>
                    <Link className={styles.link} to='/create-acount'>Create Acount</Link>
                    <Link className={styles.link} >Forgot?</Link>
                </Fade>
            </form>
        </section>
    )
}