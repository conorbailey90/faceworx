
import styles from './page.module.css'
import {Hero, About, Testimonial, Treatments, PhotoGallery, Location, MobileNav, Separator , Prices, FAQ} from '../components/export'

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

  const images = [
  { src: '/images/fw-g-1.jpg', alt: 'Photo 1' },
  { src: '/images/fw-g-2.jpg', alt: 'Photo 2' },
  { src: '/images/fw-g-3.jpg', alt: 'Photo 3' },
  { src: '/images/fw-g-4.jpg', alt: 'Photo 4' },
  { src: '/images/fw-g-5.jpg', alt: 'Photo 5' },
  { src: '/images/fw-g-6.jpg', alt: 'Photo 6' },
  { src: '/images/fw-g-7.jpg', alt: 'Photo 7' }
  // Add more image objects as needed
  ];
 
 
  return (
    <main className={styles.main}>
      <MobileNav />
      <Hero />
      <About />
      <Separator id='treatments' />
      <Treatments />
      <PhotoGallery images={images}/>
      <Prices />
      <FAQ />
      <Testimonial />
      {/* <Contact /> */}
      <Location />
    </main>
  )
}
