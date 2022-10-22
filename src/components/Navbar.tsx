import styles from '../styles/Navbar.module.css'
import strawHatIco from '../assets/straw-hat.png'
import Sandwich from './Sandwich'

export default function Navbar() {

    const onClick = () => {
        console.log('clicked')
    }

    return (
        <nav className={styles.Navbar}>
            <div className={styles.TitleContainer}>
                <img src={strawHatIco} alt="Straw Hat Icon" />
                <h1 className={styles.Title}>One Piece Wiki</h1>
            </div>
            <Sandwich onClick={onClick}/>
        </nav>
    )
}