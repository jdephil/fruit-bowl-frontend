import MentalHealth from './MentalHealth'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


function FruitImages() {
  const [categoryDiv, setCategoryDiv] = useState('')
  const [tipsByCategory, setTipsByCategory] = useState('')
  const [toLink, setToLink] = useState('')
  const [tips, setTips] = useState([
    {
    title: '',
    category: '',
    url: '',
    urlTitle: ''
  }
])

    // useEffect(() => {
    //     fetch('http://fruitbowl-backend.herokuapp.com/api/tips')
    //     .then(response => response.json())
    //     .then(({ data: tips}) => {
    //       setTips(tips)
    //     })
    // }, []);
    let linkClickHandler = () => {
    
  
      
    }

    let clickHandler = (e) => {
      if (e.target.src.includes('/grapes.png')) {
        setCategoryDiv('Mental Health')
        setToLink('/mentalhealth')
      } else if (e.target.src.includes('/banana.png')) {
        setCategoryDiv('Relational Health')
      } else if (e.target.src.includes('/mango.png')) {
        setCategoryDiv('Nutrition')
      } else if (e.target.src.includes('/orange.png')) {
        setCategoryDiv('Physical Fitness')
      }
    }
    // const fetchTips = async () => {
    //   const data = await fetch('http://fruitbowl-backend.herokuapp.com/api/tips');
    //   const tips = await data.json();
    //   setTipsData(tips)
    //   // console.log(tips)
    //   console.log(setTipsData)
      
    // }
    
        
          
        
    
    return (
      <div>
        <div className='category'>
          <Link onClick={linkClickHandler} to={toLink}>{categoryDiv}</Link>
        </div>
        
      <div className="fruitbowl">
      
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
    </div>
    </div>
  )
}
export default FruitImages