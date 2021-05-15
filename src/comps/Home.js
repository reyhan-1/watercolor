import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";
 import React, {useState} from 'react';
 import ImageGrid from './imageGrid';
 import Modal from './Modal';
 import Title from './Title';
 import UploadForm from './UploadForm';
import About from "./About";
 
 const Home = () => {
   const [selectedImg, setSelectedImg] = useState(null);
 
   
   return (    
      
     <div className="App" >
      
       <ImageGrid setSelectedImg= {setSelectedImg}/>
       {selectedImg && <Modal selectedImg={selectedImg} 
       setSelectedImg={setSelectedImg}/> }
 
     </div>
  
   );
 }
 
 export default Home;