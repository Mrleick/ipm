import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";

const Container = tw.section`
  flex
  flex-row
  gap-x-5
  overflow-x-scroll
  overflow-y-hidden
  mb-5
  whitespace-nowrap
`;

const CatWrapper = tw.button`
  bg-primarycolor
  rounded-full
  p-4
  h-12
  text-white
  text-center
  flex
  items-center
  gap-x-2
  whitespace-nowrap
`;

const Genres = () => {
  const [token, setToken] = useState(null);
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
    });

    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.access_token))
      .catch((error) => {
        console.error("Error fetching token:", error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      fetch(
        "https://api.spotify.com/v1/recommendations/available-genre-seeds",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setGenres(data.genres || []);
        })
        .catch((error) => {
          console.error("Error fetching genres:", error);
        });
    }
  }, [token]);

  return (
    <Container>
      {genres.map((genre, index) => (
        <Link to={`/trends/${genre}`} key={index}>
          <CatWrapper key={index}>#{genre}</CatWrapper>
        </Link>
      ))}
    </Container>
  );
};

export default Genres;
