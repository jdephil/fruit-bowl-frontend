import axios from 'axios';
import {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie'
import './TryThis.css'
import FaveBtn from './FaveBtn'

function RelationalHealth() {
    const [tipP, setTipP] = useState([])
    const [ faveCookie, setFaveCookie ] = useCookies([])
    const [faves, setFaves] = useState([])

    let newArr = []

    useEffect(() => {
        fetchTips()
    }, []);

    const fetchTips = (callback) => {
        axios.get('http://fruitbowl-backend.herokuapp.com/api/tips')
        .then(function (response) {
              console.log(response.data)
              for (let i = 0; i < response.data.length; i++) {
                if (response.data[i].category === 'Relational Health') {
                    newArr.push(response.data[i])
                } 
              }
        }).then (() => {
            setTipP(newArr[Math.floor(Math.random() * newArr.length)])
        })
        document.querySelector('svg').style.fill = "none"
    }

    const onFaveToggle = (tipP) => {
        console.log("clicked")
        let newFaves = [...faves]
        const faveIndex = newFaves.indexOf(tipP)
        console.log(faveIndex)
        if (faveIndex >= 0 || newFaves.includes(tipP)) {
            document.querySelector('svg').style.fill = "none"
            newFaves.splice(faveIndex, 1)
            setFaveCookie("faves", JSON.stringify(newFaves), {
                path: "/",
                expires: new Date('2032-12-31')
            })
        } else {
            document.querySelector('svg').style.fill = "#F1BB87"
            newFaves = [...newFaves, tipP]
            setFaveCookie("faves", JSON.stringify(newFaves), {
                path: "/",
                expires: new Date('2032-12-31')
            })
        }   
        setFaves(newFaves)
        console.log(newFaves)
        
    }

    if (!tipP) {
        return (<p>"loading"</p>)
    } 
    return (
        <div className="tryThisContainer">
          <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
            <h1 className="tryThisName">Try this: {tipP.title}</h1>
            <FaveBtn onFaveToggle={onFaveToggle} tipP={tipP} faveCookie={faveCookie}/>
            <img src="/banana.png" id="imageForShowPage" alt="banana"/>
            <a href={tipP.url}>
                <div className="learnMore">
                    Learn more <span id="learnMoreArrow">&#62;</span>
                </div>
            </a>
          <button onClick={fetchTips} id="tryAgain">Not interested? Try again!</button>
        </div>
      )
}

export default RelationalHealth;