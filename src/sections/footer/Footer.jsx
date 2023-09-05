import React from 'react'
import './footer.css'
import '../navigation/navigation.css'
import {BsGithub} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiOutlineHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {MdWorkOutline} from 'react-icons/md'
import {AiOutlineProject} from 'react-icons/ai'
import {MdOutlineRecommend} from 'react-icons/md'
import {MdOutlinePermContactCalendar} from 'react-icons/md'

const links = [{text : 'Github', link : 'https://github.com/knbhagat', Logo : BsGithub}, {text : 'LinkedIn', link : 'https://www.linkedin.com/in/krishaan-bhagat/', Logo : IoLogoLinkedin}];
const nav = [{text : 'Home', Logo : AiOutlineHome, ref : '#header'} , {text : 'About', Logo : SiAboutdotme, ref : '#about'}, {text : 'Skills', Logo : MdWorkOutline, ref : '#experience'}, {text: 'Projects', Logo : AiOutlineProject, ref : '#projects'}, {text : 'Rec', Logo : MdOutlineRecommend, ref : '#testimonials'}, {text : 'Contact', Logo : MdOutlinePermContactCalendar, ref : '#contact'}];

const Footer = () => {
  return (
    <section id= "footer">
      <h2>Let's Talk</h2>
      <div className = "container footer-container">
        <div className = "icon-container">
          {links.map(({text, link, Logo}) => {
            return (
              <div className='iconAndtext' key = {text}>
                <a className='icons' href ={link} target = "_blank" rel = "noreferrer">
                  {React.createElement(Logo, { className: 'icon-logo' })}
                  <p className='icon-text'>{text}</p>
                </a>
              </div>
            )
          })}
        </div>
        <div className = "footer-nav">
          {nav.map(({ref, text, Logo}) => {
            return (
              <div className='iconAndtext' key = {text}>
                <a className='icons' href ={ref}>
                  {React.createElement(Logo, { className: 'icon-logo' })}
                  <p className='icon-text'>{text}</p>
                </a>
              </div>
            )
          })}
        </div>
        <p id = "copyright">
        Copyright ©2023; Designed by <span id = "footer-author">Krishaan Bhagat</span>
        </p>
      </div>
    </section>
  )
}

export default Footer