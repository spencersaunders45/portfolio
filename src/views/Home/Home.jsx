import React from 'react';

import './Home.css';
import Me from '../../images/profile-pic.jpg';
import Twitter from '../../images/twitter.png';
import LinkedIn from '../../images/linkedin.png';
import GitHub from '../../images/GitHub.png';

export default () => {
  return(
    <div className='container-fluid d-flex align-items-center justify-content-center'>
      <div className='row d-flex jstify-content-center' id="main">
        <div className='col-1 link-side d-flex flex-column align-items-center justify-content-center'>
          <img id='profile-pic' src={Me} alt="White male with beard in blue suite with red floaral tie and glasses" />
          <h2>Spencer Saunders</h2>
          <div id='social-links'>
            <a href="https://twitter.com/SpencerS45"><img className='social-img' src={Twitter} alt="Twitter Logo" /></a>
            <a href="https://github.com/spencersaunders45"><img className='social-img' src={GitHub} alt="GitHub Logo" /></a>
            <a href="https://www.linkedin.com/in/spencer-saunders-developer/"><img className='social-img' src={LinkedIn} alt="LinkedIn Logo" /></a>
          </div>
        </div>
        <div className='col info-side py-5'>
          <img id='pixel-dude' src="https://media.giphy.com/media/5eLDrEaRGHegx2FeF2/giphy.gif" alt="pixel dude typing" />
          <h3 className='border-bottom border-white p-3 mb-3'>Software Developer</h3>
          <div>
            <h6>Computer Science | BYU - Idaho (2025)</h6>
            <h6>Coding Dojo | Full Stack Developer Certificate (2021)</h6>
            <br />
            <h6>C++, Java, Python, JavaScript, HTML, CSS, React, Bootstrap, Node.js, Django, Spring Boot, SQLite, MySQL</h6>
          </div>
        </div>
      </div>
      <footer>
        <a id='freepik' className='fixed-bottom d-flex justify-content-start' href='https://www.freepik.com/vectors/background'>Background vector created by freepik - www.freepik.com</a>
      </footer>
    </div>
  )
}