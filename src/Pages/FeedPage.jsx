import tw from "tailwind-styled-components";
import Card from "../components/Feedcard";
import Categories from "../components/Feedcategories";
import Backbtn from "../components/Backbtn";
import Heading from "../components/Heading";

const Container = tw.section`
  bg-secondary-color
  h-screen
  px-6 pb-8
`;

const FeedPage = () => {
  return (
    <>
      <main>
        <Container>
          <Backbtn />
          <Heading title="Featured" />
          <Categories />
          <Card />
        </Container>
      </main>
    </>
  );
};

export default FeedPage;
