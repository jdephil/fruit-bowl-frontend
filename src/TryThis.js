import axios from 'axios'
import React from 'react'
import './App.css'

class TryThis extends React.Component {
  state = {
    name: 'Test test test',
    category: '',
    url: '',
    urlTitle: ''
  }
  componentDidMount = () => {
    axios.get('/').then((res) => {
      this.setState({
        tips: res.data
      })
    })
  }
  render = () => {
    return (
      <div className="tryThisContainer">
        <a href="/" id="goBack">&#60; Back to Fruit Bowl</a>
        <h1 className="tryThisName">Try this: {this.state.name}</h1>
        {/* <img src for fruit /> */}
        <a href={this.state.url}>
          <div className="learnMore">
              Learn more <span id="learnMoreArrow">&#62;</span>
          </div>
        </a>
        <a href="#" id="tryAgain">Not interested? Try again!</a>
      </div>
    )
  }
}

export default TryThis;