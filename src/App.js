import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Users from './users/Users';
import Centers from './centers/pages/Centers';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (<Router>
    <MainNavigation/>
    <main>
    <Switch>
    <Route path ="/" exact>
      <Centers/>
      </Route>
      <Route path ="/users" exact>
      <Users/>
      </Route>
      <Redirect to="/"/>
      </Switch>
      </main>
  </Router>
  );
};

export default App;
