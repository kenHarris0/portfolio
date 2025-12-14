import { useEffect, useRef,useState } from "react";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"; 
import { myProjects } from "./data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import githubicon from './assets/github-sign.png'
import linkedinicon from './assets/linkedin.png'
import mailicon from './assets/mail.png'
import ownershipicon from './assets/key.png'
import cleancodeicon from './assets/terminal.png'
import backedicon from './assets/backend-coding.png'
import apilogo from './assets/application.png'

import tailwindlogo from './assets/skillslogo/tailwind.png'
import nextjslogo from './assets/skillslogo/nextj.png'
import mongologo from './assets/skillslogo/mongo.png'
import expresslogo from './assets/skillslogo/download (1).png'
import nodelogo from './assets/skillslogo/nodejs.png'
import reactlogo from './assets/skillslogo/atom.png'
import jslogo from './assets/skillslogo/js.png'
import sqllogo from './assets/skillslogo/database.png'
import stripelogo from './assets/skillslogo/stripe.png'

import ollamalogo from './assets/image.png'
import postmanlogo from './assets/postman.png'
import cpplogo from './assets/cpp.png'
import dockerlogo from './assets/docker.png'
import Footer from "./Components/Footer";

export default function App() {
  

const words = ["FullStack Developer", "Backend Engineer", "MERN Developer"];

const [wordIndex, setWordIndex] = useState(0);
const [subIndex, setSubIndex] = useState(0);
const [deleting, setDeleting] = useState(false);

useEffect(() => {
  const currentWord = words[wordIndex];

  if (!deleting && subIndex === currentWord.length) {
    // Wait then start deleting
    setTimeout(() => setDeleting(true), 1000);
    return;
  }

  if (deleting && subIndex === 0) {
    setDeleting(false);
    setWordIndex((prev) => (prev + 1) % words.length); // next word
    return;
  }

  const timeout = setTimeout(() => {
    setSubIndex((prev) => prev + (deleting ? -1 : 1));
  }, deleting ? 50 : 100);

  return () => clearTimeout(timeout);
}, [subIndex, deleting, wordIndex]);




  const fogRef = useRef(null);

  useEffect(() => {
    let fogEffect;

    if (window.VANTA) {
      fogEffect = window.VANTA.FOG({
        el: fogRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: 0xffffff,
        midtoneColor: 0xfcfcfc,
        lowlightColor: 0xb7b1d9,
      });
    }

    return () => fogEffect && fogEffect.destroy();
  }, []);

  return (
    <div className="app-container " >

      {/* BACKGROUND */}
       <div ref={fogRef} className="vanta-bg"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Animated className="hero">
        <h3>Hello I'm</h3>
        <h1>Harish K</h1>
        <h2>
  I’m <span className="typed">{words[wordIndex].substring(0, subIndex)}</span>
</h2>

        <p>Full-Stack Developer building modern UIs and robust backend systems.
I create fast, functional,<br/> and visually appealing products focused on performance and great user experience.</p>
      
      <div className="btnss">
        <button onClick={()=>window.location.hash="#projects"}>My Works</button>
        <button onClick={()=>window.location.hash="#contact"}>Let's Connect</button>
      </div>
      

      <div className="iconss">
        <img src={linkedinicon} alt="" />
        <img src={githubicon} alt="" />
        <img src={mailicon} alt="" />
      </div>
      </Animated>






      {/* ABOUT SECTION */}
      <Animated className="about" id="about">
        <h1 className="fadeup">About Me</h1>
<div className="desc">


        <div className="leftdesc">
          <p>I’m a Full-Stack Developer with a strong focus on backend engineering.
I enjoy designing scalable APIs, structuring efficient databases, and building systems that are fast, secure, and reliable. At the same time, I care about delivering clean interfaces and smooth user experiences — balancing both functionality and design.</p>
<br/>
<p>I love writing maintainable code, working with modern frameworks, and taking ownership of projects from architecture to deployment. My goal is to build products that not only work well under the hood but also feel great to use.</p>
       <div className="logoo">
        <img src={linkedinicon} alt="" />
        <img src={githubicon} alt="" />
        <img src={mailicon} alt="" />

       </div>
        </div>

        <div className="rightdesc">
          {/*about cards*/}

          <Animated className="aboutcard">
            <img src={cleancodeicon} alt="" />
            <h1>Clean Code</h1>
            <p>I write readable, maintainable code following modern patterns</p>

          </Animated>

          <Animated className="aboutcard">
            <img src={ownershipicon} alt="" />
            <h1>End-to-End Ownership</h1>
            <p>From architecture to deployment, I take full responsibility for delivering stable, polished, and production-ready applications.</p>

          </Animated>

          <Animated className="aboutcard">
            <img src={apilogo} alt="" />
            <h1>API Architecture</h1>
            <p>I design and build efficient, scalable REST APIs with clear structure, strong error handling, and optimized performance for real-world usage.</p>

          </Animated>

          <Animated className="aboutcard">
            <img src={backedicon} alt="" />
            <h1>Backend Reliability</h1>
            <p>I focus on building secure, fault-tolerant backend systems with proper data flow, structured logic, and optimized database operations.</p>

          </Animated>



        </div>
        </div>



      </Animated>

      <section className="projects-section" id="projects">
  <h1 className="proj-title">My Projects</h1>

  <div className="timeline">

    {myProjects.map((project, index) => (
      <Animated 
        key={project.id} 
        className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
      >
        <div className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <ul>
            {project.details.map((d, i) => <li  key={i}> <span className="glow-dot"></span>{d}</li>)}
          </ul>
          <div className="stacks">
  {project.stack.map((tech, i) => (
    <p key={i}>{tech}</p>
  ))}
</div>
<div className="gtlink">
  <a href={project.github} target="_blank" rel="noopener noreferrer">
  <img src={githubicon} alt="Github" />
</a>


</div>

        </div>
      </Animated>
    ))}

  </div>
</section>

{/* Skills*/ }
<section id="skills" className="myskills">
  <h1>My Skills</h1>

  <div className="skills-grid">
    <div className="skill-card">
      <img src={reactlogo} alt="React" />
      <p>React</p>
    </div>

    <div className="skill-card">
      <img src={nextjslogo} alt="Next.js" />
      <p>Next.js</p>
    </div>

    <div className="skill-card">
      <img src={tailwindlogo} alt="Tailwind" />
      <p>Tailwind CSS</p>
    </div>

    <div className="skill-card">
      <img src={mongologo} alt="MongoDB" />
      <p>MongoDB</p>
    </div>

    <div className="skill-card">
      <img src={expresslogo} alt="Express" />
      <p>Express</p>
    </div>

    <div className="skill-card">
      <img src={jslogo} alt="JavaScript" />
      <p>JavaScript</p>
    </div>

    <div className="skill-card">
      <img src={sqllogo} alt="SQL" />
      <p>SQL</p>
    </div>

    <div className="skill-card">
      <img src={stripelogo} alt="Stripe" />
      <p>Stripe</p>
    </div>

    <div className="skill-card">
      <img src={nodelogo} alt="Node.js" />
      <p>Node.js</p>
    </div>

     <div className="skill-card">
      <img src={ollamalogo} alt="OLLAMA" />
      <p>Ollama</p>
    </div>

     <div className="skill-card">
      <img src={dockerlogo} alt="docker" />
      <p>Docker</p>
    </div>

     <div className="skill-card">
      <img src={cpplogo} alt="C++" />
      <p>C++</p>
    </div>

     <div className="skill-card">
      <img src={postmanlogo} alt="postman" />
      <p>Postman</p>
    </div>


  </div>
</section>
<section className="contact-section" id="contact">
  <h1>Contact Me</h1>

  <div className="contact-wrapper">

    {/* LEFT SIDE INFO */}
    <div className="contact-info">
      <h2>Let’s build something great!</h2>
      <p>Feel free to reach out for collaborations, project discussions, or opportunities.</p>

      <div className="info-item">
        <img src={mailicon} alt="" />
        <span>harishapvs123@gmail.com</span>
      </div>

      <div className="info-item">
        <img src={linkedinicon} alt="" />
        <span>linkedin.com/in/harishk</span>
      </div>

      <div className="info-item">
        <img src={githubicon} alt="" />
        <span>github.com/Kenharris0</span>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
     <input type="hidden" name="access_key" value="55f7a9ac-0cfa-457e-b8f9-3bbba76179e0"></input>
     <input type="hidden"
         name="redirect"
         value="https://kenHarris0.github.io/portfolio/" />
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea placeholder="Message..." name="message" required></textarea>
      
      <button type="submit">Send Message</button>
    </form>

  </div>
</section>

<Footer/>

      </div>
    );
  }

const useIntersectionAPI = (ref, rootMargin = "0px") => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isVisible;   // 🟢 IMPORTANT
};


  function Animated({ children, className }) {
  const ref = useRef(null);
  const visible = useIntersectionAPI(ref, "-150px");

  return (
    <section ref={ref} className={`${className} ${visible ? "show" : ""}`}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        return React.cloneElement(child, {
          className: `${child.props.className || ""} ${visible ? "show" : ""}`
        });
      })}
    </section>
  );
}