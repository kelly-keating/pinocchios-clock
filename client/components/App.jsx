import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Clock from './Clock'


const App = () => {
  return (
    <div>
        <Router>
          <div>
            <Route exact path='/' component={Header}/>
            <Route path='/clock' component={Clock}/>
          </div>
        </Router>
    </div>
  )
}

export default App
