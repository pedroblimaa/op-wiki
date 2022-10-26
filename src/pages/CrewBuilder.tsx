

import styles from '../styles/CrewBuilder.module.css'
import CrewCharCard from '../components/CrewCharCard'

export default function CrewBuilder(){
    return (
        <div className='page'>
            <h1 className='page-title'>Crew Builder</h1>
            <div className={styles.CrewContent}>
                <CrewCharCard />
            </div>
        </div>
    )
}