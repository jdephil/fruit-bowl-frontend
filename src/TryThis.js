import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './App.css'

function TryThis({ match }) {
  useEffect(() => {
    fetchTip();
    console.log(match)
  })

  const [tip, setTip] = useState({})

  const fetchTip = async () => {
    const fetchTip = await fetch(`http://fruitbowl-backend.herokuapp.com/api/tips/${match.params.id}`)

    const tip = await fetchTip.json();
    console.log(tip)
    setTip(tip)

  }

    return (
      <div className="tryThisContainer">
        <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
        <h1 className="tryThisName">Try this: {}</h1>
          <div className="learnMore">
              Learn more <span id="learnMoreArrow">&#62;</span>
          </div>
        <a href="#" id="tryAgain">Not interested? Try again!</a>
      </div>
    )
}

export default TryThis;