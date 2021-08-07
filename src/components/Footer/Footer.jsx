import React from 'react';

import './Footer.css';
import Linkedin from '../../images/linkedin_logo.png';
import GitHub from '../../images/github_logo_v2.png';
import Twitter from '../../images/twitter_logo.png';

export default () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col">
          <a className="mx-2" href="https://www.linkedin.com/in/spencer-saunders-developer/"><img className="rounded-circle LogoImg" src={ Linkedin } alt="Linkedin logo" /></a>
          <a className="mx-2" href="https://github.com/spencersaunders45"><img className="rounded-circle LogoImg" src={ GitHub } alt="GitHub logo" /></a>
          <a className="mx-2" href="https://twitter.com/SpencerS45"><img className="rounded-circle LogoImg" src={ Twitter } alt="Twitter Logo" /></a>
        </div>
      </div>
    </div>
  )
}