import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Auth from './pages/Auth';
import Main from './pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/auth" />} />
        <Route path="/auth" component={Auth} />
        <Route path="/main" component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
