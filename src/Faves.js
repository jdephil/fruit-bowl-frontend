import { useCookie } from 'react-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Faves(props) {
  //*** RENDER TIPS FROM TIPSDATA.JS BASED ON CURRENT COOKIES */
  
  //** ACCESS COOKIES */
  let x = document.cookie
  console.log(x)

  //** ACCESS & FILTER DATA */
 
 
  //   useEffect(() => {
//     fetchFaves()
// }, []);

// const fetchFaves = (callback) => {
//     axios.post('http://localhost:8001/api/favorites')
//     .then(function (response) {
//           console.log(response)
          
//     })
    
// }
  //lazy load favs
   
  return (
    <div className="favorites">
      
    </div>
  );
}
export default Faves;