import { Link } from 'react-router-dom'
import { useState } from 'react'

function FruitImages(props) {
  const [category, setCategory] = useState('')
  // let categoryName = ['mental health', 'nutrition', 'fitness', 'sexual health']
//pass health category props to each link
  let hoverHandler = (e) => {
    setCategory(e.value)
    console.log(category)
  }

  return (
    <div className="fruitbowl">
      <div className='category'>
        {category}
      </div>
      <div className="fruitLinks">
          <Link to='/trythis'><img onMouseEnter={() => hoverHandler} src='/grapes.png' alt='clickable grapes' value='mental health'/></Link>
          <Link to='/trythis'><img src='/banana.png' alt='clickable bananas'/></Link>
          <Link to='/trythis'><img src='/mango.png' alt='clickable mango'/></Link>
          <Link to='/trythis'><img src='/orange.png' alt='clickable orange'/></Link>
          <img src='/bowl.png' alt='bowl' />
        </div>
    </div>
        
  );
}

export default FruitImages;