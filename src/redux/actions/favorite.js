export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addFavorite(movie) {
  return {
    type: ADD_FAVORITE,
    payload: movie,
  };
}

export function removeFavorite(movies) {
  return {
    type: REMOVE_FAVORITE,
    payload: movies,
  };
}
