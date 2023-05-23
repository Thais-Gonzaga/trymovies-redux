import React, { Component } from 'react';
import Header from '../components/Header';
import getTrandingMovies from '../utils/apiFuncions';
import MovieCard from '../components/MovieCard';

export default class Home extends Component {
  state = {
    movies: [],
    isLoading: true,
  };

  async componentDidMount() {
    this.setState({
      movies: await getTrandingMovies(),
      isLoading: false,
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    if (isLoading) {
      return (<div>Carregando...</div>);
    }
    return (
      <div>
        <Header />
        {movies.map((movie) => <MovieCard key={ movie.id } { ...movie } />)}
      </div>
    );
  }
}
