import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Login from './pages/Login';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Favorites from './pages/Favorites';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={ Home } />
          <Route path="/movie/:id" component={ MovieDetail } />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    );
  }
}
