import styles from '../css/Contact.module.css';
import { Ruta } from '../components/Ruta'

export function Contact() {
    return (
        <section className={`container`}>

            <Ruta ruta='Contact'/>

            <h2 className='title'>Contact</h2>


            <form action="" className='form'>
                <fieldset>
                    <p className='paragrath'>Questions? Comments? Get in touch with you by filling out the email form below. We will get back to them within 24 hours. Email: support@eorum.com</p>
                    <h3 className='subtitle'>Send us an email</h3>
                    <div>
                        <input className='input' type="text" name="asunto" id="asunto" placeholder='Name'/>
                    </div>
                    <div>
                        <input className='input' type="email" id="email" placeholder='Email'/>
                    </div>
                    <div>
                        <textarea className='input' name="" id="" cols="30" rows="10" placeholder='Menssage'></textarea>
                    </div>
                </fieldset>
                <input className='btn' type="submit" value="Submit" />
            </form>
        </section>
    );
};