import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import tw from "tailwind-styled-components";
import fetchFromApi from "../lib/fetchFromApi";
const Container = tw.section`
  flex
  flex-row
  gap-x-5
  overflow-x-scroll
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
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/recommendations/available-genre-seeds`
        );
        if (data) {
          setGenres(data.genres || []);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

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
