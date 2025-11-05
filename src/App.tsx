import { lazy, Suspense } from 'react';
import Loader from './Components/Loader/Loader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

const DELAY: number = 3000;

const lazyWithDelay = <T extends React.ComponentType<any>>(
  importer: () => Promise<{ default: T }>,
  delay = 3000,
) =>
  lazy(() => Promise.all([importer(), new Promise((r) => setTimeout(r, delay))]).then(([m]) => m));

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Layout = lazyWithDelay(() => import('./Components/Layout/Layout'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader delay={DELAY} />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
