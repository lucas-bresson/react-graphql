import React from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Dashboard from './Dashboard';
import requireAuth from './requireAuth';
import { Switch, useRouteMatch, Route } from 'react-router-dom';

function App() {
  let match = useRouteMatch();

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path={`${match.path}login`} component={LoginForm} />
        <Route path={`${match.path}signup`} component={SignupForm} />
        <Route
          path={`${match.path}dashboard`}
          component={requireAuth(Dashboard)}
        />
      </Switch>
    </div>
  );
}

export default App;
