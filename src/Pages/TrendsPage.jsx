import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu"
import Heading from "../components/Heading";

const TrendsPage = () => {
  return (
    <>
      <Header />
      <Heading title="Latest Trends" level="1" className="text-3xl px-5 py-0"/>
      <FooterMenu />
    </>
  );
};

export default TrendsPage;
