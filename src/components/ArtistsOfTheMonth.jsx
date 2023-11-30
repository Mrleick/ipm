import React, { useState, useEffect } from "react";
import axios from "axios";
import fetchFromApi from "../lib/fetchFromApi";
import { Link } from "react-router-dom";

const ArtistsOfTheMonth = () => {
  const [token, setToken] = useState();
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/browse/new-releases`
        );
        if (data) {
          setArtists(data.albums.items);
        }
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

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

          <Link to={`/albumDetails/${artist.id}`} key={artist.id}>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black opacity-75">
              <p className="text-white pt-16 pl-36">Song of the Month</p>
              <h3 className="text-primarycolor text-lg font-bold pl-20">
                {artist.name}
              </h3>
            </div>{" "}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ArtistsOfTheMonth;
