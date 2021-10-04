import React, { useState, useCallback }  from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';
import Users from './users/pages/Users';
import Centers from './centers/pages/Centers';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  let routes;

  if (token) {
    routes = (
    <Switch>
    <Route path ="/" exact>
      <Centers/>
      </Route>
      <Route path ="/users" exact>
      <Users/>
      </Route>
      <Redirect to="/"/>
      </Switch>

  );
}else {
  routes = (
    <Switch>
      <Route path ="/" exact>
      <Centers/>
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Redirect to="/auth" />
    </Switch>
  );
}
return (
  <AuthContext.Provider
    value={{ 
      isLoggedIn: !!token,
      token: token,
      userId: userId,
      login: login,
      logout: logout }}
  >
    <Router>
      <MainNavigation />
      <main>{routes}</main>
    </Router>
  </AuthContext.Provider>
);
}
;

export default App;
