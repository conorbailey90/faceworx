'use client'
import React from 'react'
import styles from './Prices.module.css';
import { motion } from 'framer-motion';
import Pricelist from './PriceList/Pricelist';

function Prices({categories}) {
  
  return (
    <div id='about' className={styles.container}>
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{ duration: 1, delay: 0 }}
    className={styles.subContainer}>

      {categories.map((category, idx) => (
        <Pricelist key={category.name} category={category} index={idx} />
      ))}
    </motion.div>
  </div>
  )
}

export default Prices