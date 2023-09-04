import React from 'react'
import { useState } from 'react'
import Header from './sections/header/Header'
import Navigation from './sections/navigation/Navigation'
import About from './sections/about/About'
import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import Testimonials from './sections/testimonials/Testimonials'
import Projects from './sections/projects/Projects'
import Experience from './sections/experience/Experience'


const App = () => {

  return (
    <>
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App