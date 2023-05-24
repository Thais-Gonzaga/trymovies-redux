import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default class MovieCard extends Component {
  state = {
    favorite: false,
  };

  handleFavorite = () => {
    const { title, poster_path: poster, id } = this.props;
    const { favorite } = this.state;
    const moviesLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieToSave = { title, id, poster };
    if (!favorite) {
      localStorage
        .setItem('favorites', JSON.stringify([...moviesLocalStorage, movieToSave]));
      this.setState({
        favorite: true,
      });
      return;
    }
    const newMoviesToSave = moviesLocalStorage.filter((movie) => movie.id !== id);
    localStorage
      .setItem('favorites', JSON.stringify(newMoviesToSave));
    this.setState({
      favorite: false,
    });
  };

  render() {
    const { title, poster_path: poster, id } = this.props;
    const { favorite } = this.state;
    return (
      <>
        <Link to={ `/movie/${id}` }>
          <div>
            <p>{title}</p>
            <img
              src={ `https://image.tmdb.org/t/p/w500${poster}` }
              alt={ title }
            />
          </div>
        </Link>
        <input
          type="checkbox"
          name="favorite"
          checked={ favorite }
          onChange={ this.handleFavorite }
        />
      </>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({}).isRequired;
