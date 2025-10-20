import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layout/HomeLayout';
import Home from '../Pages/Home';
import CategoryNews from '../Pages/CategoryNews';
import About from '../Components/About';
import Career from '../Components/Career';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import AuthLayout from '../Layout/AuthLayout';
import NewsDetails from '../Pages/NewsDetails';
import PrivateRoute from '../Provider/PrivateRoute';
import Loading from '../Pages/Loading';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: '/',
        Component: Home,
      },

      {
        path: '/category/:id',
        Component: CategoryNews,
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Loading></Loading>,
      },

      {
        path: '/about',
        Component: About,
      },

      {
        path: '/career',
        Component: Career,
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },

  {
    path: 'news-details/:id',
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>,
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
  },

  {
    path: '*',
    element: <h2>Error404</h2>,
  },
]);

export default router;
