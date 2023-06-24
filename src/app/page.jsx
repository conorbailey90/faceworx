import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Testimonial from './components/Testimonial/Testimonial';
import Treatments from './components/Treatments/Treatments';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Separator from './components/Separator/Separator';
import Canvas from './components/Canvas/Canvas';
import EmailConfirmation from './components/EmailConfirmation/EmailConfirmation';
import MobileNav from './components/MobileNav/MobileNav';

export const metadata = {
  title: 'FACEWORKS'
}

export default async function HomePage() {

  return (
    <main className={styles.main}>
      <MobileNav />
      <Canvas />
      <Hero />
      <About />
      <Separator id='treatments' />
      <Treatments />
      <Testimonial />
      <Separator id='contact' />
      <Contact>
        <Location />
      </Contact>
      
      {/* <EmailConfirmation /> */}
    </main>
  )
}
