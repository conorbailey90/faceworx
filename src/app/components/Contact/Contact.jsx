'use client'
import { useState, useRef } from 'react'

import styles from './Contact.module.css'

export default function Contact({children}) {

  const name = useRef();
  const email = useRef();
  const message = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('sending...')
    try{
      let request = await fetch("https://formsubmit.co/ajax/conbailey90@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name.current.value,
            email: email.current.value,
            message: message.current.value
        })
      })
      let res = await request.json();
      console.log(res)
      alert('Thank you for your email. We will respond shortly.')
      name.current.value = ''
      email.current.value = ''
      message.current.value = ''
    }catch(err){
      alert('Sorry, something went wrong. Please try again.')
      console.log(err)
    }
  }

  return (
    <div id='contact' className={styles.container}>
      
      <form className={styles.form} onSubmit={handleSubmit} action="https://formsubmit.co/conbailey90@gmail.com" method="POST">
          <h2>Get in touch</h2> <br />
          <p>For enquiries, please enter your name, email and message using the form below and we will respond to you as soon as possible. </p>
          <input type="hidden" name="_captcha" value="false" /> 
          <input placeholder='Enter name' className={styles.input} ref={name} type="text" name="name" required /> <br />
          <input placeholder='Enter email' className={styles.input} ref={email} type="email" name="email" required /> <br />
          <textarea placeholder='Enter message here.' className={styles.message} ref={message} name="message" id="" cols="30" rows="10"></textarea> <br />
          <button className={styles.submit} type="submit">Send</button>
      </form>
      {children}
    </div>
  )
}
