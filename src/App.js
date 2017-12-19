import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'
import Navigation from './layout/Navigation'
import Environment from './Environment'
import Stack from './Stack'
import Tutorial from './Tutorial'
import Code from './Code'

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={Environment} />
      <Route path="/tool" component={About} />
      <Route path="/stack" component={Stack} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/code" component={Code} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)
export default App