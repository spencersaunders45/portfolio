import React from 'react';

import './Skills.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import BackgroundImg from '../../images/portfolio_background.png';

export default () => {
  return(
    <div style={{ backgroundImage: `url(${BackgroundImg})` }} id="Container" className="container-fluid pb-5">
      <div className="row mb-5">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div id="SecondaryContainer" className="container-fluid d-flex flex-column align-items-center text-light">
        <div className="row justify-content-center">
          <div className="col-7 TextBackground mb-5">
            <h1 className="pt-1 text-danger">Skills</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto TextBackground">
              <div className="row text-start justify-content-center">
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto mb-3">
                      <ul>
                        <li><h5>Python</h5></li>
                        <li><h5>C++</h5></li>
                        <li><h5>JavaScript</h5></li>
                        <li><h5>Java</h5></li>
                        <li><h5>HTML</h5></li>
                        <li><h5>CSS</h5></li>
                      </ul>
                    </div>
                    <div className="col-auto mb-3">
                      <ul>
                        <li><h5>MySQL</h5></li>
                        <li><h5>SQLite</h5></li>
                        <li><h5>NoSQL</h5></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto mb-3">
                      <ul>
                        <li><h5>Django</h5></li>
                        <li><h5>Express.js</h5></li>
                        <li><h5>Node.js</h5></li>
                        <li><h5>Mongoose</h5></li>
                        <li><h5>Spring</h5></li>
                      </ul>
                    </div>
                    <div className="col-auto mb-3">
                      <ul>
                        <li><h5>React</h5></li>
                        <li><h5>Bootstrap</h5></li>
                        <li><h5>API's</h5></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-5">
                <div className="col">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}