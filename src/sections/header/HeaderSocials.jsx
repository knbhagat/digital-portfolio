import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <> 
        <div className='header-socials'>
            <a href ='www.linkedin.com/in/krishaan-bhagat' target = "_blank"> <BsLinkedin /> </a>
            <a href ='https://github.com/knbhagat' target = "_blank"> <BsGithub /> </a>
        </div>
    </>
  )
}

export default HeaderSocials