import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

function MentalHealth() {
    const [tip, setTip] = useState([])
    useEffect(() => {
        fetchTips();
    }, []);
    let newArr = []
    const fetchTips = () => {
        axios.get('http://fruitbowl-backend.herokuapp.com/api/tips')
          .then(function (response) {
              console.log(response.data)
              const result = response.data.map(function(tip) {
                  if (tip.category === 'Mental Health') {
                      newArr.push(tip)
                  }
              })
            newArr.push(response.data)
            setTip(response.data)
          })
    }
    console.log(tip)
    // const randomTitle = () => {
    //     let randomIndex = Math.floor(Math.random() * newArr.length)
    //     let tryThisTitle = newArr[0]
    //     console.log(tryThisTitle)
    // }
    // randomTitle();
    return (
        <div className="tryThisContainer">
          <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
          {tip.map(index => {
              if (index.category === 'Mental Health') {
                  return index
              }
          })}
            <h1 className="tryThisName">Try this: </h1>
            <Link>
                <div className="learnMore">
                    Learn more <span id="learnMoreArrow">&#62;</span>
                </div>
            </Link>
          <a href="#" id="tryAgain">Not interested? Try again!</a>
        </div>
      )
}

export default MentalHealth;