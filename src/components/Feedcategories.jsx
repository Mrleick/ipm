import tw from "tailwind-styled-components";

//Genre categories
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
  h-3
  w-auto
  text-white
  text-center
  gap-x-2
  flex  
  items-center   
`;

const Genres = () => {
  return (
    <>
      {" "}
      <Container>
        <CatWrapper>Test</CatWrapper>
        <CatWrapper>Test</CatWrapper>
        <CatWrapper>Test</CatWrapper>
      </Container>
    </>
  );
};

export default Genres;
