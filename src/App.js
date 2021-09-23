import React from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Users from './users/Users';
import SignUP from './users/SignUP/SignUpPage';
import UserDetailsUpdate from './users/UserDetailsUpdate';
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
      <Route path ="/UserDetailsUpdate" exact>      <UserDetailsUpdate/>      </Route>
      <Route path ="/SignUP" exact>      <SignUP/>      </Route>
      <Redirect to="/"/>
      </Switch>
      </main>
  </Router>
  );
};

export default App;
