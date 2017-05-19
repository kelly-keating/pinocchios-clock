import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from './Header'
import Textbox from './Textbox'
import Clock from './Clock'
import Face from './Face'

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

  return (
    <div>


      <Router>
        <div>
          <Route path='/' component={Clock}/>
          <Route path='/' component={Textbox} />
        </div>
       </Router>
       <svg width={props.width} height={props.height}>
       <Face circle={circle} leftEye={leftEye} rightEye={rightEye}/>
       </svg>
    </div>
  )
}

export default App
