
import styles from './page.module.css'
import { getCategories } from '../../sanity/sanity.query'
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
  let categories = []
  try{
    categories = await getCategories();

  }catch(err){
    console.log(err)
  }
 
  return (
    <main className={styles.main}>
      <MobileNav />
      <Hero />
      <About />
      <Separator id='treatments' />
      <Treatments />
      <Prices categories={categories} />
      <FAQ />
      <Testimonial />
      <Contact>
      <Location />
      </Contact>
    </main>
  )
}
