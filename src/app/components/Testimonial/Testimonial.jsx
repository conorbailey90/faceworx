'use client'
import { useEffect, useRef} from 'react'
import styles from './Testimonial.module.css'
import testimonials from './testimonials.json'


export default function Testimonial() {

    const scrollSection = useRef();
    const container = useRef()
    const bar = useRef();

    useEffect(() => {
        scrollSection.current.addEventListener('scroll', () => {
            let percent = (scrollSection.current.scrollLeft / (container.current.offsetWidth - container.current.parentElement.offsetWidth)) * 100 
            percent = Math.floor(percent)
            bar.current.style.transform = `translate3d(${percent / 2}%,0, 0)`;
        })
    },[])

    const handleScroll = (e) => {
        console.log(e.target.id)
        if(e.target.id === 'left'){
            scrollSection.current.scrollLeft -= 100;
        }else{
            scrollSection.current.scrollLeft += 100;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.header}>
                    <h2 style={{marginBottom: '1rem'}}>What our clients say.</h2>
                </div>
                <div ref={scrollSection} className={styles.scrollSection}>
                    <div ref={container} className={styles.subContainer}>
                        {testimonials.map(t => (
                            <div className={styles.testimonialBlock}>
                                <p>"{t.testimonial}"</p><br />
                                <p>{t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.arrowContainer}>
                    <svg onClick={handleScroll} className={styles.svg} id='left' xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path id='left' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400L100 256l144-144M120 256h292"/></svg>
                    <svg onClick={handleScroll} className={styles.svg} id='right' xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path id='right' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>
                </div>
                <div className={styles.scrollIndicator}>
                    <div ref={bar} className={styles.progressBar}></div>
                </div>
            </div>
        </div>
    )
}

