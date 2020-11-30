
import React from 'react'
import Navbar from './Navbar';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Forms from '../pages/Forms'
import Status16 from '../pages/Status16'
import Status19 from '../pages/Status19'
import Status20 from '../pages/Status20'
function UseMain() {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Reports' component={Reports} />
          <Route path='/Froms'  component={Forms} />
          <Route path='/Status16'  component={Status16} />
          <Route path='/Status19'  component={Status19} />
          <Route path='/Status20'  component={Status20} />
        </Switch>
      </Router>
    </>
  );
}

export default UseMain;
