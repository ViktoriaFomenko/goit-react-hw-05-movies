import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import { Container } from './Container/Container';
import { Navigation } from './Navigation/Navigation';

const NotFoundPage = lazy(() => import('Pages/NotFoundPage/NotFoundPage'));
const Home = lazy(() => import('Pages/Home/HomePage'));
const MovieInfo = lazy(() => import('Pages/MovieInfo/MovieInfo'));
const MovieInfoCast = lazy(() => import('Pages/MovieInfo/MovieInfoCast'));
const Movie = lazy(() => import('Pages/Movie/Movie'));

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movies/:id" element={<MovieInfo />}>
            <Route path="cast" element={<MovieInfoCast />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};
