// Feedcard.js
import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Feedgroup from "../components/Feedgroup";

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
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID,
      client_secret: import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET,
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
      fetch(`https://api.spotify.com/v1/shows/${showId}`, {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setShowData({ images: data.images || [], name: data.name || "" });
        })
        .catch((error) => {
          console.error("Error fetching show:", error);
        });
    }
  }, [token, showId]);

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
            <p>#Test</p>,<p>#Test</p>,<p>#Test</p>
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
