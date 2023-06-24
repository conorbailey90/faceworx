import styles from './EmailConfirmation.module.css'

export default function EmailConfirmation({name}){

    return(
        <div className={styles.container}>
            <h4>Hi {name}! Thank you for your message. We will respond shortly.</h4><br />
            <h5 style={{textAlign: 'center'}}>Close</h5>
        </div>
    )
}