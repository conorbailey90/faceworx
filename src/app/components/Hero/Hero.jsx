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
           
          <svg className={styles.fwLogo} xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 73.64 91">
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="m16.36,43.3v3.77h30.68c4.98,0,9.02,4.21,9.02,9.41h0s1.2,0,1.2,0v-13.18H16.36Z"/>
              <path d="m56.07,30.12h0c0,4.85-3.77,8.79-8.42,8.79h-31.29v3.77h40.91v-12.55h-1.2Z"/>
              <path d="m19.85,0H3.45C1.47.15-.07,1.73,0,3.64c.07,1.69,1.49,3.15,3.29,3.34s3.28-.75,3.9-2.13h0c.64,0,1.15.48,1.15,1.08v80.5c0,1.98-1.88,3.59-4.2,3.59h-.69v.98h21.29v-.98h-.34c-2.51,0-4.55-1.74-4.55-3.89V7.78c0-1.62,1.4-2.93,3.13-2.93h31.67c7.77,0,14.37,4.64,16.82,11.13.42,1.11-.39,2.23-1.64,2.35-.02,0-.03,0-.05,0-1.53.16-2.79,1.31-3.01,2.73-.32,2.08,1.49,3.86,3.69,3.7,1.82-.13,3.17-1.64,3.17-3.35V4.85s0-4.85,0-4.85H19.85Z"/>
            </g>
          </svg>
            <h1 className={styles.logo}> FACEWORX</h1>
            <h3 className={styles.tagLine}>Be Your Own Kind Of Beautiful.</h3>
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

