export const TMDB_CONFIG = {
  API_KEY: '0f7bee76a4f37b75b4b12aa182b319b8',
  BASE_URL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });
  if (response.ok) {
    throw new Error('ERROR WHILE FETCHING DATA');
  }

  const data = await response.json();

  return data.results;
};
// /discover/movie
