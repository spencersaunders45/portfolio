import React from 'react';

import './Projects.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import BackgroundImg from '../../images/portfolio_background.png';
import SCHBanner from '../../images/Saunders_Custom_Homes.jpg';
import CyberSafe from '../../images/CyberSafe.png';
import StudentTracker from '../../images/student_tracker.png';
import Hangman from '../../images/hangman-cpp.png';

export default () => {
  return(
    <div id="Container" style={{ backgroundImage: `url(${BackgroundImg})` }} className="container-fluid text-light">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
          <h1 className="text-danger">Hello World</h1>
        </div>
      </div>
      {/* Card Start */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 px-5 text-start TextBackground">
          <h5 className="mb-3"><a className="text-danger" href="https://www.saunderscustomhomes.com/">Saunders Custom Homes (WebFlow Version)</a></h5>
          <p className="fw-bold">Built for Residental homes builders in Granbury Texas. This Site allows the owners to display thier current projects, prebuilt floorplans, and contact the owners through forms.</p>
          <h6>Tech:</h6>
          <ul>
            <li>WebFlow</li>
          </ul>
        </div>
        <div className="col-lg-3 d-flex flex-column">
          <img className="rounded ProjectImg" src={ SCHBanner } alt="Saunders Custom Homes Banner" />
        </div>
      </div>
      {/* Card End */}
      {/* Card Start */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 px-5 text-start TextBackground">
          <h5 className="mb-3"><a className="text-danger" href="https://github.com/spencersaunders45/CyberSafe/tree/main/CyberSafe">CyberSafe</a></h5>
          <p className="fw-bold">Password manager built with custom encryption. Allows users to encrypt and decrypt passwords with a master password, and also includes a password generator.</p>
          <h6>Tech:</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>Python</li>
            <li>Django</li>
            <li>SQLite</li>
            <li>Bcrypt</li>
          </ul>
        </div>
        <div className="col-lg-3 d-flex flex-column">
          <img className="rounded ProjectImg" src={ CyberSafe } alt="Screen shot of CyberSafe home page" />
        </div>
      </div>
      {/* Card End */}
      {/* Card Start */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 px-5 text-start TextBackground">
          <h5 className="mb-3"><a className="text-danger" href="https://student-tracker.pages.dev/">Student Tracker</a></h5>
          <p className="fw-bold">View, filter, and add tags to your students.</p>
          <h6>Tech:</h6>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>API</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className="col-lg-3 d-flex flex-column">
          <img className="rounded ProjectImg" src={ StudentTracker } alt="Screen shot of studnet info" />
        </div>
      </div>
      {/* Card End */}
      {/* Card Start */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-4 px-5 text-start TextBackground">
          <h5 className="mb-3"><a className="text-danger" href="https://github.com/spencersaunders45/Hangman-CPP">Hangman (C++)</a></h5>
          <p className="fw-bold">Play hangman in your powershell.</p>
          <h6>Tech:</h6>
          <ul>
            <li>C++</li>
          </ul>
        </div>
        <div className="col-lg-3 d-flex flex-column">
          <img className="rounded ProjectImg" src={ Hangman } alt="Screen shot of studnet info" />
        </div>
      </div>
      {/* Card End */}
      <div className="row pb-5">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  )
}