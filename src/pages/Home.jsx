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

  handleReload = () => {};

  render() {
    const { movies, isLoading, search } = this.state;
    if (isLoading) {
      return (<Loading />);
    }
    return (
      <div className="bg-zinc-800 w-full h-full text-zinc-300 ps-10 pe-10">
        <Header
          search={ search }
          handleInputSearch={ this.handleInputSearch }
          handleSearch={ this.handleSearch }
        />
        <div className="flex flex-wrap gap-4 justify-center w-4/5 m-auto">
          {movies
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
