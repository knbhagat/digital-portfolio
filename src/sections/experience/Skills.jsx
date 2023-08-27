import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import {EffectFlip, Navigation} from "swiper/modules"
import Circle from './Circle';

const Skills = () => {
  return (
    <>
        <Swiper
        effect={'flip'}
        grabCursor={true}
        navigation={true}
        rewind = {true}
        modules={[EffectFlip, Navigation]}
        className="mySwiper"
        >
            <SwiperSlide>
                <div className = "frontend-experience language-container">
                <h3> Frontend Development </h3>
                <div className= 'experience-content'>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                            <div className = "inner">
                            <div className = "percent-num">
                                90%
                            </div>
                            </div>
                        </div>
                        <Circle percentage = "ninety-percent"/>
                    </div>
                    <h4 className='text-light'> HTML </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            90%
                            </div>
                        </div>
                        </div>
                        <Circle />
                    </div>
                    <h4 className='text-light'> CSS </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            75%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'seventyFive-percent'/>
                    </div>
                    <h4 className='text-light'> JavaScript </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            60%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'sixty-percent'/>
                    </div>
                    <h4 className='text-light'> BootStrap </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            75%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'seventyFive-percent'/>
                    </div>
                    <h4 className='text-light'> React </h4>
                    </div>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className = "backend-experience language-container">
                <h3> Backend Development </h3>
                <div className= 'experience-content'>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                            <div className = "inner">
                            <div className = "percent-num">
                                90%
                            </div>
                            </div>
                        </div>
                        <Circle percentage = 'ninety-percent'/>
                    </div>
                    <h4 className='text-light'> Java </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                                75%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = "seventyFive-percent" />
                    </div>
                    <h4 className='text-light'> Python </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            60%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'sixty-percent'/>
                    </div>
                    <h4 className='text-light'> C# </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            75%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'seventyFive-percent'/>
                    </div>
                    <h4 className='text-light'> MySQL </h4>
                    </div>
                    <div className = 'experience-specific'>
                    <div className = "percentage-bar">
                        <div className = "outer">
                        <div className = "inner">
                            <div className = "percent-num">
                            60%
                            </div>
                        </div>
                        </div>
                        <Circle percentage = 'sixty-percent'/>
                    </div>
                    <h4 className='text-light'> MongoDB </h4>
                    </div>
                </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default Skills