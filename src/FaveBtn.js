import { useState } from 'react';
import { useCookies } from 'react-cookie'
import { Link } from 'react-router-dom'
import './faves.css'

function FaveBtn(props) {
  const [cookie, setCookie, removeCookie] = useCookies(["faves"])
  const [faved, setFaved] = useState(false)
  const [faveArr, setFaveArr] = useState([])

  // let cookies = document.cookie
  
  
  const handleFave = async(e, fave) => {
    e.preventDefault()
    e.stopPropagation()
    
    let newFaves = [...faveArr]
    const faveIndex = newFaves.indexOf(fave)

    if (faveIndex >= 0) {
      newFaves.splice(faveIndex, 1)
    } else {
      newFaves = [...newFaves, fave]
    }
    setFaveArr(newFaves)
    // if cookie does not exist -> set cookie
    // if (!cookie.faves) {
    //   // setFaved(true)
    //   newFaves[...newFaves, fave]
    //   document.querySelector('svg').style.fill = "#F1BB87"
    //   // faveArr.push(props.tipP._id)
    //   console.log("added initial",faveArr)
    //   setCookie("faves", `${props.tipP._id}`, {
    //     path: "/",
    //     expires: new Date('2032-12-31')
    //   })
    //   // setCookie("faves", JSON.stringify(faveArr), {
    //   //   path: "/",
    //   //   expires: new Date('2032-12-31')
    //   // })
      
    //   console.log('added inital',cookie)
    //   // console.log("faved",faved)

    //   //if cookie exists, but id is not in fav array -> push id to fav array
    // } else if (cookie.faves && !faveArr.includes(`${props.tipP._id}` ) ) {
    //   faveArr.push(props.tipP._id)
    //   console.log("added",faveArr)
    //   //if cookie exists & id is in fav array -> remove id from fav array
    // }else if (cookie.faves && faveArr.includes(`${props.tipP._id}` ) ){
    //   document.querySelector('svg').style.fill = "none"
    //   let index = faveArr.indexOf(`${props.tipP._id}`)
    //   faveArr.splice(index, 1)
    //   console.log('deleted',faveArr) 
    //   // setCookie("faves", JSON.stringify(faveArr), {
    //   //   path: "/",
    //   //   expires: new Date('2032-12-31')
    //   // })
    //   // console.log("defaved",faved)
    //   // setFaved(false)
    //   console.log('deleted',cookie)
    // }
    
  }
   // if cookie, add to array. and if there is a cooke and it exists, remove from array
  const handleClick = (e) => {
    e.stopPropagation()
    console.log("handling")
    props.onFaveToggle(props.tipP._id)
  }
  
   return (
    <div className="favesDiv">
      <button className="faveBtn" onClick={(e) => {handleClick(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
          {/* <svg alt="star" height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><path d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" transform="translate(3 3)"/></svg> */}
      </button>
      <Link cookie={cookie} to='/favorites'>link</Link>
    </div>
  );
}
export default FaveBtn;