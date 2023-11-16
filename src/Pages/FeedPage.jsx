import tw from "tailwind-styled-components";
import Card from "../components/Feedcard";
import Categories from "../components/Feedcategories";
import Backbtn from "../components/Backbtn";

const Container = tw.section`
  bg-secondary-color
  h-screen
  pl-5
  pr-5
`;

const FeedPage = () => {
  return (
    <>
      <Container>
        <Backbtn />
        <h1 className="text-white font-bold">Events Feed</h1>
        <Categories />
        <Card />
      </Container>
    </>
  );
};

export default FeedPage;
