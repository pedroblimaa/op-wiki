import styles from '../styles/Modal.module.css'
import Characters from './Characters'

export default function Modal({toggleModal, children}: any) {

    return (
        < div className={styles.Modal}>
            <menu>
                <button onClick={toggleModal}>Return</button>
            </menu>
            <div className={styles.CharContainer}>
                {children}
            </div>
        </div>
    )
}