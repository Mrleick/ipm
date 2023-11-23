import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";

const Container = tw.section`
  flex
  flex-row
  gap-x-5
  overflow-x-hidden
  overflow-y-hidden
  whitespace-no-wrap
  mb-5
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
  whitespace-no-wrap
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
        <CatWrapper key={index}>#{genre}</CatWrapper>
      ))}
    </Container>
  );
};

export default Genres;
