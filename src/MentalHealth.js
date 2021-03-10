import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css'

function MentalHealth() {
    useEffect(() => {
        fetchTips();
    }, []);
    const [tips, setTips] = useState([
        {
            category: 'Mental Health'
        }
    ]);
    const fetchTips = async () => {
        const data = await fetch('http://fruitbowl-backend.herokuapp.com/api/tips');
        const tips = await data.json();
        setTips(tips)
        console.log(tips)
    }
    return (
        <div className="tryThisContainer">
          <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
            <h1 className="tryThisName">Try this: {}</h1>
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