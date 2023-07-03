import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import {Hero, About, Testimonial, Treatments, Contact, Location, Canvas, MobileNav, Separator , Prices, FAQ} from './components/export'
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
      <Prices />
      <FAQ />
      <Testimonial />
      <Separator id='contact' />
      <Contact>
        <Location />
      </Contact>
      
      {/* <EmailConfirmation /> */}
    </main>
  )
}
