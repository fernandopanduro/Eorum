import styles from '../css/Contact.module.css';

export function Contact() {
    return (
        <section className={`container`}>
            <div className='ruta'>
                Home / Contact
            </div>
            <h2 className={styles.title}>Contact</h2>


            <form action="" className={styles.form}>
                <fieldset className={styles.formFieldset}>
                    <p>Questions? Comments? Get in touch with you by filling out the email form below. We will get back to them within 24 hours. Email: support@eorum.com</p>
                    <h3 className={styles.subtitle}>Send us an email</h3>
                    <div className={styles.containerLabel}>
                        <label className={styles.formLabel} htmlFor="asunto">Name:</label>
                        <input className={styles.formInput} type="text" name="asunto" id="asunto"/>
                    </div>
                    <div className={styles.containerLabel}>
                        <label className={styles.formLabel} htmlFor="email">Email:</label>
                        <input className={styles.formInput} type="email" id="email"/>
                    </div>
                    <div className={styles.containerLabel}>
                        <label className={styles.formLabel} htmlFor="">Menssage:</label>
                        <textarea className={styles.formInput} name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </fieldset>
                <input className={styles.formButton} type="submit" value="Submit" />
            </form>
        </section>
    );
};