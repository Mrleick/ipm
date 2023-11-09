import { Link } from "react-router-dom";
import musiclogo from "../assets/musiclogo.png";
import tw from "tailwind-styled-components";
import Heading from "./Heading";

const Logo = tw.img`
  mx-auto
  mb-5
`;

const Container = tw.div`
  bg-secondary
  h-screen
  flex
  flex-col
  items-center
  justify-center
`;

const WelcomePage = () => {
  return (
    <Container>
      <Logo src={musiclogo} alt="Logo" />
      <Heading as="h1" color="white" title="iPlayMusic" size={32} />
    </Container>
  );
};

export default WelcomePage;
