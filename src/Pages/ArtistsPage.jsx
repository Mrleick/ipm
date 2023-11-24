import Heading from "../components/Heading";
import React, { useState, useEffect } from "react";
import Footer from "../Components/FooterMenu";
import ArtistsOfTheMonth from "../components/ArtistsOfTheMonth";
import ViewAll from "../components/ViewAll";
import ArtistCard from "../components/ArtistCard";
import TopArtistsByCountry from "../components/TopArtistsByCountry";

const ArtistsPage = () => {
  return (
    <div className="dark:text-white dark:bg-secondary-color">
      <Header
        className=""
        buttonClass=""
        showBackButton={true}
        showSearchButton={true}
        isDarkMode={false}
        showPageName={true}
        textColor=""
      />
      <Heading className="pl-4" title="All Artists" />
      <ViewAll text="Artists of the Month" showButton={true} />
      <ArtistsOfTheMonth />
      <ViewAll text="Featured Artists" showButton={true} />
      <ArtistCard />
      <ViewAll text="Top Artists By Country" showButton={false} />
      <TopArtistsByCountry country="DK" />
      <Footer />
    </div>
  );
};

export default ArtistsPage;
