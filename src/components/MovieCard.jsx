import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { title, poster_path: poster } = this.props;
    return (
      <div>
        <p>{title}</p>
        <img src={ `https://image.tmdb.org/t/p/w500${poster}` } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({}).isRequired;
