import { useState, useEffect } from 'react';

import { FetchTrending } from 'APIServise';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import css from '../Home/HomePage.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const Trending = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const data = await FetchTrending();

        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...data.results],
          };
        });
      } catch (error) {
        setState(toast.error('Something went wrong...'));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    Trending();
  }, []);

  const { items, loading } = state;

  return (
    <div>
      <ToastContainer autoClose={2000} position="top-center" closeOnClick />
      <h2 className={css.title}>Top-20 today</h2>
      {items.length > 0 && <MovieList items={items} />}
      {loading && <Loader />}
    </div>
  );
};
export default Home;
