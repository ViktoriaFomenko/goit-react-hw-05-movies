import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import css from '../MovieSearchForm/MovieSearchForm.module.css';

export const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    query: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    setState({
      query: '',
    });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        name="query"
        value={state.query}
        onChange={handleChange}
        placeholder="Search movie"
        required
      />
      <button className={css.btn} type="submit">
        <FiSearch size="12px" />
      </button>
    </form>
  );
};
