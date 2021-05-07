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

function App() {  
  return (    
    <Router>
      <Navbar/>
      <Home/>
    </Router>
  );
}

export default App;