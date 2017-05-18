import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'

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
        <circle cx={circle.cx} cy={circle.cy} r={circle.r}/>
        <circle cx={leftEye.cx} cy={leftEye.cy} r={leftEye.r}/>
        <circle cx={rightEye.cx} cy={rightEye.cy} r={rightEye.r}/>
        <polygon points={`${circle.cx} ${circle.cy},${circle.cx + 1.2*circle.r} ${circle.cy+0.2*circle.r}, ${circle.cx} ${circle.cy+ 0.3*circle.r}`}/>
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
