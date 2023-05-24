import React, { Component } from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import { getBySearch, getTrandingMovies } from '../utils/apiFuncions';

export default class Home extends Component {
  state = {
    movies: [],
    isLoading: true,
    search: '',
  };

  async componentDidMount() {
    this.setState({
      movies: await getTrandingMovies(),
      isLoading: false,
    });
  }

  handleInputSearch = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSearch = async () => {
    this.setState({ isLoading: true });
    const { search } = this.state;
    this.setState({
      movies: await getBySearch(search),
      isLoading: false,
    });
  };

  render() {
    const { movies, isLoading, search } = this.state;
    if (isLoading) {
      return (<Loading />);
    }
    return (
      <div>
        <Header
          search={ search }
          handleInputSearch={ this.handleInputSearch }
          handleSearch={ this.handleSearch }
        />
        {movies.map((movie) => <MovieCard key={ movie.id } { ...movie } />)}
      </div>
    );
  }
}
