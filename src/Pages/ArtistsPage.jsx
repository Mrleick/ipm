import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/FooterMenu";
import ArtistsOfTheMonth from "../components/ArtistsOfTheMonth";
import ViewAll from "../components/ViewAll";
import ArtistCard from "../components/ArtistCard";

const ArtistsPage = () => {
  return (
    <div>
      <Header className="uppercase tracking-wider text-black dark:text-white flex justify-between py-4 px-4 dark:bg-secondary-color" />

      <h1 className="pl-4">Artists Page</h1>
      <ViewAll text="Artists of the Month" />
      <ArtistsOfTheMonth />
      <ViewAll text="Featured Artists" />
      <ArtistCard />
      <ViewAll text="Featured Artists" />
      <ViewAll text="Featured Artists" />
      <ViewAll text="Featured Artists" />
      <ViewAll text="Featured Artists" />
      <ViewAll text="Featured Artists" />
      <ViewAll text="Featured Artists" />
      <Footer />
    </div>
  );
};

export default ArtistsPage;
