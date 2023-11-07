import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Welcome from "./Pages/WelcomePage.jsx";
import Login from "./Pages/LoginPage.jsx";
import Walkthough from "./Pages/WalkthoughPage.jsx";
import Player from "./Pages/PlayerPage.jsx";
import Feed from "./Pages/FeedPage";
import Trends from "./Pages/TrendsPage";
import Playlist from "./Pages/PlaylistPage";
import Featured from "./Pages/FeaturedPage";
import Catagories from "./Pages/CatagoriesPage";
import Songs from "./Pages/SongsPage";
import Artists from "./Pages/ArtistsPage";
import Albums from "./Pages/AlbumsPage";
import AlbumDetails from "./Pages/AlbumDetailsPage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Welcome />} />
      <Route path="/Login/" element={<Login />} />
      <Route path="/Walkthough/" element={<Walkthough />} />
      <Route path="/Player/" element={<Player />} />
      <Route path="/Feed/" element={<Feed />} />
      <Route path="/Trends/" element={<Trends />} />
      <Route path="/Playlist/" element={<Playlist />} />
      <Route path="/Featured/" element={<Featured />} />
      <Route path="/Catagories/" element={<Catagories />} />
      <Route path="/Songs/" element={<Songs />} />
      <Route path="/Artists/" element={<Artists />} />
      <Route path="/Albums/" element={<Albums />} />
      <Route path="/AlbumDetails/" element={<AlbumDetails />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
