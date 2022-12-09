import styles from '../css/Ruta.module.css'


export function Ruta({ruta}) {
    return (
        <div className={styles.ruta}>
            Home / {ruta}        
        </div>
    )
}