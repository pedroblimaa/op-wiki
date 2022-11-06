import styles from '../styles/CrewCharCard.module.css'
import '../styles/Card.css'
import PlusSign from './PlusSign'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CrewCharCard({ crewChar, crewAkumaNoMi, onClick, deleteCard }: any) {

    const toggleModal = (isCharModal: boolean) => {
        onClick(isCharModal)
    }

    return (
        <div className={styles.CardContainer}>

            {crewChar &&
                <button className={styles.DeleteButton} onClick={deleteCard}>
                    <FontAwesomeIcon className={styles.TrashIcon} icon={['far', 'trash-alt']} />
                </button>
            }
            <div className={styles.Card}>
                <div className={styles.CharCardContainer} onClick={() => { toggleModal(true) }}>
                    {crewChar?.img
                        ? <img className={`${styles.ImgCard} ${styles.Img} crew-card`} loading='lazy' src={crewChar.img} alt={crewChar.name} />
                        : <div className={`${styles.ImgCard} ${styles.Empty} crew-card`}>
                            <PlusSign />
                        </div>
                    }
                </div>
                <div className={styles.Names}>
                    <h3 className={styles.Name}>{crewChar?.name ?? 'Name'}</h3>
                    <h3 className={styles.AkumaNoMi}>{crewChar?.akumaNoMI ?? 'Akuma no Mi'}</h3>
                </div>
                <div className={styles.AkumaNoMiCardContainer} onClick={() => { toggleModal(false) }}>
                    {crewAkumaNoMi?.img
                        ? <img className={`${styles.ImgCard} ${styles.Img} crew-card`} loading='lazy' src={crewAkumaNoMi.img} alt={crewAkumaNoMi.name} />
                        : <div className={`${styles.ImgCard} ${styles.Empty} crew-card`}>
                            <PlusSign />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}