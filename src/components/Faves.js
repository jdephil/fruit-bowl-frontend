import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'
import 'lazysizes';
import './faves.css'


function Faves(props) {
  require('dotenv').config();

  const [tipResponse, setTipResponse] = useState([])
  //*** RENDER TIPS FROM TIPSDATA.JS BASED ON CURRENT COOKIES */
  
  //** ACCESS COOKIES */
 
  let cookieValues = Cookies.get('mentalFaves')
  let relCookieValues = Cookies.get('faves')
   console.log(relCookieValues)

  //** ACCESS & FILTER DATA */
  
    useEffect(() => {
    fetchFaves()
    }, []);

  const fetchFaves = (callback) => {
    axios.post(process.env.REACT_APP_LOCAL_FAVES_URL, {values: cookieValues, relValues: relCookieValues})
    .then(function (response) {
          console.log(response.data)
          setTipResponse(response.data)
        })
        
      }

      console.log(tipResponse)
      const allFaves = tipResponse.map((fave, i) => {
        return (
           
            <div className="faveContainer lazyload" key={fave.id}>
          
            <h3 className="faveName" key={fave.id}>{fave.title}</h3>
            
            <p className="faveCat" key={`title-${i}`}>{fave.category}</p>
            <a  href={fave.url} key={`utl-${i}`}>
            
              <div className="learnMoreFaves" key={`div-${i}`}>
                Learn more <span id="learnMoreArrow">&#62;</span>
              </div>
              
            </a>
            
          </div>
           
        )
      })
  //lazy load favs
   
  return (
    <div className="favorites">
      <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
      <main className="cardsContainer">
      
        {allFaves} 
        

      </main>
    </div>
  );
}
export default Faves;