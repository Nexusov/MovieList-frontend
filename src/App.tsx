import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loader from './components/loader/Loader';
import Home from './pages/home/Home';

const Profile = lazy(() => import('./pages/profile/Profile'));
const Login = lazy(() => import('./pages/login/Login'));
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
    path: '/login',
    element: <Suspense fallback={<Loader />}><Login /></Suspense>,
  },
  {
    path: '*',
    element: <Suspense fallback={<Loader />}><Page404 /></Suspense>,
  },
]);

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
};

export default App;
