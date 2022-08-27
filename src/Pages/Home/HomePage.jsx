import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

import { FetchTrending } from 'APIServise';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';

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
        setState(prevState => ({
          ...prevState,
          error,
        }));
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

  const { items, loading, error } = state;

  //   const elements = items.map(({ id, title }) => (
  //     <li key={id}>
  //       <Link to={`/movies/${id}`}>{title}</Link>
  //     </li>
  //   ));

  return (
    <div>
      <h2>Top-20 today</h2>
      {items.length > 0 && <MovieList items={items} />}
      {loading && <Loader />}
      {error && <p>...Movies load failed</p>}
    </div>
  );
};
export default Home;
