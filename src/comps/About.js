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
        <h1>Hi I am Reyhan</h1>
        <p> I am software engineer and I love to watercolor painting. </p>
        <p>
          If you want to buy any of the pieces, contact me. You can 
          <a href="mailto:reyhanuyanik@icloud.com"> e-mail me. </a> 
          I usually get back within a day.
          <p>Find more about me on <a href="http://reyhan-1.github.io/" target="myTab"> my personal website</a></p>
        </p>
      </div>
        
      <div className="supply">
      <h2> You can find my favorite  Sketching & Watercolor Supplies here. </h2>
      </div>

        <div class="responsive">
        <div class="gallery">
          <img src={pens} alt="my pens" width="600" height="400"/>
          <div class="desc">My favorite pens. 
          </div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={set} alt="my set" width="600" height="400"/>
          <div class="desc"> Royal Talens Van Gogh Watercolor Set.
          </div>
        </div>
      </div>

      <div class="responsive">
        <div class="gallery">
          <img src={brushes} alt="my brushes" width="600" height="400"/>
          <div class="desc"> Brushes.
          </div>
        </div>
      </div>

      

      <div class="responsive">
        <div class="gallery">
          <img src={morepaint} alt="more paints" width="600" height="400"/>
          <div class="desc"> More Van Gogh Watercolor Paints. 
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default About;
