import React from 'react';
import {motion} from 'framer-motion';

const Modal = ({selectedImg, setSelectedImg}) => {

   const handleClick = (e) => {
      if(e.target.classList.contains('backdrop')){
         setSelectedImg(null);
      } //doesnt close when the img is clicked
      
   }

   return (
      <motion.div className="backdrop" onClick={handleClick}
         initial={{opacity:0}}
         animate={{opacity:1}}
      >
         <motion.img src={selectedImg} alt="bigger sketch" 
            initial = {{ y: "3vh" }} //vievport height
            animate={{ y:0}} 
            transition={{ duration: 0.5 }}/>
      </motion.div>
   )
}

export default Modal;