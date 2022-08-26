import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        value={state.query}
        onChange={handleChange}
        placeholder="Search movie"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};
