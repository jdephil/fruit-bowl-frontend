import { useCookie } from 'react-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Faves(props) {
  const [ faveTip, setFaveTip ] = useState([])
  //access cookies
  let cookieData = document.cookie
  //display all favs in cookie
  console.log(props)
  useEffect(() => {
    fetchFaves()
}, []);

const fetchFaves = (callback) => {
    axios.post('http://localhost:8001/api/favorites')
    .then(function (response) {
          console.log(response.data)
          // const result = response.data.map(function(tip) {
          //       if (tip._id === cookieData.faves) {
          //         setFaveTip(tip)
          //         console.log(faveTip)
          //     }    
        // })
    })
    // .then (() => {
    //     setTipP(newArr[Math.floor(Math.random() * newArr.length)])
    // })
}
  //lazy load favs
   
  return (
    <div className="favorites">
      {/* {props.cookie.faves && <p>{props.cookie.faves}</p>} */}
    </div>
  );
}
export default Faves;