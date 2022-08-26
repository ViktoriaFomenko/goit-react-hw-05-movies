import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>This page not found :(</h2>
      <Link to="/">To Home page</Link>
    </div>
  );
};
