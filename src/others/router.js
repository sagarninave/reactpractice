import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import PropsFunctionalComponent from './PropsFunction'

function MyRouter(){
  return(
    <Router>
      <ul>
        <li><Link to=""> Functional Component</Link></li>
        <li><Link to="/classcomponent"> Class Component</Link></li>
        <li><Link to="/propsfunctionalcomponent"> Props Functional Component</Link></li>
      </ul>

      <Route exact path="/" component={FunctionComponent}></Route>
      <Route path="/classcomponent" component={ClassComponent}></Route>
      <Route path="/propsfunctionalcomponent" component={PropsFunctionalComponent}></Route>
    </Router>
  )
}

export default MyRouter;