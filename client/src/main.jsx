import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Profile from './pages/Profile';
import Decks from './pages/Decks';
import NotFound from './pages/NotFound';
import Search from './pages/Search.jsx';
import Landing from './pages/LandingPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />
      }, {
        path: '/decks',
        element: <Decks />
      }, {
        path: '/search',
        element: <Search />
      }, {
        path: '/profile',
        element: <Profile />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
