import { useState } from 'react';
import { useCookies } from 'react-cookie'
import './faves.css'

function Faves(props) {
  const [cookie, setCookie] = useCookies(["faves"])
  const [faved, setFaved] = useState(false)
  // const [faveArr, setFaveArr] = useState([])

  let faveArr = []
  let cookies = document.cookie


  const handleFave = async(e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log(props.tipP._id)
    if (faved === false && !faveArr.includes(`${props.tipP._id}`)) {
      setFaved(true)
      document.querySelector('svg').style.fill = "#F1BB87"
      faveArr.push(props.tipP._id)
      console.log("added",faveArr)
      // setCookie("faves", JSON.stringify(faveArr), {
      //   path: "/",
      //   expires: new Date('2032-12-31')
      // })
      document.cookie = `faves=${JSON.stringify(faveArr)}; expires=${new Date('2032-12-31')}; path=/`
      console.log('added',cookies)
      console.log("faved",faved)
    } else if (faved === true ) {
      document.querySelector('svg').style.fill = "none"
      let index = faveArr.indexOf(`${props.tipP._id}`)
      faveArr.splice(index, 1)
      console.log('deleted',faveArr) 
      document.cookie = `faves=${JSON.stringify(faveArr)}; expires=${new Date('2032-12-31')}; path=/`
      console.log("defaved",faved)
    setFaved(false)
    console.log('deleted',cookies)
    }
    
  }
   
  return (
    <div className="favesDiv">
      <button className="faveBtn" onClick={handleFave}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
          {/* <svg alt="star" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg> */}
      </button>
    </div>
  );
}
export default Faves;