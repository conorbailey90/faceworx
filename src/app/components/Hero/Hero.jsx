'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import Logo from '../Logo/Logo';


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
            <Logo />
            <h5 className={styles.heroTag} style={{ textAlign: 'center', textTransform: 'uppercase', width: '100%', fontFamily: 'Sentient'}}>Welcome to Faceworx, <br /> your trusted destination for personalized Botox and skin treatments.</h5>
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
        <div className={styles.scrollIndicator}>
             <h5>SCROLL</h5>
        </div> 
        <div className={styles.overlay}></div>
        <div className={styles.fade}></div>
        <div className={styles.fadeWhite}></div>
       
    </div>
  
  )
}

