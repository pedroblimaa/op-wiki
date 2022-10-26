import styles from '../styles/PlusSign.module.css'
import '../styles/Card.css'

export default function PlusSign() {
    return (
        <div className={styles.PlusSign}>
            <div className={`${styles.PlusSignLine} card-child`}></div>
            <div className={`${styles.PlusSignLine} card-child`}></div>
        </div>
    )
}