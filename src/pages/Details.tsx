import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import styles from '../styles/Details.module.css'

export default function Details() {
    const location = useLocation()
    const item: any = location.state.item

    return (
        <div className='page'>
            <h1 className={styles.Title}>{item.name}</h1>
            <div className={styles.Content}>
                <img src={item.img} alt={item.name} loading='lazy' />
                <p>{item.description}</p>
            </div>
        </div>
    )
}