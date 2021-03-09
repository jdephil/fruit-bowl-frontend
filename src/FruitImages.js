import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TipsData from './TipsData'



function FruitImages(props) {
  const [categoryDiv, setCategoryDiv] = useState('')
  const [tipsByCategory, setTipsByCategory] = useState('')
  const [tipsData, setTipsData] = useState({
    title: '', 
    category: '',
    url: '',
    urlTitle: ''
  })
  
  useEffect(() => {
    axios.get('http://fruitbowl-backend.herokuapp.com/api/tips')
    .then(res => {
      res.data.map(tip => {
        let tipTitle = tip.title
        setTipsData({
          title: tipTitle, 
          category: tip.category, 
          url: tip.url, 
          urlTitle: tip.urlTitle
      })
       
  })
})
    
    let clickHandler = (e) => {
      if (e.target.src.includes('/grapes.png')) {
        setCategoryDiv('Mental Health')
      } else if (e.target.src.includes('/banana.png')) {
        setCategoryDiv('Relational Health')
      } else if (e.target.src.includes('/mango.png')) {
        setCategoryDiv('Nutrition')
      } else if (e.target.src.includes('/orange.png')) {
        setCategoryDiv('Physical Fitness')
      }
    }
    
    return (
      <div>
        <div className='category'>
          <Link tipsData={tipsData} to='/trythis'>{categoryDiv}</Link>
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
  );
}

export default FruitImages;
