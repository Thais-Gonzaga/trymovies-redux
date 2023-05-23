import API_KEY from './apiKey';

const getTrandingMovies = async () => {
  const response = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`);
  const movies = await response.json();
  return movies.results;
};

export default getTrandingMovies;
