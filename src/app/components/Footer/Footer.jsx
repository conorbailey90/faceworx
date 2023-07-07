import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import igLogo from 'public/svg/logo-instagram.svg'

export default function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
        <div className={styles.footerContact}>
            <h3 className={styles.logo}>FACEWORX</h3>
            <p>Spinnakers</p>
            <p>Laindon Common Road</p>
            <p>Little Burstead</p>
            <p>Billericay</p>
            <p>Essex</p><br/>
            <p>CM12 9TD</p>
            <br />
            <p>Phone: 07545 563246 </p>
            <p>E-Mail: <a style={{color: 'white'}} target='_blank' href="mailto:info@faceworx.beauty">info@faceworx.beauty</a></p>

        </div>
        <div className={styles.socials}>
    
           
        </div>
          <Link style={{color: 'grey', marginTop: '2rem'}} href={'/privacy'}>Privacy Policy</Link>
        </div>
    </footer>
  )
}
