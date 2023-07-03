'use client'
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from './Header.module.css'

export default function Header() {

    const [location, setLocation] = useState(window.location.href)
    const [mainPage, setMainPage] = useState()

    useEffect(() => {
        if(window.location.pathname !== '/privacy'){
            setMainPage(true)
        }else{
            setMainPage(false)
        }
        
    }, [])

    useEffect(() => {
        window.addEventListener('click', () => {
            setTimeout(() => {
                if(window.location.href !== location){
                    setLocation(window.location.href)
                }
                if(window.location.pathname !== '/privacy'){
                    setMainPage(true)
                }else{
                    setMainPage(false)
                }
            }, 50)
        })
    } ,[])

    const scrollHandle = (e) => {
        
        e.preventDefault();
        let id = e.target.id;
        let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
        window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
        position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
        
       }

    return(
        !mainPage ?
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.topLayer}>
                    <Link href={'/'}>
                        <div className={styles.logo}>
                            <h3>FACEWORX</h3>
                        </div>
                    </Link>
                </div>
               
                <div className={styles.navLinks}>
                    <ul>
                        <li className={styles.homeLink}><Link  id="home-" href="/#home">Home</Link></li>
                        <li className={styles.aboutLink}><Link   id="about-" href="/#about">About</Link></li>
                        <li className={styles.treatmentsLink}><Link  id="treatments-" href="/#treatments">Treatments</Link></li>
                        <li className={styles.contactLink}><Link   id="contact-" href="/#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>

        :

        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.topLayer}>
                <Link href={'/'}>
                    <div className={styles.logo}>
                        <h3>FACEWORX</h3>
                    </div>
                </Link >
                 
                </div>
               
                <div className={styles.navLinks}>
                    <ul>
                        <li className={styles.homeLink}><Link onClick={scrollHandle} id="home-" href="/#home">Home</Link></li>
                        <li className={styles.aboutLink}><Link onClick={scrollHandle} id="about-" href="/#about">About</Link></li>
                        <li className={styles.treatmentsLink}><Link onClick={scrollHandle} id="treatments-" href="/#treatments">Treatments</Link></li>
                        <li className={styles.contactLink}><Link onClick={scrollHandle} id="contact-" href="/#contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}