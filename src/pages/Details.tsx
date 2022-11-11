import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../styles/Details.module.css'

export default function Details() {
    const location = useLocation()
    const item: any = location.state.item

    const returnPage = () => {
        window.history.back()
    }

    return (
        <div className='page'>
            <div className={styles.Header}>
                <button className={styles.ReturnBtn} onClick={returnPage}>
                    <FontAwesomeIcon className={styles.ReturnIcon} icon={'arrow-alt-circle-left'} />
                </button>
                <h1 className={styles.Title}>{item.name}</h1>
            </div>
            <div className={styles.Content}>
                <img src={item.img} alt={item.name} loading='lazy' />
                <p>{item.description}</p>
            </div>
        </div>
    )
}