import css from '../Reviews/ReviewsComponent.module.css';

export const ReviewsComponent = ({ items }) => {
  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <p className={css.author}>Author: {author}</p>
      <p className={css.content}> {content}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};
