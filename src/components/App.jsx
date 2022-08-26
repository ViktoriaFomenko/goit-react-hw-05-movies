import { Route, Routes } from 'react-router-dom';
import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { NotFoundPage } from 'Pages/NotFoundPage/NotFoundPage';
import { Home } from 'Pages/Home/HomePage';
import { MovieInfo } from 'Pages/MovieInfo/MovieInfo';
import { Movie } from 'Pages/Movie/Movie';

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<MovieInfo />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
};
