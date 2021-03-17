import { useState } from 'react';
import { useCookies } from 'react-cookie'
import './faves.css'

function Faves(props) {
  const [cookie, setCookie] = useCookies(["faves"])
  const [faved, setFaved] = useState(false)


  const handleCookie = (e) => {
    e.preventDefault()
    console.log(props.tipP._id)
    if (faved === false && !Object.values(cookie).includes(`${props.tipP._id}`)) {
      setCookie("faves", props.tipP._id, {
          path: "/",
          maxAge: 2147483647,
          expires: new Date('2032-12-31')
     })
     console.log(cookie)
    } else {
      setCookie("faves")
      console.log(cookie)
    }
    setFaved(!faved)
}
   
  return (
    <div className="favesDiv">
      <button className="faveBtn" onClick={handleCookie}>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
          {/* <svg alt="star" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg> */}
      </button>
    </div>
  );
}
export default Faves;