import { useState } from 'react';
import { useCookies } from 'react-cookie'



function Faves(props) {
  const [cookie, setCookie] = useCookies(["user"])
  const [faved, setFaved] = useState(false)


  const handleCookie = () => {
    console.log(props.tipP._id)
    setFaved(!faved)
    if (faved === false) {
      setCookie("user", props.tipP._id, {
          path: "/",
          maxAge: 2147483647,
          expires: new Date('2032-12-31')
     })


    }
  
}
   
  return (
    <div className="favesDiv">
      <button className="faveBtn" onClick={handleCookie}>
          <svg alt="star" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg>
      </button>
    </div>
  );
}
export default Faves;