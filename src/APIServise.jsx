import axios from 'axios';

const KEY = '81f57ce8a5863d84fdab7c29ba0c37c2';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function FetchTrending() {
  const URL = `${BASE_URL}/trending/movie/day?api_key=${KEY}&language=en-US&include_adult=false`;
  const { data } = await axios.get(URL);
  return data;
}

export async function FetchMovieInfo(id) {
  const URL = `${BASE_URL}/movie/${id}?api_key=${KEY}&language=en-US&include_adult=false`;
  const { data } = await axios.get(URL);
  return data;
}

export async function SearchMovie(query) {
  const URL = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&include_adult=false`;

  const { data } = await axios.get(URL);
  return data;
}
