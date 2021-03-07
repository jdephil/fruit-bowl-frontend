import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './App.css'


const TryThis = (props) => {
  // const [tryData, setTryData] = useState({
  //   name: '',
  //   category: '',
  //   url: '',
  //   urlTitle: ''
  // })
  // const [error, setError] = useState(null)

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_SERVER_URL}api/tips`, tryData)
  //   .then((res) => {
  //     console.log(res.data)
  //   })
  // })
  console.log(props.tipsData)
 
    return (
      <div className="tryThisContainer">
        <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
        <h1 className="tryThisName">Try this: {props.tipsData.title}</h1>
        {/* <img src for fruit /> */}
        <a href={props.tipsData.url}>
          <div className="learnMore">
              Learn more <span id="learnMoreArrow">&#62;</span>
          </div>
        </a>
        <a href="#" id="tryAgain">Not interested? Try again!</a>
      </div>
    )
  
}

export default TryThis;