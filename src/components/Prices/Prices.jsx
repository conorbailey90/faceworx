'use client'
import React from 'react'
import styles from './Prices.module.css';
import { motion } from 'framer-motion';
import Pricelist from './PriceList/Pricelist';

function Prices() {

  const categories = [
    {
      catName: 'Anti-Wrinkle Injections',
      products: [
        {
          treatment: '1 Area',
          price: '£80'
        },
        {
          treatment: '2 Areas',
          price: '£140'
        },
        {
          treatment: '3 Areas',
          price: '£180'
        },
        {
          treatment: 'Anti Wrinkle Nose (Bunny Lines)',
          description: 'Diminishes the lines formed on the nose.',
          price: '£60'
        },
        {
          treatment: 'Anti Wrinkle Gummy Smile',
          description: 'Relaxes the top lip so less of the gums are visible when you smile.',
          price: '£60'
        },
        {
          treatment: 'Lip Flip',
          description: 'This treatment subtly lifts the top lip, giving it more height and a fuller look.',
          price: '£40'
        },
        {
          treatment: 'Smokers Lines',
          description: 'Fade the lines that can form around the mouth.',
          price: '£40'
        },
        {
          treatment: 'Baby Botox Facial',
          description: 'A new skin rejuvenating technique that works to build collagen, give skin a major lift, plump wrinkles and dramatically increase skin glow with zero downtime. This popular treatment involves shallow botox injections applied directly to the face.',
          price: '£80'
        }
      ]
    },
    {
      catName: 'Skin Boosters',
      products: [
        {
          treatment: '1 Treatment',
          price: '£120'
        },
        {
          treatment: '2 Treatments',
          price: '£220'
        },
        {
          treatment: '3 Treatments',
          price: '£300'
        },
        {
          treatment: 'Profhilo',
          price: '£240'
        },
        {
          treatment: 'Sunekos (4 sessions)',
          price: '£400'
        }
      ]
    },
    {
      catName: 'Lemon Bottle Fat Dissolve',
      products: [
        {
          treatment: 'Small Area (chin)',
          price: '£100'
        },
        {
          treatment: 'Medium Area (Arms, Inner Thighs)',
          price: '£140'
        },
        {
          treatment: 'Large Area (Outer Thighs, Abdomen, Love Handles)',
          price: '£200'
        }
      ]
    },
    {
      catName: 'Micro Needling',
      products: [
        {
          treatment: '1 Treatment',
          price: '£75'
        },
        {
          treatment: '2 Treatments',
          price: '£145'
        },
        {
          treatment: '3 Treatments',
          price: '£210'
        },
        {
          treatment: 'Polynucleotide Shine Skin Booster',
          description: '45 minute treatment',
          price: '£99',
          course: 'Course of 3 weekly treatments for £250'
        }
      ]
    },
    {
      catName: 'Derma 2.0®️ Microneedling Product Range',
      products: [
        {
          treatment: 'Derma 2.0®️ Repair',
          description: 'A powerful treatment for scars, stretch marks, and acne scarring.',
          price: '£120 per session',
          course: 'Course of 4 sessions £400'
        },
        {
          treatment: 'Derma 2.0®️ Bio - The Ultimate Glass Facial',
          description: 'Experience intense skin rejuvenation with Derma2.0 Bio, a powerful bio-revitalisation cocktail designed for the face, neck, décolleté, hands, and under-eye area.',
          price: '£120 per session',
          course: 'Course of 4 sessions £400'
        },
        {
          treatment: 'Derma 2.0®️ Firming',
          description: 'A powerful skin-firming and restructuring treatment designed to lift, firm, and tighten skin that has lost tone.',
          price: '£120 per session',
          course: 'Course of 4 sessions £400'
        },
        {
          treatment: 'Derma 2.0®️ DERMA-EXOSOME AGE',
          description: 'An advanced anti-aging and rejuvenating treatment using Exosomes derived from Citrus Reticulata Fruit. This fortifying cocktail is designed to reduce wrinkles, boost skin elasticity, and rejuvenate the face, neck, and hands.',
          price: '£120 per session',
          course: 'Course of 4 sessions £400'
        },
        {
          treatment: 'Derma 2.0®️ Bio Peel - Advanced Needle-Free Biorevitalisation',
          description: 'Revitalise skin with Derma 2.0 Bio Peel, an innovative chemical peel designed for deep skin rejuvenation without needles! Powered by Lactic Acid, Mandelic Acid, Salicylic Acid, DMAE, Vitamin E, and a nourishing blend of natural oils, this bi-phasic treatment gently exfoliates, hydrates, and firms for a youthful, radiant glow.',
          price: '£90 per treatment'
        }
      ]
    }
  ];

  
  return (
    <div id='about' className={styles.container}>
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{ duration: 1, delay: 0 }}
    className={styles.subContainer}>

      {categories.map((category, idx) => (
        <Pricelist key={category.catName} category={category} index={idx} />
      ))}
    </motion.div>
  </div>
  )
}

export default Prices