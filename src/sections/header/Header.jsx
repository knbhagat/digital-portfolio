import React from 'react'
import { useState, useEffect } from 'react'
import './header.css'
import Me from "../../features/mePicture.png"
import CoverLetter from "../../features/coverLetter.pdf"
import HeaderSocials from './HeaderSocials'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Header = () => {
  const [color, setColor] = useState("var(--color-bg-variant")
  const [index, setIndex] = useState(0) //checker for index
  const [isDeleting, setIsDeleting] = useState("false") //checker for deletion
  const [textType, setTextType] = useState('') //words being typed
  const [typeTime, setTypeTime] = useState(200) //start time to tyoe, will get halved
  const wordsToBeRotated = ["Junior Developer","Software Engineer","UI/UX Designer", "College Student"]

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typeTime)

    return () => {
      clearInterval(ticker);
    }
  }, [textType]) //run everytime the text gets updated

  function tick() {
    let whole = wordsToBeRotated[index % wordsToBeRotated.length];
    let update = isDeleting === "true" ? whole.substring(0, textType.length - 1) : whole.substring(0, textType.length + 1);

    setTextType(update);

    if (isDeleting === "true") {
      setTypeTime(prevTypeTime => prevTypeTime / 1.75)
    }

    if (isDeleting === "false" && update === whole) { //not changing to true
      setTypeTime(2000);
      setIsDeleting("true");
    } else if (isDeleting === "true" && update === '') {
      setIsDeleting("false");
      setIndex(index + 1);
      setTypeTime(200);
    }
  }

  return (
    <header id = 'header'>
      <div className = "container header-container">
        <h5> Hello I'm </h5>
        <h1> Krishaan Bhagat </h1>
        <h4>A <span className= "text-light">{textType}</span></h4>
        <div className = "button-container">
          <a className = "btn btn-secondary" href = {CoverLetter} download = {CoverLetter}>Download CV</a>
          <a className = "btn btn-primary" href = "#contact"> Let's Connect </a>
        </div>
        <HeaderSocials />
        <div className = "myself">
          <img src = {Me} alt = "mePicture" >
          </img>
        </div>
        <div className = "scrollDownDivision">
          <a href = "#contact" className='scrollDown' onMouseEnter = {() => setColor("white")} onMouseLeave = {() => setColor('var(--color-bg-variant')} style = {{'color' : color }} >
            Scroll Down
          </a>
          <AiOutlineArrowRight className = "arrow" onMouseEnter = {() => setColor("white")} onMouseLeave = {() => setColor('var(--color-bg-variant')} style = {{ 'color' : color}}/> 
        </div>
      </div>
    </header>
  )
}

export default Header