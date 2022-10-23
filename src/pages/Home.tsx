import logo from '../logo.svg'
import styles from '../styles/Home.module.css'
import homeImg from '../assets/op-ep-1000.jpg'

export default function Home() {


    return (
        <div className={styles.Home}>
            <h1 className={styles.Title}>Welcome to One Piece Wiki</h1>
            <img className={styles.HomeImg} src={homeImg} alt="One Piece Image" />
            <h3 className={styles.Description}>Here you can check information about Characters, Akuma no Mi and create you own crew.</h3>
            <h3 className={styles.Description}>Stick around and have a <b>Bon Voyage!</b> </h3>
        </div>
    )
}
