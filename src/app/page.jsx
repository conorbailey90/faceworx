
import styles from './page.module.css'
import {Hero, About, Testimonial, Treatments, Contact, Location, Canvas, MobileNav, Separator , Prices, FAQ} from './components/export'
export const metadata = {
  title: 'FACEWORX',
  description: 'Faceworx anti-wrinkle injections, dermal fillers and skin boosters.',
  openGraph: { type: "website", url: "https://faceworx.beauty", title: "FACEWORX", description: "Faceworx anti-wrinkle injections, dermal fillers and skin boosters.", siteName: "FACEWORX", image: '/public/images/logo.png'}
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
      <Contact>
        <Location />
      </Contact>
    </main>
  )
}
