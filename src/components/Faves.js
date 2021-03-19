import { useCookie, setCookie } from 'react-cookie'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Faves(props) {
  //*** RENDER TIPS FROM TIPSDATA.JS BASED ON CURRENT COOKIES */
  
  //** ACCESS COOKIES */
  let cookieArray = []
  // const [cookieValues, setCookieValues] = useState()
  // setCookieValues(Cookies.get('mentalFaves'))
  let cookieValues = Cookies.get('mentalFaves')
   console.log(cookieValues)
  let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)mentalFaves\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  console.log(cookieValue)
  // const getCookie = (name) => {
    //var cookieArr = document.cookie.split(";");
  // // Loop through the array elements
  //       for(var i = 0; i < cookieValue.length; i++) {
  //           var cookiePair = cookieValue[i].split("=");
    
  //           /* Removing whitespace at the beginning of the cookie name
  //           and compare it with the given string */
  //           if(name == cookiePair[0].trim()) {
  //               // Decode the cookie value and return
  //               return decodeURIComponent(cookiePair[1]);
  //           }
  //       }
    

  // }

//   function getCookie(name) {
//     // Split cookie string and get all individual name=value pairs in an array
//     var cookieArr = document.cookie.split(";");

//     // Loop through the array elements
//     for(var i = 0; i < cookieArr.length; i++) {
//         var cookiePair = cookieArr[i].split("=");

//         /* Removing whitespace at the beginning of the cookie name
//         and compare it with the given string */
//         if(name == cookiePair[0].trim()) {
//             // Decode the cookie value and return
//             cookieArray.push(decodeURIComponent(cookiePair[1]));
//         }
//     }

//     // Return null if not found
//     return null;
// }



// console.log(cookieArray)

//   function checkCookie() {
//     // Get cookie using our custom function
//     var firstName = getCookie("mentalFaves");

//     if(firstName != null) {
//         console.log("Welcome again, " + firstName);
//     } 
//     // else {
//     //     firstName = prompt("Please enter your first name:");
//     //     if(firstName != "" && firstName != null) {
//     //         // Set cookie using our custom function
//     //         setCookie("firstName", firstName, 1);
//     //     }
//     // }
// }

// Check the cookie on page load
// window.onload = getCookie("mentalFaves")
  //** ACCESS & FILTER DATA */
  
 
    useEffect(() => {
    fetchFaves()
    }, []);

  const fetchFaves = (callback) => {
    axios.post('http://localhost:8001/api/favorites', {values: cookieValues})
    .then(function (response) {
          console.log(response)
          
    })
    
}
  //lazy load favs
   
  return (
    <div className="favorites">
      
    </div>
  );
}
export default Faves;