import { NavLink } from 'react-router-dom';
import { items } from './items';
import css from './Navigation.module.css';

const getClassName = ({ isActive }) => {
  const className = isActive ? `${css.link} ${css.active}` : css.link;
  return className;
};
export const Navigation = () => {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <div className={css.container}>
      <ul className={css.navigation_list}>{elements}</ul>
    </div>
  );
};
