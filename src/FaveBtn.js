import axios from 'axios'
import { Link } from 'react-router-dom'
import './faves.css'

function FaveBtn(props) {

  let heartFillToggle = props.isFave ? 'heartFilled' : 'heartEmpty'
  
  const handleClick = (e) => {
   
    e.preventDefault()
    console.log("handling")
    props.onFaveToggle(props.tipP._id)
    
    if (props.isFave) {
      axios.post('http://localhost:8001/api/favorites', props.faves)
    }
  }

  const formSubmit = (e) => {
    e.preventDefault()
  }
  
   return (
    <div className="favesDiv">
      <button className="faveBtn" onClick={(e) => {handleClick(e)}}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-heart ${heartFillToggle}`} width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </button>
      <form onSubmit={formSubmit}>
        <input id="inputData" type="hidden" name="favorites" value="" />
      </form>
      <Link to='/favorites'>link</Link>
     </div>
  );
}
export default FaveBtn;