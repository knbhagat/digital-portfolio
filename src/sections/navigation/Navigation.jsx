import React from 'react'
import './navigation.css'
import {useState, useEffect} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {MdOutlineRecommend} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'

const Navigation = () => {
  const [activeIcon, setActiveIcon ] = useState('header');
  const [navDisplay, changeDisplay] = useState('block');

  useEffect(() => {
    // Function to handle scrolling and toggle the navigation bar visibility
    const handleScroll = () => {
      const footerElement = document.querySelector('#footer');
      const windowHeight = window.innerHeight;
      const footerPosition = footerElement.getBoundingClientRect().top;
      // Check if the footer is within the viewport
      if (footerPosition <= windowHeight) {
        changeDisplay('none');
      } else {
        changeDisplay('block');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav style = {{'display' : navDisplay}}>
      <a href = '#header' onClick = {() => setActiveIcon('header')}><AiOutlineHome className = {activeIcon === 'header' ? 'activeIcon icon' : 'icon'}/></a>
      <a href = '#about' id = "meIcon" onClick = {() => setActiveIcon('about')}><SiAboutdotme className = {activeIcon === 'about' ? 'activeIcon icon' : 'icon'}/></a> 
      <a href = '#experience' onClick = {() => setActiveIcon('experience')}><MdWorkOutline className = {activeIcon === 'experience' ? 'activeIcon icon' : 'icon'}/></a> 
      <a href = '#projects' onClick = {() => setActiveIcon('projects')}><AiOutlineProject className = {activeIcon === 'projects' ? 'activeIcon icon' : 'icon'}/></a>  
      <a href = '#testimonials' onClick = {() => setActiveIcon('testimonials')}><MdOutlineRecommend className = {activeIcon === 'testimonials' ? 'activeIcon icon' : 'icon'}/></a>
      <a href = '#contact' onClick = {() => setActiveIcon('contact')}><MdOutlinePermContactCalendar className = {activeIcon === 'contact' ? 'activeIcon icon' : 'icon'}/></a>
    </nav>
  )
}

export default Navigation