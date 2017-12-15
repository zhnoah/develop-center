import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'
import Navigation from './layout/Navigation'
import Environment from './Environment'
import Stack from './Stack'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

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
        <Route exact path="/" component={Home} />
        <Route path="/environment" component={Environment} />
        <Route path="/stack" component={Stack} />
        <Route path="/tutorial" component={About} />
        <Route path="/code" component={About} />
        <Route path="/about" component={About} />
      </div>
    </div>
  </Router>
)
export default App