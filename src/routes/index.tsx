import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cover from '../pages/Cover';
import Menu from '../pages/Menu';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Cover} />
      <Route path="/menu" component={Menu} />
    </Switch>
  );
}
