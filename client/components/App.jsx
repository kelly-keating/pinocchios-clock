import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Face from './Face'

const App = props => {
  const circle = {
    cx: props.width / 2,
    cy: props.height / 2,
    level: 0,
    r: props.height / 12
  }

  const leftEye = {
    cx: props.width / 2 -props.width /48,
    cy: props.height / 2- props.height /96,
    level: 0,
    r: props.height/ 76
  }
  const rightEye = {
    cx: props.width / 2 +props.width /48,
    cy: props.height / 2- props.height /96,
    level: 0,
    r: props.height/ 76
  }

console.log(props);
  return (
    <div>
      <svg width={props.width} height={props.height}>
      <Face circle={circle} leftEye={leftEye} rightEye={rightEye}/>
      </svg>

      <Router>
        <div>
          <Route path='/' component={Header}/>
        </div>
      </Router>
    </div>
  )
}

export default App
