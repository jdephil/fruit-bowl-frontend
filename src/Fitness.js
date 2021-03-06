import axios from 'axios';
import {useState, useEffect} from 'react';
import './TryThis.css'
import Faves from './FaveBtn'

function Fitness() {
    const [tipP, setTipP] = useState([])
    let newArr = []
    useEffect(() => {
        fetchTips()
    }, []);
    const fetchTips = (callback) => {
        axios.get('https://fruitbowl-backend.herokuapp.com/api/tips')
        .then(function (response) {
              console.log(response.data)
              const result = response.data.map(function(tip) {
                    if (tip.category === 'Physical Fitness') {
                      newArr.push(tip)
                  }    
            })
        }).then (() => {
            setTipP(newArr[Math.floor(Math.random() * newArr.length)])
        })
    }
    if (!tipP) {
        return (<p>"loading"</p>)
    } 
    return (
        <div className="tryThisContainer">
          <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
            <h1 className="tryThisName">Try this: {tipP.title}</h1>
            <img src="/orange.png" id="imageForShowPage"/>
            <a href={tipP.url}>
                <div className="learnMore">
                    Learn more <span id="learnMoreArrow">&#62;</span>
                </div>
            </a>
          <a href="/fitness" id="tryAgain">Not interested? Try again!</a>
        </div>
      )
}

export default Fitness;