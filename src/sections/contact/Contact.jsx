import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsTelephone} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id = "contact">
      <h5 className='text-light'>My Information</h5>
      <h2>Contact Me</h2>
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
        <form className='public-contact'>
          <input type = "text" name = 'name' placeholder = 'Enter Full Name' required className = "input-size input-style"/>
          <input type = "text" name = 'email' placeholder = 'Enter Email' className = "input-size input-style"/>
          <input type = "text" name = 'number' placeholder='Enter Phone Number' className = "input-size input-style"/>
          <textarea type = 'text' name = 'Message' placeholder='Enter Message' rows = "5" required className = 'input-style' />
          <button type = "submit" className = "btn btn-primary">Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact