import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { FetchMovieInfo } from 'APIServise';

const MovieInfo = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(from);
  const location = useLocation();
  const from = location.state?.from || '/movies';

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
          items: [...prevState.items, data],
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
      <button onClick={goBack}>Go back</button>
      <ul>
        {items.map(item => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title}
            />
            <h2>{item.title}</h2>
            <p>User score: {item.vote_average}</p>
            <h3>Overview</h3>
            <p>{item.overview}</p>
            <h3>Genres</h3>
            <p> {item.genres.map(item => item.name)}</p>
          </li>
        ))}
      </ul>
      <Link state={{ from }} to={`/movies/${id}/cast`}>
        Cast
      </Link>
      <Outlet />
      {/* <Link to={`/movies/${id}/reviews`}>Reviews</Link> */}
    </div>
  );
};
export default MovieInfo;
