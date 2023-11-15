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
            <li className={styles.priceLi}>
              <div>
              <p>Anti Wrinkle Nose (Bunny Lines)</p>
              <p className={styles.desc}>Diminishes the lines formed on the nose.</p>
              </div>
             <div className={styles.price}>
              <p>£60</p>
             </div>
              
            </li>
            <li className={styles.priceLi}>
              <div className={styles.desc}>
                <p>Anti Wrinkle Gummy Smile</p>
                <p className={styles.desc}>Relaxes the top lip so less of the gums are visible when you smile.</p>
                
              </div>
             <div className={styles.price}>
              <p>£60</p>
             </div>
             
            </li>
            <li className={styles.priceLi}>
              <div className={styles.desc}>
              <p>Lip Flip</p>
              <p className={styles.desc}>This treatment subtly lifts the top lip, giving it more height and a fuller look.</p>
              </div>
              <div className={styles.price}>
                <p>£60</p>
              </div>
              
            </li>
            <li className={styles.priceLi}>
              <div className={styles.desc}>
              <p>Marionette Lines (Down-turned mouth)</p>
              <p className={styles.desc}>Relax the muscles that actively pull down the corners of the mouth.</p>
              </div>
              <div className={styles.price}>
                <p>£60</p>
              </div>
              
            </li>
            <li className={styles.priceLi}>
              <div className={styles.desc}>
              <p>Smokers Lines</p>
              <p className={styles.desc}>Fade the lines that can form around the mouth.</p>
              </div>
              <div className={styles.price}>
                <p>£60</p>
              </div>
              
            </li>

            <li className={styles.priceLi}>
              <div className={styles.desc}>
              <p>Baby Botox Facial - (Special Offer)</p>
              <p className={styles.desc}>A new skin rejuvenating technique that works to build collagen, give skin a major lift, plump wirnkles and dramtically increase skin glow with zero downtime. This popular treatment involves shallow botox injections applied directly to the face.</p>
              </div>
              <div className={styles.price}>
                <p><span style={{textDecoration: 'line-through', fontSize: '.8rem', opacity: '.6'}}>£99</span> £80</p>
              </div>
              
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
              <p>Skin booster prices start from £120</p>
            </li>
            <li className={styles.priceLi}>
              <p>1 Treatment</p>
              <p>£120</p>
            </li>
            <li className={styles.priceLi}>
              <p>2 Treatments</p>
              <p>£220</p>
            </li>
            <li className={styles.priceLi}>
              <p>3 Treatments</p>
              <p>£300</p>
            </li>
            <li className={styles.priceLi}>
              <p>Profhilo</p>
              <p>£240</p>
            </li>
            <li className={styles.priceLi}>
              <p>Sunekos (4 sessions)</p>
              <p>£400</p>
            </li>
            <li className={styles.priceLi}>
              <div>
              <p ><strong>Special Offer:</strong> Up to 3 areas of Botox and 1 Skin Booster treatment.</p><p className={styles.desc}> Choose from Infini Aqua Booster, Ejal 40 or Revs Pro 32 for £250!</p>

              </div>
              <div className={styles.price}>
              <p>£250</p>
              </div>
             
            </li>
          </ul>
        </div>
        <div className={styles.microNeedlingPrices}>
        <h3 style={{marginBottom: '1rem'}}>Micro Needling</h3>
          <ul>
            <li className={styles.priceLi}>
              <p>1 Treatment</p>
              <p>£75</p>
            </li>
            <li className={styles.priceLi}>
              <p>2 Treatments</p>
              <p>£145</p>
            </li>
            <li className={styles.priceLi}>
              <p>3 Treatments</p>
              <p>£210</p>
            </li>    
          </ul>
        </div>
     
    </motion.div>
  </div>
  )
}

export default Prices