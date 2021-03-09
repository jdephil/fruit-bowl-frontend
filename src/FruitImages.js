import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



function FruitImages(props) {
  const [categoryDiv, setCategoryDiv] = useState('')
  const [tipsByCategory, setTipsByCategory] = useState('')
  const [tipsData, setTipsData] = useState({
    // title: '', 
    // category: '',
    // url: '',
    // urlTitle: ''
  })

  useEffect(() => {
    axios.get('http://fruitbowl-backend.herokuapp.com/api/tips')
      .then(res => {
        const allTips = res.data
       
        setTipsData({
          // title: res.data[].title, 
          // category: res.data.category, 
          // url: res.data.url, 
          // urlTitle: res.data.urlTitle
          allTips
        })
        
      })
    }, [])
    
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
     {tipsData.map((tip, i) => {
        return (
          <Link tip={tip} to='/trythis'>{categoryDiv}</Link>
        )
      })
    }
        
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
