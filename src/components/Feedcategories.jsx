import React from "react";
import tw from "tailwind-styled-components";

const Container = tw.section`
flex
flex-row
gap-x-5
overflow-x-auto
whitespace-no-wrap
mb-5
`;

const CatWrapper = tw.button`
  bg-pink-500
  rounded-full
  p-4
  h-12
  text-white
  text-center
  flex
  items-center
  gap-x-2
`;

const Genres = () => {
  const genres = ["Test", "Test", "Test"];

  return (
    <Container>
      {genres.map((genre, index) => (
        <CatWrapper key={index}>{genre}</CatWrapper>
      ))}
    </Container>
  );
};

export default Genres;
