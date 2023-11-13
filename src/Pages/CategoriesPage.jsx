import { Link } from "react-router-dom";
import Accordion from "../components/Accordion";
import Heading from "../components/Heading";
import Header from "../components/Header";

const placeholders = [
  { title: "Blue Page", link: "linktopage1" },
  { title: "Green Page", link: "linktopage2" },
  { title: "Red Page", link: "linktopage3" },
];

const CatagoriesPage = () => {
  return (
    <>
      <main className="px-6">
        <Header />
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12"
          title="Categories"
        />
        <section className="flex flex-col gap-6">
          <Accordion
            className="relative z-20 bg-red rounded-md px-6 py-4 cursor-pointer"
            heading="Alternative"
            content={placeholders.map((placeholder, index) => (
              <div key={index}>
                <Link to={placeholder.link}>{placeholder.title}</Link>
              </div>
            ))}
          />
          <Accordion
            className="relative z-20 bg-red rounded-md px-6 py-4 cursor-pointer"
            heading="hello"
            content={placeholders.map((placeholder, index) => (
              <div key={index}>
                <Link to={placeholder.link}>{placeholder.title}</Link>
              </div>
            ))}
          />
          <Accordion
            className="relative z-20 bg-red rounded-md px-6 py-4 cursor-pointer"
            heading="hello"
            content={placeholders.map((placeholder, index) => (
              <div key={index}>
                <Link to={placeholder.link}>{placeholder.title}</Link>
              </div>
            ))}
          />
        </section>
      </main>
    </>
  );
};

export default CatagoriesPage;
