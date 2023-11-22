// RoundedArtistsOfTheMonth.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ArtistCard = () => {
  const [token, setToken] = useState();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtistsData = async () => {
      try {
        const body = new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "47e67dc09199485aa94b3a434d3ed8f0", // Replace with your Spotify API client ID
          client_secret: "38f3bd6bd2054cd0ad5445aac8e53e6c", // Replace with your Spotify API client secret
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

        // Use your Spotify API endpoint to fetch artists data
        const artistsResponse = await axios.get(
          "https://api.spotify.com/v1/browse/new-releases",
          {
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
            },
          }
        );

        setArtists(artistsResponse.data.albums.items);
      } catch (error) {
        console.error("Error fetching artists data:", error);
      }
    };

    fetchArtistsData();
  }, []);

  return (
    <div className="flex overflow-x-auto pl-2">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="flex flex-col items-center m-4"
          style={{ minWidth: "7rem" }}
        >
          <div className="relative w-32 h-32 overflow-hidden shadow-lg rounded-full">
            <img
              src={artist.images[0].url}
              alt={`${artist.name} background`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="mt-2 text-center">{artist.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
