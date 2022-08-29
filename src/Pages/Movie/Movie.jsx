import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MovieSearchForm } from 'components/MovieSearchForm/MovieSearchForm';
import { SearchMovie } from 'APIServise';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        if (data.total_results === 0) {
          setState({ error: toast.info(`No results for ${query}!`) });
        }
        setState(prevState => ({
          ...prevState,
          items: data.results,
        }));
      } catch (error) {
        setState(toast.error('Something went wrong...'));
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

  const { items, loading } = state;

  return (
    <div>
      <ToastContainer autoClose={2000} position="top-center" closeOnClick />
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MovieList items={items} />}
      {loading && <Loader />}
    </div>
  );
};

export default Movie;
