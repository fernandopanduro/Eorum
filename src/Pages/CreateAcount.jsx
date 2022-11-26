import { Ruta } from "../components/Ruta"
import { Link } from "react-router-dom"
import styles from '../css/CreateAcount.module.css'

export function CreateAcount() {
    return (
        <section className={`container ${styles.createAcount}`}>
            <Ruta ruta='Create Acount' />
            <form className={styles.form}>
                <h2 className={styles.title}>Create Acount</h2>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="firstName">First Name</label>
                    <input className={styles.input} type="text" id="firstName" autoComplete="name" required/>
                </div>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="lastName">Last Name</label>
                    <input className={styles.input} type="text" id="lastName" autoComplete="lastname" required/>
                </div>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input className={styles.input} type="email" id="email" autoComplete="name" required/>
                </div>
                <div className={styles.labelContainer}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input className={styles.input} type="password" id="password" autoComplete="password" required/>
                </div>
                <input type="submit" className={styles.btnSubmit} name="" id="" value='Create'/>
                <Link to='/login'>Login</Link>
            </form>
        </section>
    )
}