import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loader from './components/loader/Loader';
import Home from './pages/home/Home';
import { useAuthStore } from './store/store';

const Profile = lazy(() => import('./pages/profile/Profile'));
const Login = lazy(() => import('./pages/login/Login'));
const Page404 = lazy(() => import('./pages/404/Page404'));

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const token = useAuthStore((state) => state.token);
  return token ? <Navigate to="/" /> : element;
};

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
    element: <PrivateRoute element={<Suspense fallback={<Loader />}><Login /></Suspense>} />,
  },
  {
    path: '*',
    element: <Suspense fallback={<Loader />}><Page404 /></Suspense>,
  },
]);

const App = () => {
  const loadUser = useAuthStore((state) => state.loadUser);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  );
};

export default App;
