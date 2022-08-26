import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FetchMovieInfo } from 'APIServise';

export const MovieInfo = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const SingleMovieInfo = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));

        const data = await FetchMovieInfo(id);
        setState(prevState => ({
          ...prevState,
          items: [data],
        }));
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

    SingleMovieInfo();
  }, [id]);

  const { items } = state;

  return (
    <div className="container">
      <ul>
        {items.map(item => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <p>User score:{item.vote_average}</p>
            <h3>Overview</h3>
            <p>{item.overview}</p>
            <h3>Genres</h3>
            <p> {item.genres.map(item => item.name)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
