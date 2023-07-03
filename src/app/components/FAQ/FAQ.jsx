'use client'

import React from 'react'
import FAQS from './FAQS'
import FAQItem from './FAQItem'
import styles from './FAQ.module.css'




function FAQ() {
    const handleClick = (e) => {
        console.log(e.target)
        e.target.classList.toggle('active')
    }
  return (
    <div className={styles.container}>
    <div className={styles.subContainer}>
        <h2 style={{gridColumn: '1 / span 12'}}>FAQ's</h2>

        <div className={styles.accordianContainer}>
            {FAQS.map(faq => (
                <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
            ))}
        </div>
     
     
    </div>
  </div>
  )
}

export default FAQ