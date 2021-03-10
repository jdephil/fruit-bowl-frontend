import axios from 'axios';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

function MentalHealth() {
    const [tips, setTips] = useState([
           
            ]);
            // const fetchTips = async () => {
    //     const data = await fetch('http://fruitbowl-backend.herokuapp.com/api/tips');
    //     const tips = await data.json();
    //     setTips(tips)
    // }
    const [tipP, setTipP] = useState([])
    let newArr = []
    useEffect(() => {
        fetchTips()
    }, []);
    const fetchTips = (callback) => {
        axios.get('http://fruitbowl-backend.herokuapp.com/api/tips')
        .then(function (response) {
              console.log(response.data)
              const result = response.data.map(function(tip) {
                    if (tip.category === 'Mental Health') {
                      newArr.push(tip)
                  }    
            })
        }).then (() => {
            setTipP(newArr[Math.floor(Math.random() * newArr.length)].title)
        })
    }
    if (!tipP) {
        return (<p>"loading"</p>)
    } 
    return (
        <div className="tryThisContainer">
          <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
            <h1 className="tryThisName">Try this: {tipP}</h1>
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