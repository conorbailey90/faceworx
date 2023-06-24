'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';


export default function Hero() {
  const scrollHandle = (e) => {
    e.preventDefault();
   
    let id = e.target.id;
    console.log(e.target)
    let position = document.getElementById(id.slice(0, id.length - 1)); //removing extra last - (dash)
    window.location.href = "#" + id.slice(0, id.length - 1); // changing the url
    position && position.scrollIntoView({ behavior: "smooth", block: "start" }) //scrolling the page
   }
  return (
    
    <div id='home' className={styles.container}>
        <div className={styles.heroImage}></div>
        <div className={styles.grid}>
          <div className={styles.heroText}>
            <h1 className={styles.logo}>FACEWORX</h1>
            <h3 className={styles.tagLine}>Reveal your true glow. <br /> Unleash radiant skin with our <br /> transformative treatments!</h3>
            <div className={styles.cta}>
              <Link className={styles.buttonFill} onClick={scrollHandle}  href="/#contact">
                <div id="contact-">Book Appointment</div>
              </Link> 
              <Link className={styles.buttonStroke} onClick={scrollHandle}  href="/#treatments">
                <div id="treatments-" >Treatments</div>
              </Link> 
            </div>
          </div>
       
          
        </div>
        <div className={styles.overlay}></div>
        <div className={styles.fade}></div>
        <div className={styles.fadeWhite}></div>
       
    </div>
  
  )
}

