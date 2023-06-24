import styles from './Footer.module.css'

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
        </div>
        <div className={styles.socials}>
          <a href="">LI</a>
          <a href="">IG</a>
        </div>
    </div>
    </footer>
  )
}
