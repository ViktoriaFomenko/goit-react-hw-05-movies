export const ReviewsComponent = ({ items }) => {
  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <p>Author: {author}</p>
      <p>{content}</p>
    </li>
  ));

  return <ul>{elements}</ul>;
};
