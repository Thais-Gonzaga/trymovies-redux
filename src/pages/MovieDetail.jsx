import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieById } from '../utils/apiFuncions';
import Loading from '../components/Loading';
import Header from '../components/Header';
//
export default class MovieDetail extends Component {
  state = {
    movie: {},
    isLoading: true,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      movie: await getMovieById(id),
      isLoading: false,
    });
  }

  render() {
    const { isLoading,
      movie: { backdrop_path: background, overview, title } } = this.state;
    return (
      <div className="text-zinc-300">
        {isLoading ? <Loading /> : (
          <>
            <Header />
            <div className="relative w-[90%] rounded-lg m-auto shadow-lg shadow-black">
              <div
                className="absolute w-full rounded-lg h-full bg-gradient-to-b
           from-transparent to-black"
              />
              <div
                className="absolute w-full rounded-lg h-full bg-gradient-to-b
           from-black/70 to-transparent"
              />
              <h1 className="absolute text-3xl font-bold top-4 left-4">{title}</h1>
              <img
                className="h-full w-full rounded-lg"
                src={ `https://image.tmdb.org/t/p/original/${background}` }
                alt={ title }
              />
              <p className="absolute w-4/5 bottom-4 left-4">{overview}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}

MovieDetail.propTypes = PropTypes.shape({}).isRequired;
