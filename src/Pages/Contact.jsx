import styles from '../css/Contact.module.css';

export function Contact() {
    return (
        <section className={`${styles.formContainer} container`}>


            <form action="" className={styles.form}>
                <fieldset className={styles.formFieldset}>
                    <h1 className={styles.title}>Contact</h1>
                    <div className={styles.containerLabel}>
                        <label className={styles.formLabel} htmlFor="email">Email:</label>
                        <input className={styles.formInput} type="email" id="email" placeholder="Exemple@email.com"/>
                    </div>
                    <div className={styles.containerLabel}>
                        <label className={styles.formLabel} htmlFor="asunto">Asunto:</label>
                        <input className={styles.formInput} type="text" name="asunto" id="asunto" placeholder="Help me..."/>
                    </div>
                    <div className={styles.containerLabel}>
                        <label htmlFor="">Menssage</label>
                        <textarea className={styles.formInput} name="" id="" cols="30" rows="10" placeholder='Menssage...'></textarea>
                    </div>
                </fieldset>
                <input className={styles.formButton} type="submit" value="Submit" />
            </form>
        </section>
    );
};