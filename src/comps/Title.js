import React from 'react';
import { Wave, Random } from 'react-animated-text';
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink,
        MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
        import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './About';
import ParticlesBg from 'particles-bg';

const Title = () => {
  return (
<>
<div>
      <NavMenu>
        <NavItem>
          <NavLinks to='about'>About</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='contact'>Contact</NavLinks>
        </NavItem>
      </NavMenu>

    </div>
    <div className="title">

      <h2 >rey on paper</h2>
      <p>“Art washes from the soul the dust of everyday life.” - Pablo Picasso</p>
    </div>

    </>
  )
}

export default Title;