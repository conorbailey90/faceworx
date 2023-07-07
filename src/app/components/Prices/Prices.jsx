'use client'
import React from 'react'
import styles from './Prices.module.css';
import { motion } from 'framer-motion';

function Prices() {
  return (
    <div id='about' className={styles.container}>
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{ duration: 1, delay: 0 }}
    className={styles.subContainer}>
        <h2 style={{gridColumn: '1 / span 12', marginBottom: '1rem'}}>Price List</h2>
     
        <div className={styles.botoxPrices}>
          <h3 style={{marginBottom: '1rem'}}>Anti-Wrinkle Injections</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>1 Area</p>
              <p>£80</p>
            </li>
            <li className={styles.priceLi}>
              <p>2 Areas</p>
              <p>£140</p>
            </li>
            <li className={styles.priceLi}>
              <p>3 Areas</p>
              <p>£200</p>
            </li>
          </ul>
        </div>
        <div className={styles.dfPrices}>
        <h3 style={{marginBottom: '1rem'}}>Dermal Fillers</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>Lips - 0.5ml</p>
              <p>£140</p>
            </li>
            <li className={styles.priceLi}>
              <p>Lips - 1ml</p>
              <p>£200</p>
            </li>
            <li className={styles.priceLi}>
              <p>Cheeks - 1ml</p>
              <p>£200</p>
            </li>
            <li className={styles.priceLi}>
              <p>Cheeks - 2ml</p>
              <p>£360</p>
            </li>
            
          </ul>
        </div>
        <div className={styles.fillerPackagesPrices}>
        <h3 style={{marginBottom: '1rem'}}>Filler Packages</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>Filler 3ml</p>
              <p>£520</p>
            </li>
            <li className={styles.priceLi}>
              <p>Filler 4ml</p>
              <p>£700</p>
            </li>
            <li className={styles.priceLi}>
              <p>Filler 5ml</p>
              <p>£850</p>
            </li>
            <li className={styles.priceLi}>
              <p>Filler 6ml</p>
              <p>£1,000</p>
            </li>
          </ul>
        </div>
        <div className={styles.skinBoosterPrices}>
        <h3 style={{marginBottom: '1rem'}}>Skin Boosters</h3>
          <ul>
         
            <li className={styles.priceLi}>
              <p>Skin booster prices start from £150</p>
            </li>
            <li className={styles.priceLi}>
              <p>Profhilo</p>
              <p>£240</p>
            </li>
            <li className={styles.priceLi}>
              <p>Sunekos (4 sessions)</p>
              <p>£400</p>
            </li>
          </ul>
        </div>
     
    </motion.div>
  </div>
  )
}

export default Prices