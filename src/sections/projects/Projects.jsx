import React from 'react'
import './projects.css'
import Video1 from "../../features/PacManGameVideo.mp4"
import Img1 from "../../features/projectImg3.png"
import Img2 from "../../features/projectImg2.png"
import Img3 from "../../features/projectImg1.png"
import Img4 from "../../features/projectImg4.png"
import { useState } from 'react'

const outGoingProjects = [{image : Img3, id : 1, title : 'Webscraping Prizepicks & Comparing Betting Odds', githubLink : "https://github.com/knbhagat/WebScrapingPrizePicksSite.git", button1 : "InProgress"}
  ,{image : Img3, id : 2, title : 'Soccer Referee Chat AI Bot', githubLink: "https://github.com/knbhagat", button1 : 'InProgress'}
  ,{image : Img3, id : 3, title : 'Premier League Statistics Line', githubLink : "https://github.com/knbhagat", button1: "InProgress"}];

const smallProjects = [{image : Img2, id : 1, title : 'Notes App', githubLink : "https://github.com/knbhagat/learning-react-project.git", button1 : "Github", demo: "https://learning-react-project-knbhagat.vercel.app/", button2 : "Live Site"}
  ,{image : Img2, id : 2, title : 'Bouncing DVD Image', githubLink: "https://github.com/knbhagat/dvdImageGame.git", button1 : 'Github', demo : "https://knbhagat.github.io/dvdImageGame/Bouncing.html", button2: "Live Site"}];

const majorProjects = [
  {image : Img1, id : 1, title : 'SettleSmart Wep App - Hackathon', githubLink : "https://github.com/knbhagat/Hackathon-V1.git", button1 : "Github", demo: "https://mediaspace.esri.com/media/1_l193ns7v?kalturaSeekFrom=2755&kalturaClipTo=3330", button2 : "Live Demo"},
  {image : Img1, id : 2, title : 'Referee Assistance Webpage', githubLink : "https://github.com/knbhagat/soccerRefereeWebpage.git", button1 : "Github", demo: "https://soccer-referee-app.vercel.app", button2 : "Live Site"},
  {image : Img1, id : 3, title : 'Object Oriented Pac-Man Game', githubLink: "https://github.com/knbhagat/PacManGame.git", button1 : 'Github', demo : Video1 , button2: "Live Demo"}];



const Projects = () => {
  const initial = () => {
  return (
      <article className = "portfolio-project-item">
      <div className = "portfolio-image">
        <img src = {Img4} alt = "image2"></img>
      </div>
      <h3>Other Projects</h3>
      <div className = "button-seperator" >
        <a className = "btn-secondary btn-minContent" onClick = {miniProjects}>Mini Projects</a>
        <a className = "btn-primary btn-minContent" onClick = {outGoing}>Ongoing Projects</a>
      </div>
      </article>
  )}

  const [projects, setProjects] = useState(initial);

  function reset() {
    setProjects(initial);
  }

  function miniProjects() {
    setProjects(() => {
      return (
        <>
          <article className = "portfolio-project-item">
          <div className = "portfolio-image">
            <img src = {Img4} alt = "image2"></img>
          </div>
          <h3>Other Projects</h3>
          <div className = "button-seperator">
            <a className = "btn-secondary btn-minContent" onClick = {reset}>Lessen Projects</a>
            <a className = "btn-primary btn-minContent" onClick = {outGoing}>Ongoing Projects</a>
          </div>
          </article>
          {smallProjects.map(({id, title, image, button1, githubLink, demo, button2}) => {
            return (
              <article key = {id} className = "portfolio-project-item">
              <div className = "portfolio-image">
                <img src = {image} alt = "image3"></img>
              </div>
              <h3> {title} </h3>
              <div className = "button-seperator">
                <a href = {githubLink} className = "btn-secondary" target = "_blank" rel = "noreferrer"> {button1} </a>
                <a href = {demo} className = "btn-primary" target = "_blank" rel = "noreferrer"> {button2} </a>
              </div>
              </article>
            )})}
        </>
      )
    });
  }

  function outGoing() {
    setProjects(() => {
      return (
        <>
          <article className = "portfolio-project-item">
          <div className = "portfolio-image">
            <img src = {Img4} alt = "image3"></img>
          </div>
          <h3>Other Projects</h3>
          <div className = "button-seperator" id= "change-item2" >
            <a className = "btn-secondary btn-minContent" onClick = {reset} id = "change-item1"> Lessen Projects </a>
            <a className = "btn-primary btn-minContent" onClick = {miniProjects}> Mini Projects </a>
          </div>
          </article>
          {outGoingProjects.map(({id, title, image, button1, githubLink}) => {
            return (
              <article key = {id} className = "portfolio-project-item">
              <div className = "portfolio-image">
                <img src = {image} alt = "image2"></img>
              </div>
              <h3> {title} </h3>
              <div className = "button-seperator">
                <a href = {githubLink} className = "text-secondary" target = "_blank" rel = "noreferrer"> {button1} </a>
              </div>
              </article>
            )})}
        </>
      )
    });
  }

  return (
    <section id = 'projects'>
      <h5 className = 'text-light'>
        My Recent Work
      </h5>
      <h2>
        Portfolio
      </h2>
      <div className = "container portfolio-container">
        {majorProjects.map(({id, title, image, button1, githubLink, demo, button2}) => {
            return (
              <article key = {id} className = "portfolio-project-item">
              <div className = "portfolio-image">
                <img src = {image} alt = "image1"></img>
              </div>
              <h3> {title} </h3>
              <div className = "button-seperator">
                <a href = {githubLink} className = "btn-secondary" target = "_blank" rel = "noreferrer"> {button1} </a>
                <a href = {demo} className = "btn-primary" target = "_blank" rel = "noreferrer"> {button2} </a>
              </div>
              </article>
            )})}
        {projects}
      </div>
    </section>
  )
}

export default Projects