import React from 'react';
import { Link } from 'react-router-dom'
import Title from './Title';

import pens from '../images/pens.JPG';
import brushes from '../images/brushes.JPG';
import set from '../images/set.JPG';
import paper from '../images/paper.JPG';
import onthego from '../images/onthego.JPG';
import morepaint from '../images/morepaint.JPG';

const About = () => {
  return (
    <div>
      <div className="supply">
        <h1>Hi!  </h1>
        <p>  I am Reyhan, software engineer. I love to watercolor painting. </p>
        <p>
          If you want to buy any of the pieces, 
          or want to say hi just contact me. You can 
          <a href="mailto:reyhanuyanik@icloud.com"> e-mail me</a>  .
          I usually get back within a day.
          <p>Find more about me on <a href="http://reyhan-1.github.io/" target="myTab"> my personal website. </a></p>
        </p>
      </div>
        
      <div className="supply"> 
      <h2> This website is an open source project made by Reyhan Uyanik </h2>
      </div>
      
    </div>

  )
}

export default About;
