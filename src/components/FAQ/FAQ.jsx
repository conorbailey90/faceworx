'use client'

import React from 'react'
import FAQS from './FAQS'
import FAQItem from './FAQItem'
import styles from './FAQ.module.css'
import { motion } from 'framer-motion'



function FAQ() {
   
  return (
    <div id='faq' className={styles.container}>
      <motion.div 
      
      initial={{ opacity: 1 }}
            whileInView={{opacity: 1}}
            transition={{ duration: 1, delay: 0 }}
            className={styles.subContainer}>
          <h2 style={{gridColumn: '1 / span 12'}}>FAQ's</h2>

          <div className={styles.accordianContainer}>
              {FAQS.map(faq => (
                  <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
              ))}
          </div>
      </motion.div>
  </div>
  )
}

export default FAQ