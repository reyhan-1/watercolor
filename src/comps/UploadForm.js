import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
   const [file, setFile] = useState(null); //file is null to begin with
   const [error, setError] = useState(null);

   //array of allowed types 
   const types = ['imgage/png', 'image/jpeg'];

   const changeHandler = (e) => {
      //console.log('changed');
      let selected = e.target.files[0];
      
      if(selected && types.includes(selected.type)) {
         setFile(selected); //assign 
         setError(''); //if image is selected error goes away
      } else { 
         setFile(null);
         setError("please select an image file");
      }
   }

   return(
      <form>
      <input type="file" onChange={changeHandler}/>
      <div className="output">
         { error && <div className="error"> {error} </div>}
         { file && <div> { file.name } </div>}
         { file && <ProgressBar file={file}  setFile={setFile}/>}
      </div>
   </form>
   )
}

export default UploadForm