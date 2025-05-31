'use client'
import Image from 'next/image'
import styles from './About.module.css'
import { motion } from "framer-motion"

export default function About() {
  return (
    <div id='about' className={styles.container}>
      <div className={styles.subContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 1, delay: 0 }}   className={styles.aboutText}>
            <h2>Welcome</h2> <br />
            <p>Welcome to Faceworx! At Faceworx, we’re passionate about helping you feel confident and radiant in your own skin with treatments tailored just for you. Whether you’re looking to smooth away wrinkles, lift your natural features, or rejuvenate your glow, we’re here to guide you every step of the way with expertise and care.</p><br />
            <p>At Faceworx, we offer a range of treatments to enhance your unique beauty. Our anti-wrinkle injections, like our popular Botox treatments for areas like bunny lines or gummy smiles, deliver natural-looking results.<br /><br />Curious about skin boosters or microneedling? From Profhilo to Derma 2.0’s advanced peels, we provide solutions to refresh and revitalize your skin, customized to your goals.</p><br />
            <p>Your safety, comfort, and satisfaction are our top priorities at Faceworx, and we’re dedicated to ensuring a welcoming and professional experience.</p><br />
            <p>Ready to discover the Faceworx difference? Book your consultation today and let’s start your journey to a more youthful, refreshed you! At Faceworx, we can’t wait to meet you!</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 1 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 1, delay: 0 }} 
          className={styles.imageContainer}>
            <Image src='/images/hero.webp' priority={false} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'cover', objectPosition: 'center', position: 'absolute'}} alt='about'></Image>
        </motion.div>
      </div>
    </div>
  )
}

