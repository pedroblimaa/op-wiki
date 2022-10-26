

import styles from '../styles/CrewCharCard.module.css'
import '../styles/Card.css'
import PlusSign from './PlusSign'

export default function CrewCharCard({ crewChar }: any) {
    return (
        <div className={styles.Card}>
            <div className={styles.CharCardContainer}>
                {crewChar?.charImage
                    ? <img className={`${styles.ImgCard} ${styles.Img} crew-card`} src={crewChar.charImage} alt={crewChar.name} />
                    : <div className={`${styles.ImgCard} ${styles.Empty} crew-card`}>
                        <PlusSign />
                    </div>
                }
            </div>
            <div className={styles.Names}>
                <h3 className={styles.Name}>{crewChar?.name ?? 'Name'}</h3>
                <h3 className={styles.AkumaNoMi}>{crewChar?.akumaNoMI ?? 'Akuma no Mi'}</h3>
            </div>
            <div className={styles.AkumaNoMiCardContainer}>
                {crewChar?.akumaNoMiImg
                    ? <img className={`${styles.ImgCard} ${styles.Img} crew-card`} src={crewChar.akumaNoMiImg} alt={crewChar.akumaNoMi} />
                    : <div className={`${styles.ImgCard} ${styles.Empty} crew-card`}>
                        <PlusSign />
                    </div>
                }
            </div>
        </div>
    )
}