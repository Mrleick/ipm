// FeedPage.js
import React from "react";
import tw from "tailwind-styled-components";
import Feedcard from "../components/Feedcard";
import Genres from "../components/Feedcategories";
import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

const Container = tw.section`
  bg-white
  h-full
  px-6 pb-8
`;

const FeedPage = () => {
  return (
    <>
      <main className="">

        <Container className="dark:bg-secondary-color">
          {" "}
          <Header
            className=""
            buttonClass=""
            showBackButton={true}
            showSearchButton={true}
            isDarkMode={false}
            showPageName={true}
            textColor=""
          />

          <Heading title="Featured" />
          <Genres />
          <section className="VerticalMovieListContainer">
            <Feedcard showId="38bS44xjbVVZ3No3ByF1dJ" />
            <Feedcard showId="5CfCWKI5pZ28U0uOzXkDHe" />
            <Feedcard showId="5as3aKmN2k11yfDDDSrvaZ" />
          </section>
          <FooterMenu />
        </Container>
      </main>
    </>
  );
};

export default FeedPage;
