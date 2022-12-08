import { Ruta } from "../components/Ruta"
import { Link } from "react-router-dom"
import styles from '../css/CreateAcount.module.css'

export function CreateAcount() {
    return (
        <section className={`container ${styles.createAcount}`}>
            <Ruta ruta='Create Acount' />
                <h2 className='title'>Create Acount</h2>
            <form className={`${styles.form} form`}>
                <div>
                    <input className='input' type="text" id="firstName" autoComplete="name" placeholder="First Name" required/>
                </div>
                <div>
                    <input className='input' type="text" id="lastName" autoComplete="lastname" placeholder="Last Name" required/>
                </div>
                <div>
                    <input className='input' type="email" id="email" autoComplete="name" placeholder="Email" required/>
                </div>
                <div>
                    <input className='input' type="password" id="password" autoComplete="password" placeholder="Password" required/>
                </div>
                <button className={`btn`}><Link to='/'>Create</Link></button>
                <Link className={styles.link} to='/login'>Login</Link>
            </form>
        </section>
    )
}