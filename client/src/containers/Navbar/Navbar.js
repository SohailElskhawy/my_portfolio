import {useState} from 'react'
import './Navbar.css'
import myLogo from '../../assets/so softwear development-02.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from "react-icons/io5";



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='app_navbar' id='home'>
      <div className="app_navbar_logo" onClick={()=>window.location.reload()}>
        <img src={myLogo} alt="SoCode" />
      </div>
      <div className="app_navbar_links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="app_navbar_smallscreen">
        <GiHamburgerMenu  
          color="#000" 
          fontSize={27} 
          onClick={() => setToggleMenu(true)}
          className='burger_menu'
        />
          <div className={`app_navbar_smallscreen_menu ${toggleMenu ? '' : 'close'}`}
              onAnimationEnd={(e) => {
                    if (e.animationName === 'menuClose') {
                        setToggleMenu(false);
                    }
                }}
            >
              <div className="app_navbar_smallscreen_menu_header">
                <img src={myLogo} alt="logo" />
                <IoClose 
                  fontSize={27} 
                  onClick={() => setToggleMenu(false)}
                  className='icon close_icon'
                />
              </div>
              <div className="app_navbar_smallscreen_menu_links">
              <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
              <a href="#skills" onClick={() => setToggleMenu(false)}>Skills</a>
              <a href="#projects" onClick={() => setToggleMenu(false)}>Projects</a>
              <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Navbar