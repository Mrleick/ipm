import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import fetchFromApi from "../lib/fetchFromApi";

const ArtistCard = () => {
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
        console.error("Error fetching artists data:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <div className="flex overflow-x-auto">
      {artists
        .slice()
        .reverse()
        .map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col items-center m-4"
            style={{ minWidth: "5rem" }}
          >
            <div className="relative w-24 h-24 overflow-hidden shadow-lg rounded-full">
              <Link to={`/albumDetails/${artist.id}`} key={artist.id}>
                <img
                  src={artist.images[0].url}
                  alt={`${artist.name} background`}
                  className="w-full h-full object-cover rounded-full"
                />{" "}
              </Link>
            </div>
            <p className="mt-2 text-center">{artist.name}</p>
          </div>
        ))}
    </div>
  );
};

export default ArtistCard;
