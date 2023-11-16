import tw from "tailwind-styled-components";
import testimg from "../assets/Testimg.png";
import Feedgroup from "../components/Feedgroup";

const CardWrapper = tw.section`
  w-full
  h-auto
  rounded-3xl
  flex
  flex-col
  bg-additional-color
`;

const FavContainer = tw.div`
  flex     
  mb-2 mt-5
  text-primarycolor
`;

const Card = () => {
  return (
    <CardWrapper>
      <img src={testimg} alt="Card Image" className="" />
      <section className="ml-5">
        <FavContainer>
          <p>#Test</p>,<p>#Test</p>,<p>#Test</p>
        </FavContainer>
        <Feedgroup />
        <div className="font-bold text-white text-2xl mb-5">
          <p>Coachella 2019 Day Three Highlights</p>
        </div>
      </section>
    </CardWrapper>
  );
};

export default Card;
