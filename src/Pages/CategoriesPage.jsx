import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";

const CatagoriesPage = () => {
  return (
    <>
      <h1>Catagories</h1>
      <Link to="/Songs">Songs</Link>
      <main>
        <Accordion
          question="hello"
          answer="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </main>
    </>
  );
};

export default CatagoriesPage;
