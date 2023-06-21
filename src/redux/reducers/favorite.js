import { ADD_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite';

const initialState = {
  movies: [],
};

export default function favorites(state = initialState, { type, payload }) {
  switch (type) {
  case ADD_FAVORITE:
    return {
      movies: [...state.movies, payload],
    };
  case REMOVE_FAVORITE:
    return {
      movies: payload,
    };
  default:
    return state;
  }
}
