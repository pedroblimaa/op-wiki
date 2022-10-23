import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import styles from '../styles/Navbar.module.css'
import strawHatIco from '../assets/straw-hat.png'
import Sandwich from './Sandwich'

export default function Navbar() {
    const ref = useRef(null)
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className={styles.NavbarContainer}>
            <nav className={styles.Navbar}>
                <div className={styles.TitleContainer}>
                    <img src={strawHatIco} alt="Straw Hat Icon" />
                    <h1 className={styles.Title}>OP Wiki</h1>
                </div>
                <menu>
                    <Sandwich onClick={toggleMenu} />
                    <ul ref={ref} className={styles.NavMenu + ` ${showMenu ? 'show' : 'hide-menu'}`}>
                        <Link to="/">
                            <li onClick={toggleMenu}>
                                Home
                            </li>
                        </Link>
                        <Link to='/characters'>
                            <li onClick={toggleMenu}>
                                Characters
                            </li>
                        </Link>
                        <Link to='/akuma_no_mi'>
                            <li onClick={toggleMenu}>
                                Akuma No Mi
                            </li>
                        </Link>
                    </ul>
                </menu>
            </nav>
        </div>
    )

}