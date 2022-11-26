import { Link } from "react-router-dom"
import { Ruta } from "../components/Ruta"
import styles from '../css/Login.module.css'

export function Login() {
    return (
        <section className={`container ${styles.login}`}>
            <Ruta ruta='Login' />
            <form className={styles.form}>
                <h2 className={styles.title}>Login</h2>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="emailLogin">Email</label>
                    <input className={styles.input} type="text" id="emailLogin" autoComplete="email" required/>
                </div>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="passwordLogin">Password <span>Forgot?</span></label>
                    <input className={styles.input} type="password" id="passwordLogin" autoComplete="password" required/>
                </div>
                <input type="submit" className={styles.btnSubmit} name="" id="" value='Sing In'/>
                <Link to='/create-acount'>Create Acount</Link>
            </form>
        </section>
    )
}