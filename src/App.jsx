import React from 'react';

// Import images
import profileImage from './assets/images/profile.jpg';
import projectImage1 from './assets/images/p1.jpg';
import projectImage2 from './assets/images/p2.jpg';
import projectImage3 from './assets/images/p3.jpg';
import githubIcon from './assets/images/github.jpg'; // Replace with your actual path
import igIcon from './assets/images/ig.jpg'; // Replace with your actual path
import fbIcon from './assets/images/fb.jpg'; // Replace with your actual path
import phoneIcon from './assets/images/phone.jpg'; // Replace with your actual path


const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">Shaira <span>Opisina</span></a>
        
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
      
      {/* Home Section */}
      <section id="home" className="home">
        <div className="home-content">
          <h1>Hello, It's Me <span>Shaira</span></h1>
          <h3 className="text-animation">I'm a <span></span></h3>
          <p>I’m a passionate web developer with expertise in creating dynamic and responsive websites. 
  I love building clean, efficient, and scalable solutions using modern technologies like React, CSS, and more. 
  Let’s collaborate to bring your ideas to life!</p>
          <div className="btn-group">
          <a href="#projects" className="btn">Projects</a>
            <a href="#contact" className="btn">Contact</a>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="about">
        <div className="aboutme">
          <div className="aboutme-description">
          <h2>About <span>Me</span></h2>
            <p>Hi! I’m Shaira, a 20-year-old Information Technology student at the Western Institute of Technology. I’m passionate about technology, coding, and problem-solving. Currently, I’m developing my skills in web development, with a focus on creating responsive, user-friendly applications. 
            I love exploring new technologies and am always eager to learn and improve. In my free time, I enjoy working on personal projects, expanding my knowledge in various programming languages, and collaborating with others to bring innovative ideas to life.
            </p>
          </div>
          <div className="aboutme-img">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
        {/* Skills Section */}
        <div className="skills">
          <div className="skill-left">
            <h3>My Skills</h3>
            <div className="skill-bar">
              <div className="info">
                <p>React</p>
                <span className="percentage">50%</span>
              </div>
              <div className="bar">
                <span className="react"></span> {/* Add specific class here */}
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>Figma</p>
                <span className="percentage">60%</span>
              </div>
              <div className="bar">
                <span className="figma"></span> {/* Add specific class here */}
              </div>
            </div>
            <div className="skill-bar">
              <div className="info">
                <p>CSS</p>
                <span className="percentage">45%</span>
              </div>
              <div className="bar">
                <span className="css"></span> {/* Add specific class here */}
              </div>
            </div>
          </div>
        </div>
                   
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="projects-grid">
          <h2>My <span>Projects</span></h2>
          <div className="wrapper">
          <a href="https://www.figma.com/design/IdkNJiTDnyarNvCpRAr5Lo/ITPC-3?m=auto&t=7coYlWiBrbYGqkCZ-6" target="_blank" rel="noopener noreferrer">
          <img src={projectImage1} alt="Project 1" />
      </a>
      <a href="https://www.figma.com/design/DjNgwbUVGS89s4HcR3zGz7/ITPC-3---Automated-Visitor-Log-System?node-id=100-450&t=DRIHTuvm6JnnLLWg-1" target="_blank" rel="noopener noreferrer">
        <img src={projectImage2} alt="Project 2" />
      </a>
      <a href="https://www.figma.com/design/8emmTvykmwlgTNLGoTLXas/Untitled?node-id=0-1&t=1aneBRPCdRKrxZcN-1" target="_blank" rel="noopener noreferrer">
        <img src={projectImage3} alt="Project 3" />
      </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
  <h2>Contact <span>Me</span></h2>
  <p>If you have any questions or just want to get in touch, feel free to reach out!</p>

    <div className="contact-icons">
      <a href="https://www.facebook.com/shairadenne.opisina?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
      <img src={fbIcon} alt="Facebook" />
        Shaira Opisina
      </a>

      <a href="tel:yourphonenumber">
      <img src={phoneIcon} alt="Phone" />
        +639566396122
      </a>

      <a href="https://www.instagram.com/qttt_ira?igsh=em5xM2Jmbmd4Ymo0" target="_blank" rel="noopener noreferrer">
      <img src={igIcon} alt="Instagram" />
        qtt_ira
      </a>
      <a href="https://github.com/Shyra05/shai.git" target="_blank" rel="noopener noreferrer">
      <img src={githubIcon} alt="GitHub" />
        Shyra05
      </a>
    </div>
  </section>
    </div>
  );
};

export default App;
