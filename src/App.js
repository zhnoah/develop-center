import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'
import Navigation from './layout/Navigation'
import Environment from './Environment'
import Stack from './Stack'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Navigation />
      <div className="container">
        <Route exact path="/" component={Environment} />
        <Route path="/tool" component={About} />
        <Route path="/stack" component={Stack} />
        <Route path="/tutorial" component={About} />
        <Route path="/code" component={About} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
)
export default App