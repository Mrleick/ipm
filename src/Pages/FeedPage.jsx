import tw from "tailwind-styled-components";
import Card from "../components/Feedcard";
import Categories from "../components/Feedcategories";
import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

const Container = tw.section`
  bg-secondary-color
  h-screen
  px-6 pb-8
`;

const FeedPage = () => {
  return (
    <>
      <main className="">
        <Container>
          {" "}
          <Header className="uppercase tracking-wider text-black dark:text-white flex justify-between py-6 px-6 dark:bg-secondary-color" />
          <Heading title="Featured" />
          <Categories />
          <Card />
          <FooterMenu />
        </Container>
      </main>
    </>
  );
};

export default FeedPage;
