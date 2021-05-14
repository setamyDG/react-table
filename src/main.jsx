import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Basic, Footers, Home, Sorting } from './pages';

const Main = () => (
  <Router basename="">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/basic" component={Basic} />
      <Route exact path="/footers" component={Footers} />
      <Route exact path="/sorting" component={Sorting} />
    </Switch>
  </Router>
);

export default Main;
