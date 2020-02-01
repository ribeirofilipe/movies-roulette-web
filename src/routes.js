import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Movie from './pages/Movie';
import PopularMovies from './pages/PopularMovies';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movie" component={Movie} />
        <Route path="/" component={PopularMovies} />
      </Switch>
    </BrowserRouter>
  );
}