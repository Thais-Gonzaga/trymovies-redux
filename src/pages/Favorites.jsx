import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

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
    return (
      <div className="bg-zinc-800 w-screen h-screen text-zinc-300 ps-10 pe-10">
        <div className="flex flex-wrap gap-4 justify-center w-4/5 m-auto">
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
