// TopArtistsByCountry.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const TopArtistsByCountry = ({ country }) => {
  const [token, setToken] = useState();
  const [topPlaylists, setTopPlaylists] = useState([]);

  useEffect(() => {
    const fetchTopPlaylists = async () => {
      try {
        const body = new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "47e67dc09199485aa94b3a434d3ed8f0",
          client_secret: "38f3bd6bd2054cd0ad5445aac8e53e6c",
        });

        const tokenResponse = await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
            body: body.toString(),
          }
        );

        const tokenData = await tokenResponse.json();
        setToken(tokenData.access_token);

        const topPlaylistsResponse = await axios.get(
          `https://api.spotify.com/v1/browse/categories/toplists/playlists?country=${country}`,
          {
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
            },
          }
        );

        setTopPlaylists(topPlaylistsResponse.data.playlists.items);
      } catch (error) {
        console.error("Error fetching top playlists:", error);
      }
    };

    fetchTopPlaylists();
  }, [country]);

  return (
    <div className="flex flex-wrap justify-center gap-4 pb-28">
      {topPlaylists
        .slice()
        .reverse()
        .map((playlist) => (
          <div
            key={playlist.id}
            className="relative w-40 h-40 overflow-hidden m-0 shadow-lg rounded-lg dark:shadow-gray-700 shadow-slate-700"
          >
            <img
              src={playlist.images[0].url}
              alt={`${playlist.name} background`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
    </div>
  );
};

export default TopArtistsByCountry;
