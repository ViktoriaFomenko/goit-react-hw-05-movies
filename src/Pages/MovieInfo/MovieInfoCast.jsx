import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCast } from 'APIServise';
import no_image from '../../images/No_Image_Available.jpg';
import css from '../MovieInfo/MovieInfoCast.module.css';

const MovieInfoCast = () => {
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

        const data = await MovieCast(id);
        console.log(data);
        setState(prevState => ({
          ...prevState,
          items: data.cast,
        }));
        console.log(data.cast);
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
  }, [setState, id]);

  const { items } = state;

  return (
    <div className="container">
      <ul className={css.list}>
        {items.map(item => (
          <li className={css.item} key={id}>
            <img
              className={css.img}
              width="150px"
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : no_image
              }
              alt={item.name}
            />
            <p className={css.name}>{item.name}</p>
            <p className={css.character}>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieInfoCast;
