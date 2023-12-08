// Feedcard.js
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Feedgroup from "../components/Feedgroup";
import fetchFromApi from "../lib/fetchFromApi";

const Container = tw.section`
  mb-5
`;

const CardWrapper = tw.section`
  w-full
  h-auto
  rounded-3xl
  flex
  flex-col
  bg-additional-color
`;

const FavContainer = tw.div`
  flex
  mb-2 mt-5
  text-primarycolor
`;

const Feedcard = ({ showId }) => {
  const [token, setToken] = useState();
  const [showData, setShowData] = useState({ images: [], name: "" });

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/shows/${showId}`
        );
        if (data) {
          setShowData({ images: data.images || [], name: data.name || "" });
        }
      } catch (error) {
        console.error("Error fetching show:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  const imageUrl = showData.images.length > 0 ? showData.images[0]?.url : "";

  return (
    <Container className="">
      <CardWrapper>
        <img
          src={imageUrl}
          alt="Card Image"
          className="rounded-t-3xl h-auto w-full"
        />
        <section className="ml-5">
          <FavContainer>
            <p>#Spotify</p>,<p>#Music</p>,<p>#Grammy2020</p>
          </FavContainer>
          <Feedgroup />
          <div className="font-bold text-white text-2xl mb-5">
            <p>{showData.name}</p>
          </div>
        </section>
      </CardWrapper>
    </Container>
  );
};

export default Feedcard;
