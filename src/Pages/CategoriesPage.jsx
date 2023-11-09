import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Heading from "../components/Heading";

const placeholders = [
  { title: "Blue Page", link: "linktopage1" },
  { title: "Green Page", link: "linktopage2" },
  { title: "Red Page", link: "linktopage3" },
];

const CatagoriesPage = () => {
  return (
    <>
      <main className="px-6">
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12"
          title="Categories"
        />
        <section className="flex flex-col gap-6">
          <Accordion
            heading="hello"
            content={placeholders.map((placeholder, index) => (
              <div key={index}>
                <Link to={placeholder.link}>{placeholder.title}</Link>
              </div>
            ))}
          />
          <Accordion
            heading="hello"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <Accordion
            heading="hello"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
        </section>
      </main>
    </>
  );
};

export default CatagoriesPage;
