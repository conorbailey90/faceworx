'use client'
import Image from 'next/image'
import styles from './About.module.css'
import { motion } from "framer-motion"
// import Separator from '../Separator/Separator'

export default function About() {
  return (
    <div id='about' className={styles.container}>
      <div className={styles.subContainer}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{ duration: 1, delay: 0 }}   className={styles.aboutText}>
            <h2>Welcome</h2> <br />
            <p>Welcome to Faceworx, your trusted destination for personalized Botox and skin treatments. We specialize in helping you achieve your aesthetic goals with expert care and precision.
                Our advanced techniques and customized approach ensure effective solutions for your specific concerns. From reducing wrinkles to enhancing facial features, our Botox treatments provide natural-looking results that enhance your unique beauty.<br /><br />
                At Faceworx, your safety and comfort are our top priorities. We strive to create a relaxed and welcoming environment while delivering precise Botox injections.
                We believe in education and empowerment. We will understand your skincare goals, answer your questions, and provide personalized recommendations for maintaining and enhancing your results.<br /><br />
                In addition to Botox, we offer complementary skin treatments like dermal fillers and chemical peels to further enhance your appearance.
                Discover the transformative power of our Botox and skin treatments at Faceworx. Schedule your consultation today and take the first step towards a more youthful and refreshed look.
            </p>
            
        </motion.div>
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{opacity: 1}}
        transition={{ duration: 1, delay: 0 }} 
        className={styles.imageContainer}>
          <Image src='/images/hero.webp' priority={false} fill={true} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{objectFit: 'cover', objectPosition: 'center', position: 'absolute'}} alt='about'></Image>
        </motion.div>
      </div>
    </div>
  )
}

