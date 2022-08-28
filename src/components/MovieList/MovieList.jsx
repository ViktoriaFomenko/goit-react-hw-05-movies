import { Link, useLocation } from 'react-router-dom';
import no_poster from '../../images/no-poster-available.jpg';
import css from '../MovieList/MovieList.module.css';

export const MovieList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, poster_path }) => (
    <li key={id} className={css.movie_item}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        className={css.movie}
      >
        <img
          width="200px"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : no_poster
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </li>
  ));

  return <ul className={css.movie_list}>{elements}</ul>;
};

MovieList.defaultProps = {
  items: [],
};
