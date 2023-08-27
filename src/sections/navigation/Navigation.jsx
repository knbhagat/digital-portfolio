import React from 'react'
import './navigation.css'
import {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {MdOutlineRecommend} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'

const Navigation = () => {
  const [activeIcon, setActiveIcon ] = useState('header')

  return (
    <nav>
      <a href = '#header' onClick = {() => setActiveIcon('header')} className = {activeIcon === 'header' ? 'activeIcon' : ''}><AiOutlineHome /></a>
      <a href = '#about' id = "meIcon" onClick = {() => setActiveIcon('about')} className = {activeIcon === 'about' ? 'activeIcon' : ''}><SiAboutdotme /></a> 
      <a href = '#experience' onClick = {() => setActiveIcon('experience')} className = {activeIcon === 'experience' ? 'activeIcon' : ''}><MdWorkOutline /></a> 
      <a href = '#projects' onClick = {() => setActiveIcon('projects')} className = {activeIcon === 'projects' ? 'activeIcon' : ''}><AiOutlineProject /></a>  
      <a href = '#testimonials' onClick = {() => setActiveIcon('testimonials')} className = {activeIcon === 'testimonials' ? 'activeIcon' : ''}><MdOutlineRecommend /></a>
      <a href = '#contact' onClick = {() => setActiveIcon('contact')} className = {activeIcon === 'contact' ? 'activeIcon' : ''}><MdOutlinePermContactCalendar /></a>
    </nav>
  )
}

export default Navigation