import React, { useRef } from 'react';
import '../css/HomePage.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Lottie from 'lottie-react';
import devSVG from '../assets/svg/dev1700268995588.json';
import emailSVG from '../assets/svg/95247-email.json';
import viteSVG from '../assets/svg/viteLogo.svg';
import netlifySVG from '../assets/svg/netlifyLogo.svg';
import sassSVG from '../assets/svg/sassLogo.svg';
import myResume from '../assets/pdf/2021Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Projects from './Projects';

export default function HomePage() {
  const ref = useRef();

  return (
    <div className="homePage">
      <Parallax pages={4} ref={ref}>
{/* Navigation Section */}
        <ParallaxLayer
          sticky={{ start: 0, end: 1.5 }}
          style={{ height: "fit-content" }}
        >
          <nav>
            <h1
              className="logo"
              ref={ref}
              onClick={() => ref.current.scrollTo(0)}
            >
              MattEstin
              <span
                style={{
                  color: "lime",
                  fontFamily: "Helvetica",
                  fontSize: "75px",
                  margin: "0",
                }}
              >
                .
              </span>
            </h1>
            <ul className="navOptions">
              <li
                ref={ref}
                onClick={() =>
                  window.innerWidth < 768
                    ? ref.current.scrollTo(2.5)
                    : ref.current.scrollTo(2.25)
                }
              >
                PROJECTS
              </li>
              <li ref={ref} onClick={() => ref.current.scrollTo(1)}>
                RESUME
              </li>
              <li
                style={{ fontWeight: "200" }}
                ref={ref}
                onClick={() => ref.current.scrollTo(3)}
              >
                CONTACT
              </li>
            </ul>
          </nav>
        </ParallaxLayer>
{/* Introduction Section */}
        <ParallaxLayer>
          <section className="introSection">
            <div style={{ display: "flex" }}>
              <div className="introText">
                <h1>MATT ESTIN</h1>
                <p>SOFTWARE DEVELOPER</p>
                <p>
                  SOUTHERN-BASED{" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "red" }}
                  />
                </p>
                <div className="contactBtns">
                  <a
                    target="#"
                    href="https://www.linkedin.com/in/mattestin"
                  >
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                  </a>
                  <a target="#" href="https://github.com/mattestinb">
                    <FontAwesomeIcon className="github" icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="profileImg"></div>
            </div>
          </section>
        </ParallaxLayer>

{/* SVG Transition Section */}
        <ParallaxLayer offset={0.75} speed={1}>
          <Lottie className="lottieWave" animationData={devSVG} />
        </ParallaxLayer>

{/* About Me Section */}
        <ParallaxLayer offset={1}>
          <section className="aboutMe">
            <div className="aboutIntro">
              <h2>ABOUT ME</h2>
              <p>

                I'm on an exciting journey of mastering the digital development realm! My toolbox is brimming with shiny skills in HTML5, CSS3/SCSS, and a sprinkle of JavaScript magic.
                I'm weaving wonders with frameworks like React, even stretching my creativity to React Native realms. My code is a harmonious blend of logic, accessibility,
                and responsiveness, tailored with a designer's eye.

                But wait, there's more! With Jest in my arsenal, I'm tackling Test-Driven Development like a pro. I'm a lifelong learner, always hungry for the latest trends
                and coding practices. This keeps me sharp, ready to be a star player in any web development team. Let's chat and explore how my tech wizardry can add sparkle
                to your projects! 🌟💻🚀
              </p>
            </div>
            <div className="aboutResume">
              <object
                data={myResume}
                width="100%"
                height="100%"
                type="application/pdf"
              />
              {/*<a href={myResume}>Download</a>*/}
            </div>
          </section>
          <section className="techStack">
            <h2>MY TECHSTACK</h2>
            <div className="scrollStack">
              <div className="stackLogos">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={netlifySVG} />
              </div>
              <div className="stackLogos" aria-hidden="true">
                <FontAwesomeIcon
                  className="htmlLogo"
                  icon={faHtml5}
                  style={{ color: "orangered" }}
                />
                <FontAwesomeIcon
                  className="cssLogo"
                  icon={faCss3}
                  style={{ color: "blue" }}
                />
                <FontAwesomeIcon
                  className="jsLogo"
                  icon={faJsSquare}
                  style={{ color: "gold" }}
                />
                <img src={sassSVG} />
                <FontAwesomeIcon
                  className="reactLogo"
                  icon={faReact}
                  style={{ color: "cyan" }}
                />
                <img src={viteSVG} />
                <img src={netlifySVG} /> 
              </div>
            </div>
          </section>
        </ParallaxLayer>
{/* Projects Section */}
        <ParallaxLayer offset={window.innerWidth < 768 ? 2.5 : 2.25}>
          <section className="projectSection">
            <h2>PROJECTS</h2>
            <Projects />
          </section>
        </ParallaxLayer>
{/* Contact Section */}
        <ParallaxLayer
          offset={3}
          speed={window.innerWidth < 768 ? 2 : 1}
          style={{ backgroundColor: "var(--body_background)" }}
        >
          <Lottie className="lottieEmail" animationData={emailSVG} />
          <section className="contactSection">
            <h2>LETS TALK</h2>
            <div className="formContainer">
              <form
                netlify
                name="contact"
                method="POST"
                onSubmit="submit"
                action=""
                className="contactForm"
              >
                <input type="hidden" name="form-name" value="contact" />

                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    aria-required="true"
                  />
                </label>

                <label htmlFor="email">
                  Email
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    aria-required="true"
                  />
                </label>

                <label>
                  Message
                  <textarea
                    name="message"
                    rows="4"
                    required
                    aria-required="true"
                  ></textarea>
                </label>

                <button type="submit">Send</button>
              </form>
            </div>
          </section>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}