import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

function Home(){
  return (
    <h1> Home Routing</h1>
  )
}

function About(){
  return (
    <h1> About Routing</h1>
  )
}

function Contact(){
  return (
    <h1> Contact Routing</h1>
  )
}

function Routing(){

  const liStyle={
    listStyleType:"none",
  }

  return (
    <Router>
      <nav>
        <ul style={liStyle}>
          <li> <Link to="/"> Home </Link> </li>
          <li> <Link to="/about"> About </Link> </li>
          <li> <Link to="/contact"> Contact </Link> </li>
        </ul>
      </nav>
      <Switch>
      <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routing;