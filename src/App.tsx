import { Suspense, lazy, useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Loader from './components/loader/Loader';
import Home from './pages/home/Home';
import { useAuthStore } from './store/store';

const Profile = lazy(() => import('./pages/profile/Profile'));
const Login = lazy(() => import('./pages/login/Login'));
const AddMovie = lazy(() => import('./pages/add_movie/AddMovie'));
const Page404 = lazy(() => import('./pages/404/Page404'));

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const token = useAuthStore((state) => state.token);
  return token ? element : <Navigate to="/login" />;
};

const GuestRoute = ({ element }: { element: JSX.Element }) => {
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
    element: <ProtectedRoute element={<Suspense fallback={<Loader />}><Profile /></Suspense>} />,
  },
  {
    path: '/login',
    element: <GuestRoute element={<Suspense fallback={<Loader />}><Login /></Suspense>} />,
  },
  {
    path: '/add',
    element: <ProtectedRoute element={<Suspense fallback={<Loader />}><AddMovie /></Suspense>} />,
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
