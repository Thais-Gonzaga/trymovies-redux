import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export default class MovieCard extends Component {
  state = {
    favorite: false,
  };

  componentDidMount() {
    const { id } = this.props;
    const moviesLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({
      favorite: moviesLocalStorage.some((movie) => movie.id === id),
    });
  }

  handleFavorite = () => {
    const { title, poster_path: poster, id, handleReload } = this.props;
    const { favorite } = this.state;
    const moviesLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const movieToSave = { title, id, poster_path: poster };
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
    handleReload();
    this.setState({
      favorite: false,
    });
  };

  render() {
    const { title, poster_path: poster, id } = this.props;
    const { favorite } = this.state;
    return (
      <div
        className="max-w-sm rounded-lg scale-90 relative
        shadow-md shadow-zinc-950
      hover:scale-100 ease-in-out duration-[250ms]"
      >
        <Link to={ `/movie/${id}` }>
          <div
            className="absolute w-full rounded-lg h-full bg-gradient-to-b
           from-transparent to-black"
          />
          <div>
            <p className="absolute w-[70%] font-bold text-2xl left-4 bottom-4">{title}</p>
            <img
              className="rounded-lg"
              src={ `https://image.tmdb.org/t/p/w500${poster}` }
              alt={ title }
            />
          </div>
        </Link>
        <label>
          {favorite
            ? <AiFillHeart className="text-red-600 text-3xl absolute bottom-4 right-4 " />
            : (
              <AiOutlineHeart
                className="text-zinc-300
            text-3xl absolute bottom-4 right-4 "
              />
            )}
          <input
            className="hidden"
            type="checkbox"
            name="favorite"
            checked={ favorite }
            onChange={ this.handleFavorite }
          />
        </label>
      </div>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({}).isRequired;
