import { Link } from 'react-router-dom'
import { useState } from 'react'


function FruitImages() {
    const [categoryDiv, setCategoryDiv] = useState('')
    const [toLink, setToLink] = useState('')

    let clickHandler = (e) => {
      if (e.target.src.includes('/grapes.png')) {
        setCategoryDiv('Mental Health')
        setToLink('/mentalhealth')
      } else if (e.target.src.includes('/banana.png')) {
        setCategoryDiv('Relational Health')
        setToLink('/relationalhealth')
      } else if (e.target.src.includes('/mango.png')) {
        setCategoryDiv('Nutrition')
        setToLink('/nutrition')
      } else if (e.target.src.includes('/orange.png')) {
        setCategoryDiv('Physical Fitness')
        setToLink('/fitness')
      }
    }    
    return (
      <div>
        <div className='category'>
          <Link className='categoryLink' to={toLink}>{categoryDiv}</Link>
        </div>
        
        <main className="fruitbowl">
          <div className="fruitLinksDiv">
            <div className='fruitLink grapesImg'><img className='fruitImg' onClick={clickHandler} src='/grapes.png' alt='clickable grapes' /></div>
            <div className='fruitLink bananaImg' ><img className='fruitImg' onClick={clickHandler} src='/banana.png' alt='clickable bananas'/></div>
            <div className='fruitLink mangoImg' ><img className='fruitImg' onClick={clickHandler} src='/mango.png' alt='clickable mango'/></div>
            <div className='fruitLink orangeImg' ><img className='fruitImg' onClick={clickHandler} src='/orange.png' alt='clickable orange'/></div>  
          </div>
          <div className='bowlDiv'>
            <img className='bowlImg' src='/bowl.png' alt='bowl' />
          </div>
            <div>
          </div>
        </main>

      </div>
  )
}
export default FruitImages