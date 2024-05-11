import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Home from './pages/home/Home';

const Profile = lazy(() => import('./pages/profile/Profile'));
const Page404 = lazy(() => import('./pages/404/Page404')); 

const router = createBrowserRouter([
  {
    index: true,
    element: <Suspense fallback={<Loader />}><Home /></Suspense>,
  },
  {
    path: '/profile',
    element: <Suspense fallback={<Loader />}><Profile /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={<Loader />}><Page404 /></Suspense>,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
