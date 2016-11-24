import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SimpleForm from './components/simple-form';


export default (
  <Route path="/" component = {App}>
    <IndexRoute component={SimpleForm} />

  </Route>

);

