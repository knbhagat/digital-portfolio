import React from 'react'
import './about.css'
import {BiTimeFive} from 'react-icons/bi'
import {TbSchool} from 'react-icons/tb'
import {MdOutlineGrade} from 'react-icons/md'

const About = () => {
  return (
    <section id = "about">
      <div className='container about-container'>
        <div className = 'content-container'>
          <h5 className = 'text-light'>
            Get To Know
          </h5>
          <h2>
            About Me
          </h2>
          <div className = 'about-cards'>
            <div className = "about-box">
              <TbSchool className = "icons"/>
              <h5>School</h5>
              <small>UW Madison</small>
            </div>
            <div className = "about-box">
              <BiTimeFive className = "icons"/>
              <h5>Experience</h5>
              <small>3 Years</small>
            </div>
            <div className = "about-box">
              <MdOutlineGrade className = "icons"/>
              <h5>Gpa</h5>
              <small>4.0/4.0</small>
            </div>
          </div>
          <div className = "par">
            <p className = "text-light">
              I'm a junior at the University of Wisconsin-Madison, majoring in computer science. The ever-expanding possibilities of technology have me hooked, and I'm passionate about becoming a full stack developer or software engineer. What drives me is the chance to craft practical solutions through code. From enhancing user experiences to tackling complex problems, I'm thrilled by the creative and logical blend that programming offers. I'm eagerly embracing the learning journey, excited to master both front-end finesse and back-end robustness. Let's shape the future together.
            </p>
            <a className = "btn btn-primary" href = "#contacts" > Let's Connect </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About