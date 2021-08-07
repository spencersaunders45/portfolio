import React from 'react';

import './About.css';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';
import BackgroundImg from '../../images/portfolio_background.png';

export default () => {
  return(
    <div style={{ backgroundImage: `url(${BackgroundImg})` }} id="Container" className="container-fluid">
      <div className="row mb-5">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div id="SecondaryContainer" className="container-fluid d-flex flex-column align-items-center text-light">
        <div className="row justify-content-center">
          <div className="col-7 TextBackground mb-5">
            <h1 className="pt-1">Hello, I'm Spencer.</h1>
            <p className="pt-5">I am a full stack developer doing everything from UI/UX design to database development. I have experience creating websites for small buinesses and am driven to provide the best product as possible. I am a strraight forward highly self motivated person who likes to get the job done right the first time. I write clean code <a className="text-danger" href="https://github.com/spencersaunders45/student_tracker/tree/main/src">(seen here)</a> and am constantly seeking to improve my skills. If you would like to work with me then contact me <a className="text-danger" href="mailto: spencer.saunders45@gmail.com">here</a>.</p>
            <p className="py-2 ">You can also view my projects <a className="text-danger" href="/projects">here</a> and my resume <a className="text-danger" href="/resume">here</a>.</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto TextBackground">
              <h3 className="mb-5">Skills</h3>
              <div className="row text-start justify-content-center">
                <div className="col-auto">
                  <div className="row">
                    <div className="col-auto mb-3">
                      <ul>
                        <li><h5>Python</h5></li>
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
              <div className="row">
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