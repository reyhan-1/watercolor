import React from 'react';
import { Link } from 'react-router-dom'
import Title from './Title';
import {Nav, NavbarContainer, NavLogo, NavBtn, NavBtnLink,
   MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
   import { BrowserRouter as Router, Route } from 'react-router-dom'



const Navbar = () => {
  return (

<>
<Title/>
<NavMenu>
      <NavItem>
          <NavLinks to='/'>Home</NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks to='about'>About & Supplies </NavLinks>
        </NavItem>
      </NavMenu>
 
 </>
  );
}


export default Navbar;