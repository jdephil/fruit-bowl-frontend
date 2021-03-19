import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Faves(props) {
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
    axios.post('http://localhost:8001/api/favorites', {values: cookieValues})
    .then(function (response) {
          console.log(response.data)
          setTipResponse(response.data)
        })
        
      }

      console.log(tipResponse)
      const allFaves = tipResponse.map((fave, i) => {
        return (
          <div>
          <h2 key={`title-${i}`}>{fave.title}</h2>
          <p key={`url-${i}`}>{fave.url}</p>
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