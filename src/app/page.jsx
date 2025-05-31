
import styles from './page.module.css'
import {Hero, About, Testimonial, Treatments, Contact, Location, MobileNav, Separator , Prices, FAQ} from '../components/export'

export const metadata = {
  title: 'FACEWORX',
  description: 'Faceworx anti-wrinkle injections, dermal fillers and skin boosters.',
  openGraph: { type: "website", url: "https://faceworx.beauty", title: "FACEWORX", description: "Faceworx anti-wrinkle injections, dermal fillers and skin boosters.", siteName: "FACEWORX", image: '/images/logo.png'},
  icons: {
    icon: '/images/favicon.ico',
  },
}

export const revalidate = 10 

export default async function HomePage() {
 
 
  return (
    <main className={styles.main}>
      <MobileNav />
      <Hero />
      <About />
      <Separator id='treatments' />
      <Treatments />
      <Prices />
      <FAQ />
      <Testimonial />
      {/* <Contact /> */}
      <Location />
    </main>
  )
}
