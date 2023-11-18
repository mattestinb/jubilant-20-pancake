import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import '../css/Projects.css';
import sassSVG from '../assets/svg/sassLogo.svg';
import postup from '../assets/postup.png';
import employeeTracker from '../assets/etracker.png';
import { faArrowLeft, faArrowRight, faCircle } from '@fortawesome/free-solid-svg-icons';



export default function Projects() {
  const [activeIndex, setCurrentIndex] = useState(0);
  const reactLogo = <FontAwesomeIcon icon={faReact} style={{color:'cyan'}}/>
  const htmlLogo = <FontAwesomeIcon icon={faHtml5}  style={{color:'orangered'}}/>
  const cssLogo = <FontAwesomeIcon icon={faCss3}  style={{color:'blue'}}/>
  const jsLogo = <FontAwesomeIcon icon={faJsSquare}  style={{color:'gold'}}/>  
  const netlifyLogo = <img src={netlifySVG} className='netlifyLogo' alt="Netlify Logo"/>;
  const viteLogo = <img src={viteSVG} className='viteLogo' alt="Vite Logo"/>;
  const sassLogo = <img src={sassSVG} className='sassLogo' alt='Sass Logo'/>;
  const nodeLogo = <FontAwesomeIcon icon={faNodeJs} style={{color:'green'}}/>

  function updateIndex(newIndex) {
    newIndex < 0
      ? newIndex = 0
      : newIndex >= projects.length 
      ? newIndex = projects.length - 1 
      : newIndex
    setCurrentIndex(newIndex);
  }

  const projects = [
    {
      name: "PostUp",
      techstack: (
        <>

          {jsLogo}
          {htmlLogo}
          {cssLogo}
          {nodeLogo}
        </>
      ),
      dependencies: (
        <>
          <p>MongoDB</p>
          <p>Express</p>
          <p>Node.js</p>
          <p>Heroku</p>
        </>
      ),
      description: (
        <>
          <p>
            In essence, PostUp positions itself as more than just a marketplace; it's a community-centric platform where individuals can confidently buy and sell a wide range of products, fostering a dynamic and secure online shopping environment.

            A key feature of PostUp is its focus on community and trust. It implements robust verification processes for both buyers and sellers to ensure safe and reliable transactions. The platform also includes a rating and review system, allowing users to provide feedback on their experiences, which helps to build a trustworthy community.

            Additionally, PostUp is designed to be mobile-friendly, ensuring a seamless experience whether on a desktop or a mobile device. The site also offers customer support and a comprehensive FAQ section to assist users with any queries or issues they might encounter.


          </p>
        </>
      ),
      demoUrl: "https://postup-69c44779947a.herokuapp.com",
      image: postup,
    },
    {
      name: "Employee Tracker",
      techstack: (
        <>
          {viteLogo}
          {reactLogo}
          {jsLogo}
        </>
      ),
      dependencies: (
        <>
          {netlifyLogo}
          <p>react-qr-code</p>
        </>
      ),
      description: (
        <>
          <p>

            The Employee Tracker app is a state-of-the-art tool designed to streamline workforce management and enhance employee engagement in any business setting. This app stands out for its comprehensive features that cater to both employers and employees, offering a well-rounded approach to managing work schedules, tracking performance, and facilitating communication.

            For employers, the Employee Tracker app provides a robust dashboard that displays real-time data on employee attendance, task progress, and performance metrics. This feature enables managers to make informed decisions and efficiently allocate resources. The app also includes advanced scheduling tools, allowing for the easy creation and modification of employee shifts, considering factors such as availability, workload, and skill set.

            In summary, the Employee Tracker app is an innovative solution that simplifies workforce management, enhances productivity, and supports a positive work environment. Its blend of practical functionality and ease of use makes it an essential tool for businesses looking to optimize their operations and foster employee satisfaction.

          </p>
        </>
      ),
      demoUrl: "https://github.com/mattestinb/jubilant-20-pancake/",
      image: employeeTracker,
      githubUrl: "https://mattestinb.github.io/jubilant-20-pancake/",
    },
  ];

  return (
    <div className="projectPostUpContainer" onTouchMove={updateIndex}>
      <div
        className="projectPostUp"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {projects.map((project, index) => {
          project.githubUrl = "https://github.com/mattestinb/jubilant-20-pancake";
          return (
            <section className="project" key={index}>
              <div className='projectImg'>
                <img src={project.image} />
              </div>
              <div className='projectInfo'>
                <h3>{project.name}</h3>
                <div className='projectStacks'>
                  {project.techstack}
                </div>
                <div className='projectDeps'>
                  {project.dependencies}
                </div>
                <div className='projectDesc'>
                  {project.description}
                </div>
                <a target='_blank' href={project.demoUrl}>Live Demo</a>
                <a target='_blank' href={project.githubUrl}>Github</a>
              </div>
            </section>
          );
        })}
      </div>

      <div className="wheel-btns">
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>{" "}
        </button>
        <div className="indicators">
          {projects.map((project, index) => {
            return (
              <button
                className="indicator-btns"
                onClick={() => {
                  updateIndex(index);
                }}>
                <span className={
                  `${index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                    }`
                  }>
                  <FontAwesomeIcon icon={faCircle} />
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="btn-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
}
