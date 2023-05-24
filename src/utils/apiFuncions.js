import API_KEY from './apiKey';

export const getTrandingMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
  const movies = await response.json();
  return movies.results;
};

export const getMovieById = async (id) => {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const movie = await response.json();
  return movie;
};

export const getBySearch = async (search) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`);
  const movies = await response.json();
  return movies.results;
};
