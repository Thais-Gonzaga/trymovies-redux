import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { location: { pathname } } = this.props;
    if (isLoading) {
      return (<Loading />);
    }
    return (
      <div className="bg-zinc-800 mb-8 w-full h-full text-zinc-300 ps-10 pe-10">
        <Header
          haveSearch
          pathname={ pathname }
          search={ search }
          handleInputSearch={ this.handleInputSearch }
          handleSearch={ this.handleSearch }
        />
        <div className="flex flex-wrap gap-4 justify-center w-full m-auto">
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

Home.propTypes = PropTypes.shape({}).isRequired;
