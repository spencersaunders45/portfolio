import React from 'react';
import './NavBar.css';
import Logo from '../../images/Logo_v2.png';

export default () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid ContainerNavBar">
        <div id="NavBar" className="row justify-content-between">
          <div className="col-auto">
            <a class="navbar-brand" href="/"><img id="LogoImg" src={ Logo } alt="" /></a>
          </div>
          <div className="col-auto">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div class="collapse navbar-collapse NavBarLinks" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/skills">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/projects">Projects</a>
                </li>
              </ul>
            </div>
      </div>
    </nav>
  )
}