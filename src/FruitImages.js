import { Link } from 'react-router-dom'
import { useState } from 'react'
// import axios from 'axios'


function FruitImages(props) {
  const [category, setCategory] = useState('')
  const allTips = props.tips.map((tip, i) => {
    if (tip.category === "Mental Health") {
      return tip
    } else if (tip.category === "Relational Health") {
      return tip
    } else {
      console.log('done')
    }
  })
 
  let hoverInHandler = (e) => {
    setCategory(e.target.cat)
    console.log(e.target.src)
    console.log("hover in")
  }

  let clickHandler = () => {
    console.log("hover out")
  }

  return (
    <div className="fruitbowl">
      <div className='category'>
        {category}
      </div>
      <div className="fruitLinksDiv">
          <Link className='fruitLink grapesImg' to='/trythis'><img className='fruitImg' onClick={clickHandler} src='/grapes.png' alt='clickable grapes' /></Link>
          <Link className='fruitLink bananaImg' to='/trythis'><img className='fruitImg' src='/banana.png' alt='clickable bananas'/></Link>
          <Link className='fruitLink mangoImg' to='/trythis'><img className='fruitImg' src='/mango.png' alt='clickable mango'/></Link>
          <Link className='fruitLink orangeImg' to='/trythis'><img className='fruitImg' src='/orange.png' alt='clickable orange'/></Link>
          <img className='fruitLink bowlImg' src='/bowl.png' alt='bowl' />
      </div>
      <div className='bowlDiv'>
        
      </div> 
    </div>
        
  );
}

export default FruitImages;