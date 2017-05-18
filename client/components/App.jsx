import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'



const App = () => {
  return (
    <div>
        <Router>
          <div>
            <Route path='/' component={Header}/>
          </div>
        </Router>
    </div>
  )
}

export default App
