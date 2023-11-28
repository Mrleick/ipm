import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Welcome from './Pages/WelcomePage.jsx';
import Login from './Pages/LoginPage.jsx';
import Walkthrough from './Pages/WalkthroughPage.jsx';
import Player from './Pages/PlayerPage.jsx';
import Feed from './Pages/FeedPage';
import Trends from './Pages/TrendsPage';
import Playlist from './Pages/PlaylistPage';
import Featured from './Pages/FeaturedPage';
import Categories from './Pages/CategoriesPage';
import Songs from './Pages/SongsPage';
import Artists from './Pages/ArtistsPage';
import Albums from './Pages/AlbumsPage';
import AlbumDetails from './Pages/AlbumDetailsPage';
import TempRouting from './Pages/TempRoutingPage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const AppWithAuthentication = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const storedToken = window.localStorage.getItem('token');
    const hash = window.location.hash;
    window.location.hash = '';

    if (!storedToken && hash) {
      const _token = hash.split('&')[0].split('=')[1];
      window.localStorage.setItem('token', _token);
      setToken(_token);
    } else {
      setToken(storedToken);
    }
    console.log('Token:', storedToken);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App token={token} />}>
        <Route index element={<Welcome />} />
        <Route path="/Login/" element={<Login />} />
        <Route path="/Walkthrough/" element={<Walkthrough />} />
        <Route path="/Player/" element={<Player />} />
        <Route path="/Feed/" element={<Feed />} />
        <Route path="/Trends/" element={<Trends />} />
        <Route path="/Playlist/" element={<Playlist />} />
        <Route path="/Featured/" element={<Featured />} />
        <Route path="/Categories/" element={<Categories />} />
        <Route path="/Songs/" element={<Songs />} />
        <Route path="/Artists/" element={<Artists />} />
        <Route path="/Albums/" element={<Albums />} />
        <Route path="/AlbumDetails/:id" element={<AlbumDetails />} />
        <Route path="/TempRouting/" element={<TempRouting />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppWithAuthentication />
);
