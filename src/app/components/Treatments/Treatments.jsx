'use client'
import styles from './Treatments.module.css'
import { motion } from 'framer-motion'

export default function Treatments() {
  return (
    <div id="treatments" className={styles.container}>
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{opacity: 1}}
      transition={{ duration: 1, delay: 0 }}
      style={{gridColumn: '4 / span 8'}}>
        <h2 >Treatments</h2>
      </motion.div>
      
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentOne}>
            <h3>Anti-Wrinkle Injections</h3><br />
            <p>Experience smoother, more youthful-looking skin with our anti-wrinkle injections. We provide safe and effective injections, targeting facial wrinkles and lines. Achieve natural-looking results with minimal downtime. Schedule your consultation today.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentTwo}>
            <h3>Dermal Fillers</h3><br />
            <p>Enhance your natural beauty with our dermal filler treatments. We utilise safe and effective injectables to restore volume and reduce the appearance of wrinkles and folds. Achieve a youthful, refreshed look with little to no downtime. Book your consultation now.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentThree}>
            <h3>Booster</h3><br />
            <p>Revitalize your skin with our dermal booster treatments. We use advanced techniques and premium products to hydrate and rejuvenate your skin from within. Experience a plumper, more radiant complexion with minimal downtime. Discover the secret to youthful skin and schedule your consultation today.</p>
        </motion.div>
        
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentFour}>
            <h3>Micro-Needling</h3><br />
            <p>A treatment that delivers a "controlled" injury to the skin using micro needles, causing collagen and elastin fibres to be stimulated to reproduce and cell turnover accelerated. Skin is left firmer, smoother and glowing.</p>
        </motion.div>
    </div>
  )
}