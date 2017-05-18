import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Textbox from './Textbox'



const App = () => {
  return (
    <div>
        <Router>
          <div>
            <Route path='/' component={Header}/>
            <Route path='/' component={Textbox} />
          </div>
        </Router>
    </div>
  )
}

export default App
