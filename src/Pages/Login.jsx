import { Link } from "react-router-dom"
import { Ruta } from "../components/Ruta"

import styles from '../css/Login.module.css'

import Fade from 'react-reveal/Fade';

import { Helmet } from 'react-helmet';


export function Login() {
    return (
        <section className={`container ${styles.login}`}>
            <Helmet>
                <title>Login 👤 || Eorum 🔥</title>
                <meta name="description" content="Login Eorum Website" />
            </Helmet>
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
                    <Link to='/'><button className="btn">Sing In</button></Link>
                    <Link className={styles.link} to='/create-acount'>Create Acount</Link>
                    <Link className={styles.link} >Forgot?</Link>
                </Fade>
            </form>
        </section>
    )
}