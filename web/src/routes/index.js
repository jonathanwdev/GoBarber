import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Signin from '../pages/SignIn';
import Signup from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/register" component={Signup} />

      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
