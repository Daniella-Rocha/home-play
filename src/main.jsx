import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import DefaultPage from './DefaultPage';

import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from '../src/routes/Welcome/Welcome';
import Home from '../src/routes/Home/Home';
import SignIn from './routes/SignIn/SignIn';
import SignUp from './routes/SignUp/SignUp';
import Movie from './routes/Movie/Movie';
import AllGenres from './routes/AllGenres/AllGenres';
import Profile from './routes/Profile/Profile';

const router = createBrowserRouter([
  {
    element: <DefaultPage />,
    children: [
      {
        element: <Welcome />,
        path: '/'
      },
      {
        element: <Home />,
        path: '/home'
      },
      {
        element: <SignIn />,
        path: '/signin'
      },
      {
        element: <SignUp />,
        path: '/signup'
      },
      {
        element: <Movie/>,
        path: '/movie/:id'
      },
      {
        element: <AllGenres/>,
        path: '/all-genres'
      },
      {
        element: <Profile/>,
        path: '/profile'
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}>
        <DefaultPage />
      </RouterProvider>
  </React.StrictMode>,
)
