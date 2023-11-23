import React, { useState, useEffect } from "react";
import axios from "axios";

const ArtistsOfTheMonth = () => {
  const [token, setToken] = useState();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "47e67dc09199485aa94b3a434d3ed8f0",
      client_secret: "38f3bd6bd2054cd0ad5445aac8e53e6c",
    });
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.access_token));
  }, []);

  useEffect(() => {
    if (token) {
      axios
        .get("https://api.spotify.com/v1/browse/new-releases", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => setArtists(res.data.albums.items))
        .catch((error) => console.error("Error fetching artists:", error));
    }
  }, [token]);

  return (
    <div className="flex overflow-x-auto ">
      {artists.map((artist) => (
        <div
          key={artist.id}
          className="relative w-64 h-48 overflow-hidden m-4 shadow-lg rounded-lg flex-shrink-0 "
          style={{ minWidth: "20rem" }}
        >
          <img
            src={artist.images[0].url}
            alt={`${artist.name} background`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-75">
            <p className="text-white pt-16 pl-36">Song of the Month</p>
            <h3 className="text-primarycolor text-lg font-bold pl-20">
              {artist.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistsOfTheMonth;
