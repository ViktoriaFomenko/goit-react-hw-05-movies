import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCast } from 'APIServise';

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
  }, [setState, id]);

  const { items } = state;

  return (
    <div className="container">
      <ul>
        {items.map(item => (
          <li key={id}>
            <img src={item.profile_path} alt={item.name} />
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieInfoCast;
