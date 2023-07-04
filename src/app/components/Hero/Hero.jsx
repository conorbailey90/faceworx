'use client'

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';
import Logo from '../Logo/Logo';
import { motion } from "framer-motion"


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
    <motion.div 
    
    id='home' className={styles.container}>
        <motion.div    
        initial={{ opacity: 0 }}
        animate={{opacity: 1}}
        transition={{ duration: 1, delay: .5 }}  
        className={styles.heroImage}></motion.div>
        <motion.div className={styles.grid}>
         
        
          <motion.div 
            initial={{ opacity: 0, translateY: 5 }}
            animate={{opacity: 1, translateY: 0}}
            transition={{ duration: 1, delay: 1 }}  
            className={styles.heroText}>
            <Logo />
            <h5 className={styles.heroTag} style={{ textAlign: 'center', textTransform: 'uppercase', width: '100%', fontFamily: 'Sentient'}}>Welcome to Faceworx, <br /> your trusted destination for personalized Botox and skin treatments.</h5>
            <div className={styles.cta}>
              <Link className={styles.buttonFill} onClick={scrollHandle}  href="/#contact" id='contact-'>
                <div id="contact-">Book Appointment</div>
              </Link> 
              <Link className={styles.buttonStroke} onClick={scrollHandle}  href="/#treatments" id='treatments-'>
                <div id="treatments-" >Treatments</div>
              </Link> 
            </div>
                   
          </motion.div>
          
          
        </motion.div>
        <motion.div 
        initial={{ opacity: 0}}
        animate={{opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}  
        className={styles.scrollIndicator}>
             <p>SCROLL</p>
        </motion.div> 
        <div className={styles.overlay}></div>
        {/* <div className={styles.fade}></div> */}
        <motion.div 
          initial={{ opacity: .3 }}
          animate={{opacity: 1}}
          transition={{ duration: 1, delay: .5 }}  
          className={styles.fadeWhite}></motion.div>
       
    </motion.div>
  
  )
}

