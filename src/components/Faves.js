import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './faves.css'


function Faves(props) {
  require('dotenv').config();

  const [tipResponse, setTipResponse] = useState([])
  //*** RENDER TIPS FROM TIPSDATA.JS BASED ON CURRENT COOKIES */
  
  //** ACCESS COOKIES */
 
  let cookieValues = Cookies.get('mentalFaves')
   //console.log(cookieValues)

  //** ACCESS & FILTER DATA */
  
    useEffect(() => {
    fetchFaves()
    }, []);

  const fetchFaves = (callback) => {
    axios.post(process.env.REACT_APP_LOCAL_FAVES_URL, {values: cookieValues})
    .then(function (response) {
          console.log(response.data)
          setTipResponse(response.data)
        })
        
      }

      console.log(tipResponse)
      const allFaves = tipResponse.map((fave, i) => {
        return (
          <div className="tryThisContainer">
            <h2 className="tryThisName" key={`title-${i}`}>{fave.title}</h2>
            <a href={fave.url}>
              <div className="learnMore">
                Learn more <span id="learnMoreArrow">&#62;</span>
              </div>
            </a>
          </div>
        )
      })
  //lazy load favs
   
  return (
    <div className="favorites">
      {allFaves}
    </div>
  );
}
export default Faves;