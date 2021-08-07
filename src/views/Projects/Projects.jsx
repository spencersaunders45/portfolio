import React from 'react';

import './Projects.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import BackgroundImg from '../../images/portfolio_background.png';
import SCHBanner from '../../images/Saunders_Custom_Homes.jpg';
import CyberSafe from '../../images/CyberSafe.png';

export default () => {
  return(
    <div id="ContainerBody" style={{ backgroundImage: `url(${BackgroundImg})` }} className="container-fluid text-light">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      
      <div className="row my-5">
        <div className="col">
          <h1>Hello World</h1>
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
            <li>Python</li>
            <li>Django</li>
            <li>SQLite</li>
            <li>Bcrypt</li>
          </ul>
        </div>
        <div className="col-lg-3 d-flex flex-column">
          <img className="rounded ProjectImg" src={ CyberSafe } alt="Saunders Custom Homes Banner" />
        </div>
      </div>
      {/* Card End */}
      <div className="row">
        <div className="col">
          <Footer />
        </div>
      </div>
    </div>
  )
}