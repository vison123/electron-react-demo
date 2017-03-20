/**
 * Created by vison on 17/3/20.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomePage from './containers/HomePage';


export default (
  <Route path="/" component={HomePage}>
    <IndexRoute component={HomePage} />
  </Route>
);
