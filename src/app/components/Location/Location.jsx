import styles from './Location.module.css'

export default function Location() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h2>Where to find us</h2>
            
        </div>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4955.740837934999!2d0.4026499961355453!3d51.60726285048728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8c0cee7f7040f%3A0xd31d7d26cb76072d!2sLittle%20Burstead%2C%20Billericay%20CM12%209TD!5e0!3m2!1sen!2suk!4v1686776137156!5m2!1sen!2suk" width="100%" height="450" style={{border:0}} allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade"></iframe>    
    </div>
  )
}

