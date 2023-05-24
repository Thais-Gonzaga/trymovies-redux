import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovieById } from '../utils/apiFuncions';
import Loading from '../components/Loading';

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
      <div>
        {isLoading ? <Loading /> : (
          <div>
            <h1>{title}</h1>
            <img src={ `https://image.tmdb.org/t/p/original/${background}` } alt={ title } />
            <p>{overview}</p>
          </div>
        )}
      </div>
    );
  }
}

MovieDetail.propTypes = PropTypes.shape({}).isRequired;
