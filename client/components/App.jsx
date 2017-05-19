import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Textbox from './Textbox'
import Clock from './Clock'


const App = props => {

  const circle = {
    cx: props.width / 2,
    cy: props.height / 4,
    level: 0,
    r: props.height / 12
  }
  const leftEye = {
    cx: props.width / 2 -props.width /48,
    cy: props.height / 4- props.height /96,
    level: 0,
    r: props.height/ 76
  }
  const rightEye = {
    cx: props.width / 2 +props.width /48,
    cy: props.height / 4- props.height /96,
    level: 0,
    r: props.height/ 76
  }

  const renderTextBox = () => {
    const content = {
      width: props.width,
      height: props.height,
      circle,
      leftEye,
      rightEye
    }
    return <Textbox content={content} />
  }

  return (
    <div>
      <Router>
        <div>
          <Route path='/' component={Clock}/>
          <Route exact path='/' component={renderTextBox}/>
        </div>
      </Router>
    </div>
  )
}

export default App
