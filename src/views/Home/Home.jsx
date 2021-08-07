import React from 'react';

import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Home.css';
import BackgroundImg from '../../images/portfolio_background.png';

export default () => {
  return(
    <div>
      <div style={{ backgroundImage: `url(${BackgroundImg})` }} className="container-fluid Container">
        <div className="row StopOverflow">
          <div className="col">
            <NavBar />
          </div>
        </div>
        <div>
          <div className="row justify-content-center StopOverflow">
            <div className="col-auto pt-5 ColBackground">
              <Banner />
            </div>
          </div>
          <div className="row justify-content-center StopOverflow">
            <div className="col-6 pt-5 ColBackground">
              <p className="text-light">I am a full stack developer currently living in Texas. I design and build websites for small businesses. If you are business looking for a website or an employer looking to hire email me <a className="text-danger" href="mailto: spencer.saunders45@gmail.com">here</a>.</p>
            </div>
          </div>
          <div className="row justify-content-center StopOverflow">
            <div className="col-auto pt-4 ColBackground">
              <a className="btn btn-outline-danger m-3" href="/about">View About</a>
              <a className="btn btn-outline-danger m-3" href="/projects">View Projects</a>
            </div>
          </div>
          <div className="row mt-5 my-5 StopOverflow">
            <div className="col">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}