import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { SearchMovie } from 'APIServise';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Movie = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    const FetchMovies = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));

        const data = await SearchMovie(query);
        setState(prevState => ({
          ...prevState,
          items: data.results,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (query) {
      FetchMovies();
    }
  }, [query]);

  const changeSearch = ({ query }) => {
    setSearchParams({ query });
  };

  const { items, loading, error } = state;

  return (
    <div>
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {loading && <Loader />}
      {error && <p>...Movies load failed</p>}
    </div>
  );
};

export default Movie;
