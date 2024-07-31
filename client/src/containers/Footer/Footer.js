import React from 'react'
import './Footer.css'
import logo from '../../assets/so softwear development-02.png'
import { GiPhone } from 'react-icons/gi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='app_footer' id='contact'>
        <div className="app_footer_logo_container">
          <div className="logo_cont">
            <img src={logo} alt="SoCode" />
          </div>
          <div className="app_footer_links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <p>
          Developed by SoCode
        </p>
        </div>
        <div className="app_footer_contact_container">
          <a className="contact" href="https://wa.me/905528509969">
            <GiPhone fontSize={25} className='contact_icon'/>
            <p>+90 552 850 9969</p>
          </a>
          <a className="contact" href="mailto:sohailelskhawy@gmail.com">
            <AiOutlineMail  fontSize={25} className='contact_icon'/>
            <p>
              sohailelskhawy@gmail.com
            </p>
            </a>
        </div>
        <div className="app_footer_social_container">
          <div className="about-me_container">
            <h2>About Me</h2>
            <p>
              I am a software engineer who is passionate about creating software that is both functional and elegant. 
              I am always looking for new challenges and opportunities to grow as a developer.
              lets work together and create something amazing.
            </p>
          </div>
          <div className="socail_cont">
          <a href="https://github.com/SohailElskhawy">
              <FaGithub  fontSize={21} className='icon'/>
            </a>
            <a href="https://twitter.com/sohail_elskhawy">
              <FaXTwitter fontSize={21} className='icon'/>
            </a>
            <a href="mailto:sohailelskhawy@gmail.com" className='app_home_hire-me_button'>Hire Me</a>
          </div>
        </div>
      </div>
  )
}

export default Footer