import { lazy, Suspense } from 'react';
import Loader from './Components/Loader/Loader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import ThemeProvider from './theme/ThemeProvider';
import LangProvider from './lang/LangProvider';
import { AppReadyProvider } from './Providers/AppReadyProvider';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ContactPage from './pages/ContactPage/ContactPage';

const DELAY: number = 3000;

const lazyWithDelay = <T extends React.ComponentType<object>>(
  importer: () => Promise<{ default: T }>,
) =>
  lazy(() => Promise.all([importer(), new Promise((r) => setTimeout(r, DELAY))]).then(([m]) => m));

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage/ProjectsPage'));
const ErrorPage = lazy(() => import('./pages/ErrorPage/ErrorPage'));
const Layout = lazyWithDelay(() => import('./Components/Layout/Layout'));

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <LangProvider>
          <ThemeProvider>
            <AppReadyProvider>
              <Suspense fallback={<Loader delay={DELAY} />}>
                <Routes>
                  <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/projects/:projectId" element={<ProjectPage />} />
                    <Route path="*" element={<ErrorPage />} />
                  </Route>
                </Routes>
              </Suspense>
            </AppReadyProvider>
          </ThemeProvider>
        </LangProvider>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
