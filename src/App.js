import React from 'react'
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom'

import './App.css'
import Navigation from './layout/Navigation'
import Environment from './Environment'
import Tool from './Tool'
import Stack from './Stack'
import Tutorial from './Tutorial'
import Code from './Code'

const About = () => (
    <div className="container">
        <h2>About</h2>
    </div>
)

const App = () => (
    <Router>
        <>
            <Navigation />
            <Route exact path="/" component={Environment} />
            <Route path="/tool" component={Tool} />
            <Route path="/stack" component={Stack} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/code" component={Code} />
            <Route path="/about" component={About} />
        </>
    </Router>
)

export default App