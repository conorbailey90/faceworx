'use client'
import {useRef, useEffect} from 'react'
import styles from './Canvas.module.css'

function Canvas() {
   
    return (
        <div className={styles.container}>
            <div className={styles.overlay}></div>
        </div>
    )
}

export default Canvas