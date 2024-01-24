import {useState, useRef} from 'react'
import styles from './FAQItem.module.css'

function FAQItem({question, answer}) {
    const [active, setActive] = useState(false);
    const panel = useRef();

    const handleClick = () => {
        setActive(prev => !prev);
        let panelSibling = panel.current;

        if (panelSibling.style.maxHeight) {
            panelSibling.style.maxHeight = null;
        } else {
            panelSibling.style.maxHeight = panelSibling.scrollHeight + "px";
        }
    }

  return (
    <>
        <button onClick={handleClick} className={active ? `${styles.accordion} ${styles.active}` : styles.accordion}><h5>{question}</h5></button>
        <div ref={panel} className={styles.panel}>
            <br />
            <p>{answer}</p>
            <br />
        </div>
    </>
  )
}

export default FAQItem