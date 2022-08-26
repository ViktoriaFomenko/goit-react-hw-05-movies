import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <Circles color="#42f5b3" height="80" width="80" ariaLabel="circles" />{' '}
    </div>
  );
};
