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
            <h3>Botox</h3><br />
            <p>Experience smoother, more youthful-looking skin with our Botox treatments. Our skilled team delivers safe and effective injections, targeting facial wrinkles and lines. Achieve natural-looking results with minimal downtime. Schedule your consultation today.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentTwo}>
            <h3>Dermal Fillers</h3><br />
            <p>Enhance your natural beauty with our dermal filler treatments. Our expert team utilizes safe and effective injectables to restore volume and reduce the appearance of wrinkles and folds. Achieve a youthful, refreshed look with little to no downtime. Book your consultation now.</p>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }}
        className={styles.treatmentThree}>
            <h3>Booster</h3><br />
            <p>Revitalize your skin with our dermal booster treatments. Our skilled professionals use advanced techniques and premium products to hydrate and rejuvenate your skin from within. Experience a plumper, more radiant complexion with minimal downtime. Discover the secret to youthful skin and schedule your consultation today.</p>
        </motion.div>
    </div>
  )
}