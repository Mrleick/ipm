import tw from "tailwind-styled-components";

//Genre categories
const CatFlex = tw.section`
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
  transition duration-300
  hover:bg-cat
  hover:text-white
  gap-x-2
  mt-5
  flex  // Make it a flex container
  items-center  // Center the content vertically
  justify-center  // Center the content horizontally
`;

const Genres = () => {
  return (
    <>
      {" "}
      <CatFlex>
        <CatWrapper>Test</CatWrapper>
        <CatWrapper>Test</CatWrapper>
        <CatWrapper>Test</CatWrapper>
      </CatFlex>
    </>
  );
};

export default Genres;
