import './Home.css'
import profilePic from '../../assets/profile_pic.jpg'
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import binaryVid from '../../assets/vecteezy_binary-code-with-numbers-moving-downward-on-screen_2015336.webm'



function Home() {
  return (
    <div className="app_home">
      <div className="app_home_bg-video_cont">
        <video src={binaryVid} className='app_home_background-video' autoPlay loop muted></video>
      </div>
      <div className="app_home_profile">
        <img src={profilePic} alt="profile-picture" />
      </div>
      <div className="app_home_content">
        <div className="app_home_content_bio">
        <div className="app_home_name_typewriter">
          <h1>
            Sohail Elskhawy
          </h1>
        </div>
        <h2>
        Software Engineer
        </h2>
        </div>
        <div className="app_home_content_contact">
          <div className="app_home_social">
            <a href="https://github.com/SohailElskhawy">
              <FaGithub   className='icon'/>
            </a>
            <a href="https://twitter.com/sohail_elskhawy">
              <FaXTwitter  className='icon'/>
            </a>
          </div>
          <div className="app_home_hire-me">
            <a href="mailto:sohailelskhawy@gmail.com" className='app_home_hire-me_button'>Hire Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home