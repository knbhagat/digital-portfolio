import React from 'react'
import './testimonials.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination} from 'swiper/modules';
import Img1 from "../../features/mePicture.png"
import Img2 from "../../features/Budha.png"

const recommendations = [{image : Img1, name : 'Besnik Alievski', title : 'Supervisor, Software Development & Aviation Networking Department', number : '(630) 240-9578', email : 'Besnik.alievski@anuvu.com', rec : "I highly endorse Krishaan Bhagat for his exceptional performance during his internship. His remarkable proficiency in swiftly grasping complex software projects, particularly in utilizing Linux and Python, greatly contributed to optimizing our aviation network. Notably, Krishaan's swift comprehension of WiFi connectivity monitoring and aircraft environment analysis demonstrated his remarkable talent for translating intricate concepts into actionable insights. His dedication to excellence, proactive mindset, and collaborative disposition make him a remarkable intern"}, {image : Img2, name : 'Budha Gupta', title : 'Full Stack Automation Architect', number : '(732) 585-2821', email : 'guptabud@gmail.com', rec : "I am excited to wholeheartedly recommend Krishaan Bhagat for his exceptional performance as a junior developer intern. Krishaan's rapid grasp of complex computer science concepts, coupled with his unwavering dedication, truly sets him apart. He seamlessly navigated both frontend and backend development roles, showcasing his ability to comprehend and apply new concepts effectively. Notably, his involvement in unit testing highlighted his commitment to producing robust and reliable code that goes beyond typical intern expectations. A notable achievement was his key role in a sophisticated SQL database creation project, where he exhibited analytical prowess, strategic thinking, and innate problem-solving skills. Krishaan's proactive approach, work ethic, and collaborative nature significantly enhanced team dynamics"}]
const Testimonials = () => {

  const [innerText, setText] = useState("Contact");
  const [display, setDisplay] = useState("none");
  const [clicker, changeClicker] = useState(true);

  function showContact() {
    setText("Show Less");
    setDisplay("inline-block");
    changeClicker(false);
  }

  function hideContact() {
    setText("Contact");
    setDisplay("none");
    changeClicker(true);
  }


  return (
    <section id = "testimonials">
      <h5 className='text-light'> My Recommendations </h5>
      <h2> Testimonials </h2>
      <div className='container testimonial-container'>
        <Swiper pagination ={{dynamicBullets: true,}} modules={[Pagination]} rewind = {true} className="mySwiper" >
        {recommendations.map(({image, title, rec, number, email, name}) => {
          return (
            <SwiperSlide key = {name}>
              <div className = 'testimonial-context' key = {name}>
                <div className = 'testimonial-image'>
                  <img src = {image} alt = {name}></img>
                </div>
                <div className = "contact-list">
                  <h4>{name}</h4>
                  <h5 className='text-light'>{title}</h5>
                  <div className = "btn-container" onClick = {clicker ? showContact : hideContact}>
                  <h6>{innerText}</h6>
                  <AiOutlineArrowRight className = "arrow" />
                  </div>
                  <div style={{'display' : display}}>
                    <h6>Phone Number: <span className='text-light'>{number}</span></h6>
                    <h6>Email: <span className='text-light'>{email}</span></h6>
                  </div>
                </div>
                <div className='recommendation-writing'>
                  <h5>{rec}</h5>
                </div>
              </div>
            </SwiperSlide>
        )})}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials