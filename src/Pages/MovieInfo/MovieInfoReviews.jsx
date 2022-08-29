import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from 'APIServise';
import { ReviewsComponent } from '../../components/Reviews/ReviewsComponent';
import css from '../MovieInfo/MovieInfoReviews.module.css';

const MovieInfoReviews = () => {
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

        const data = await MovieReviews(id);
        console.log(data);
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
  const reviews =
    items.length > 0 ? (
      <ReviewsComponent items={items} />
    ) : (
      <p className={css.no_reviews_message}>
        We don`t have any reviews for this movie :(
      </p>
    );

  return <div className="container">{reviews}</div>;
};

export default MovieInfoReviews;
