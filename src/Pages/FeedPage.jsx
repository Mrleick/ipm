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
          <header>
            <Header />
          </header>
          <Heading title="Featured" />
          <Categories />
          <section className="VerticalMovieListContainer">
            <Card />
          </section>
          <FooterMenu />
        </Container>
      </main>
    </>
  );
};

export default FeedPage;
