import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';

export default class Favorites extends Component {
  state = {
    favoriteMovies: [],
  };

  componentDidMount() {
    const localStorageFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({
      favoriteMovies: localStorageFavorites,
    });
  }

  handleReload = () => {
    const localStorageFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({
      favoriteMovies: localStorageFavorites,
    });
  };

  render() {
    const { favoriteMovies } = this.state;
    const { location: { pathname } } = this.props;

    return (
      <div className="bg-zinc-800 text-zinc-300 ps-10 pe-10">
        <Header pathname={ pathname } />
        <div className="flex flex-wrap gap-4 justify-center w-full m-auto">
          {favoriteMovies
            .map((movie) => (
              <MovieCard
                handleReload={ this.handleReload }
                key={ movie.id }
                { ...movie }
              />))}
        </div>
      </div>
    );
  }
}

Favorites.propTypes = PropTypes.shape({}).isRequired;
