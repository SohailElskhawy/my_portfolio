import React from 'react'
import './Skills.css'
import { IoLogoPython } from "react-icons/io5";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiFlask, SiPostgresql, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiCplusplus, SiCsharp, SiC, SiExpress, SiElectron } from "react-icons/si";

function Skills() {
  return (
    <div className='app_skills' id='skills'>
      <h1 className='app_skills_title'>My Skills</h1>
      <div className='app_skills_container'>
        <div className="app_skills_languages_cont">
          <h2>Languages</h2>
          <ul className='app_skills_ul'>
            <li><SiJavascript className='li_icon'
              color='#f0db4f'
            />
              <p>
                JavaScript
              </p>
            </li>
            <li><IoLogoPython className='li_icon'
              color='#3776AB'
            />
              <p>
                Python
              </p>
            </li>
            <li><SiHtml5 className='li_icon'
              color='#E34F26'
            />
              <p>
                HTML
              </p>
            </li>
            <li><SiCss3 className='li_icon'
              color='#1572B6'
            />
              <p>
                CSS
              </p>
            </li>
            <li><SiCplusplus className='li_icon'
              color='#00599C'
            />
              <p>
                C++
              </p>
            </li>
            <li><SiCsharp className='li_icon'
              color='#239120'
            />
              <p>
                C#
              </p>
            </li>
            <li><SiC className='li_icon'
              color='#A8B9CC'
            />
              <p>
                C
              </p>
            </li>
          </ul>
        </div>
        <div className="app_skills_frameworks_cont">
          <h2>Frameworks</h2>
          <ul className='app_skills_ul'>
            <li><FaReact className='li_icon'
              color='#61DAFB'
            />
              <p>
                React
              </p>
            </li>
            <li><SiElectron className='li_icon'
              color='#47848F'
            />
              <p>
                Electron
              </p>
            </li>
            <li><SiFlask className='li_icon'
              color='#000000'
            />
              <p>
                Flask
              </p>
            </li>
            <li><FaNodeJs className='li_icon'
              color='#68A063'
            />
              <p>
                Node.js
              </p>
            </li>
            <li><SiExpress className='li_icon'
              color='#000000'
            />
              <p>
                Express
              </p>
            </li>
          </ul>
        </div>
        <div className="app_skills_databases_cont">
          <h2>Databases</h2>
          <ul className='app_skills_ul'>
            <li><SiPostgresql className='li_icon'
              color='#336791'
            />
              <p>
                PostgreSQL
              </p>
            </li>
            <li><SiFirebase className='li_icon'
              color='#FFCA28'
            />
              <p>
                Firebase
              </p>
            </li>
            <li><FaDatabase className='li_icon'
              color='#00758F'
            />
              <p>
                SQLite
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills