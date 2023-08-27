import React from 'react'
import './experience.css'
import Skills from './Skills'

const Experience = () => {
  return (
    <section id = "experience">
      <div className= 'container experience-container'>
        <h5 className='text-light'> Technical Skill Set </h5>
        <h2> My Experience </h2>
        <Skills />
      </div>
    </section>
  )
}

export default Experience