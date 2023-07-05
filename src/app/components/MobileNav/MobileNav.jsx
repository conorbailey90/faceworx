'use client'

import { useState } from 'react'
import Link from 'next/link'
import IgLogo from './IgLogo' 

import styles from './MobileNav.module.css'

function MobileNav() {
    const [menuActive, setMenuActive] = useState(false)
    
    const scrollHandle = (e) => {
        
        e.preventDefault();
        setMenuActive(false)
        let id = e.target.id;
        let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
        window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
    }

    const toggleMenu = () => {
        menuActive ? setMenuActive(false) : setMenuActive(true)
    }
  return (
    <>
        <div className={styles.container}>
            <div onClick={toggleMenu} className={styles.menuToggle}>
                <span></span>
                <span></span>
            </div>
        </div>
        <div className={menuActive ? `${styles.mobileNav} ${styles.active}` : `${styles.mobileNav}`}>
            <div className={styles.menuContainer}>
                <div onClick={toggleMenu} className={styles.menuClose}>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={styles.navLinks}>
                <li><Link className={styles.link} onClick={scrollHandle} id="home-" href="/#home">Home</Link></li>
                <li><Link className={styles.link} onClick={scrollHandle} id="about-" href="/#about">About</Link></li>
                <li><Link className={styles.link} onClick={scrollHandle} id="treatments-" href="/#treatments">Treatments</Link></li>
                <li><Link className={styles.link} onClick={scrollHandle} id="contact-" href="/#contact">Contact</Link></li>
            </ul>
            <div className={styles.separator}></div>   
            <div style={{width: '95%'}}>
                <a className={styles.igLink} href="https://instagram.com/faceworx.beauty?igshid=MzRlODBiNWFlZA" target='_blank'>  
                    <IgLogo color='#ee9ca7' />
                </a>
            </div>
            
            </div>
       
    </>
   
  )
}

export default MobileNav