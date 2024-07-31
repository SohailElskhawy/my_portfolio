import React from 'react'
import './Projects.css'
import { useState } from 'react'
import { dunyaAmbalajScreens } from '../../assets'
import { borcumNeScreens } from '../../assets'
import { flyToSchoolScreens } from '../../assets'
import { htmlCssJsProjects } from '../../assets'
import { pythonProjects } from '../../assets'
import { reactProjects } from '../../assets'
import { motion} from 'framer-motion'

function Projects() {

  const [dAcurrentImage, dAsetCurrentImage] = useState(0);
  const [bNcurrentImage, bNsetCurrentImage] = useState(0);
  const [fTScurrentImage, fTSsetCurrentImage] = useState(0);


  return (
    <div className='app_projects' id='projects'>
      <motion.h1 className='app_projects_title'
      initial={{opacity: 0, y: -10}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 1}}
      >Here are some of the projects I have worked on:</motion.h1>
      <div className="app_projects_project">
        <motion.div className="app_projects_project_images"
        initial={{opacity: 0, x: -25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        
        >
          <div className="project_img_cont">
            {
              dunyaAmbalajScreens.map((image, index) => {
                return (
                  <img key={index} src={image} className={index === dAcurrentImage ? 'project_img active' : 'project_img'} alt='project_img' />
                )
              }
              )
            }
          </div>
          <div className="images_change_bar">
            {
              dunyaAmbalajScreens.map((image, index) => {
                return (
                  <div key={index} className={index === dAcurrentImage ? 'image_change_dot active' : 'image_change_dot'} onClick={() => dAsetCurrentImage(index)}></div>
                )
              }
              )
            }
          </div>
        </motion.div>
        <motion.div className="app_projects_project_info"
        initial={{opacity: 0, x: 25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        
        >
          <h2>
            Dunya Ambalaj Paper Storage System
          </h2>
          <ol type='1'>
            <li>Write, Print, Update, Save To Database Orders.</li>
            <li>Edit Mode to update orders.</li>
            <li>Color Picker, Add Note, Add Image To The Order.</li>
            <li>Save Orders Pdf files To Cloud Storage.</li>
            <li>Paper Storage.</li>
            <li>Track User Movement In App.</li>
            <li>Job Order.</li>
            <li>Chat Page and Notification Page for employees</li>
          </ol>
          <p>Skills:
            HTML, CSS, JS, Electron, Firebase, Node.js,
          </p>
        </motion.div>
      </div>
      <div className="app_projects_project">
        <motion.div className="app_projects_project_images"
        initial={{opacity: 0, x: -25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
          <div className="project_img_cont">
            {
              borcumNeScreens.map((image, index) => {
                return (
                  <img key={index} src={image} className={index === bNcurrentImage ? 'project_img active' : 'project_img'} alt='project_img' />
                )
              }
              )
            }
          </div>
          <div className="images_change_bar">
            {
              borcumNeScreens.map((image, index) => {
                return (
                  <div key={index} className={index === bNcurrentImage ? 'image_change_dot active' : 'image_change_dot'} onClick={() => bNsetCurrentImage(index)}></div>
                )
              }
              )
            }
          </div>


        </motion.div>
        <motion.div className="app_projects_project_info"
        initial={{opacity: 0, x: 25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
          <h2>Borcum Ne ?</h2>
          <ol type='1'>
            <li>
              Add Customers Depts To The System And Manage Them
            </li>
            <li>
              Real Time Drugs Data From Our API
            </li>
            <li>
              You Can Add Your Own Data
            </li>
            <li>
              You Can Pay Your Depts Fully Or Partially
            </li>
            <li>
              Track The Movement of The Customer's Dept
            </li>
            <li>Add, Edit, Delete And Alot Of Functions Can Be Done</li>
            <li>
              For This We Provide Special Functions To Make The User Experience Better
            </li>
            <li>
              Full Customer Support
            </li>
          </ol>
          <p>Skills:
            React, Express, Node.js, Firebase
          </p>
        </motion.div>
      </div>
      <div className="app_projects_project">
        <motion.div className="app_projects_project_images flytoschool"
        initial={{opacity: 0, x: -25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
          <div className="project_img_cont">
            {
              flyToSchoolScreens.map((image, index) => {
                return (
                  <img key={index} src={image} className={index === fTScurrentImage ? 'project_img active' : 'project_img'} alt='project_img' />
                )
              }
              )
            }
          </div>
          <div className="images_change_bar">
            {
              flyToSchoolScreens.map((image, index) => {
                return (
                  <div key={index} className={index === fTScurrentImage ? 'image_change_dot active' : 'image_change_dot'} onClick={() => fTSsetCurrentImage(index)}></div>
                )
              }
              )
            }
          </div>
        </motion.div>
        <motion.div className="app_projects_project_info"
        initial={{opacity: 0, x: 25}}
        whileInView={{opacity: 1, x: 0}}
        transition={{duration: 1}}
        >
          <h2>Fly To School</h2>
          <h3>
            My First Game And Project.
          </h3>
          <ol type='1'>
            <li>An Endless Runner Game.</li>
            <li>You Collect Coins And Avoid The Obstacles.</li>
            <li>
              And Try To Get The Highest Score.
            </li>
            <li>
              You Can Buy New Rockets To Fly With The Coins You Collect.
            </li>
          </ol>
          <p>Skills:
            C#, Unity
          </p>
        </motion.div>
      </div>
      <div className="app_projects_project collection">
        <motion.h1 
        initial={{opacity: 0, y: -25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.5}}
        >HTML CSS JS Projects</motion.h1>
        <div className="projects_container">
          {
            htmlCssJsProjects.map((project, index) => {
              return (
                <motion.div key={index} className='project' 
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                >
                  <img src={project.img} alt='project_img' />
                  <h3>{project.name}</h3>
                </motion.div>
              )

            })
          }
        </div>
      </div>
      <div className="app_projects_project collection">
        <motion.h1
        initial={{opacity: 0, y: -25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.5}}
        >Python Projects</motion.h1>
        <div className="projects_container">
          {
            pythonProjects.map((project, index) => {
              return (
                <motion.div key={index} className='project'
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                >
                  <img src={project.img} alt='project_img' />
                  <h3>{project.name}</h3>
                </motion.div>
              )

            })
          }
        </div>
      </div>
      <div className="app_projects_project collection">
        <motion.h1
        initial={{opacity: 0, y: -25}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 1.5}}
        >React Projects</motion.h1>
        <div className="projects_container">
          {
            reactProjects.map((project, index) => {
              return (
                <motion.div key={index} className='project' 
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                >
                  <img src={project.img} alt='project_img' />
                  <h3>{project.name}</h3>
                </motion.div>
              )

            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects