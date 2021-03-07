import { Link } from 'react-router-dom'
import { useState } from 'react'


function FruitImages(props) {
  const [category, setCategory] = useState('')
  // let categoryName = ['mental health', 'nutrition', 'fitness', 'sexual health']
//pass health category props to each link
  let hoverInHandler = (e) => {
    setCategory(e.value)
    console.log(e.value)
  }

  let hoverOutHandler = () => {
    console.log("hover out")
  }

  return (
    <div className="fruitbowl">
      <div className='category'>
        {category}
      </div>
      <div className="fruitLinksDiv">
          <Link className='fruitLink grapesImg' to='/trythis'><img className='fruitImg' onMouseLeave={hoverOutHandler} onMouseEnter={hoverInHandler} src='/grapes.png' alt='clickable grapes' value='mental health'/></Link>
          <Link className='fruitLink bananaImg' to='/trythis'><img className='fruitImg' src='/banana.png' alt='clickable bananas'/></Link>
          <Link className='fruitLink mangoImg' to='/trythis'><img className='fruitImg' src='/mango.png' alt='clickable mango'/></Link>
          <Link className='fruitLink orangeImg' to='/trythis'><img className='fruitImg' src='/orange.png' alt='clickable orange'/></Link>
      </div>
      <div className='bowlDiv'>
        <img className='bowlImg' src='/bowl.png' alt='bowl' />
      </div>
    </div>

  );
}

export default FruitImages;
