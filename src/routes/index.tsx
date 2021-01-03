import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cover from '../pages/Cover';
import Menu from '../pages/Menu';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Cover} />
    <Route path="/menu" component={Menu} />
  </Switch>
);

export default Routes;
