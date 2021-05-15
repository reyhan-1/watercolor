import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState} from 'react';
import Home from "./comps/Home";
import Navbar from "./comps/Navbar";
import About from "./comps/About";

const links = [{ title: 'Logout', pathName: '/logout', isButton: true }];


function App() {  
  return (    
    <Router>
      <Navbar/>
      <Home/>
      <About/>
    </Router>
  );
}

export default App;