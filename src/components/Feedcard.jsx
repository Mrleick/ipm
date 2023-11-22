import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import Feedgroup from "../components/Feedgroup";

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
////////Get Acces/////////
const FeedPage = () => {
  const [token, setToken] = useState();
  const [showImages, setShowImages] = useState([]);

  useEffect(() => {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "461ed7ac403943928383815a4d8878db",
      client_secret: "70a34beaff2e412ab39d243b2821f9a2",
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

  //////////////////// Shows //////////////////
  useEffect(() => {
    if (token) {
      fetch("https://api.spotify.com/v1/shows/38bS44xjbVVZ3No3ByF1dJ", {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setShowImages(data.images || []);
        })
        .catch((error) => {
          console.error("Error fetching show:", error);
        });
    }
  }, [token]);

  const imageUrl = showImages.length > 0 ? showImages[0]?.url : "";

  return (
    <CardWrapper>
      <img
        src={imageUrl}
        alt="Card Image"
        className="rounded-3xl h-auto w-full"
      />
      <section className="ml-5">
        <FavContainer>
          <p>#Test</p>,<p>#Test</p>,<p>#Test</p>
        </FavContainer>
        <Feedgroup />
        <div className="font-bold text-white text-2xl mb-5">
          <p>Coachella 2019 Day Three Highlights</p>
        </div>
      </section>
    </CardWrapper>
  );
};

export default FeedPage;
