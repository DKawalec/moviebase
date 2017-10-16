import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './screens/app';
import HomePage from './screens/home/index';
import MoviePage from './screens/movie/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/movie/:id" component={MoviePage} />
  </Route>
);
