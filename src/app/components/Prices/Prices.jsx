import React from 'react'
import styles from './Prices.module.css'

function Prices() {
  return (
    <div id='about' className={styles.container}>
    <div className={styles.subContainer}>
        <h2 style={{gridColumn: '1 / span 12', marginBottom: '1rem'}}>Price List</h2>
     
        <div className={styles.botoxPrices}>
          <h3 style={{marginBottom: '1rem'}}>Botox</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>1 Area</p>
              <p>£200</p>
            </li>
            <li className={styles.priceLi}>
              <p>2 Areas</p>
              <p>£220</p>
            </li>
            <li className={styles.priceLi}>
              <p>3 Areas</p>
              <p>£250</p>
            </li>
          </ul>
        </div>
        <div className={styles.dfPrices}>
        <h3 style={{marginBottom: '1rem'}}>Dermal Fillers</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>Volume Lips 1.1ml</p>
              <p>£180</p>
            </li>
            <li className={styles.priceLi}>
              <p>Volume Lips 0.5ml</p>
              <p>£150</p>
            </li>
            <li className={styles.priceLi}>
              <p>Cheeks Contour</p>
              <p>£250</p>
            </li>
            <li className={styles.priceLi}>
              <p>Jawline Contour</p>
              <p>£250</p>
            </li>
            <li className={styles.priceLi}>
              <p>Marionette Lines</p>
              <p>£250</p>
            </li>
          </ul>
        </div>
     
    </div>
  </div>
  )
}

export default Prices