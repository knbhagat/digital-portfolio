import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y97xiym', 'template_uxmdjqi', form.current, 'sD-mfMnBaf6fHDHr8');
  };

  return (
    <section id = "contact">
      <h5 className='text-light'>My Information</h5>
      <h2>Get In Touch</h2>
      <div className = "container contact-container">
        <article className = "independent-contact">
          <div className = "contact-information">
            <BsTelephone className='text-light rotate-icon' />
            <h5>Phone Message</h5>
            <h5>1 (630)965-1031</h5>
            <h6 className='text-light'>Send Me An Message!</h6>
          </div>
          <div className = "contact-information">
            <HiOutlineMail className='text-light rotate-icon'/>
            <h5>Email</h5>
            <h5>Krishaanb@gmail.com</h5>
            <h6 className='text-light'>Send Me An Email!</h6>
          </div>
        </article>
        <form className='public-contact' ref = {form} onSubmit={sendEmail}>
          <div id = "contact-display">
            <div id = "color-fill"> </div>
            <h3>Contact Me</h3>
          </div>
          <input type = "text" name = 'name' placeholder = 'Enter Full Name' required className = "input-size input-style"/>
          <div id = "input-seperator">
            <div id = "email-seperator">
              <input type = "text" name = 'email' placeholder = 'Enter Email' className = "input-size input-style" required />
              <input type = "text" name = 'subject' placeholder = 'Enter Subject' className = "input-size input-style" required/>
            </div>
            <input type = "text" name = 'number' placeholder='Enter Number' className = "input-size input-style" id = "phone-input" required = {false} />
          </div>
          <textarea type = 'text' name = 'message' placeholder='Enter Message' rows = "5" required className = 'input-style' />
          <button type = "submit" className = "btn btn-primary">Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact