import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Accordion from "../components/Accordion";
import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import fetchFromApi from "../lib/fetchFromApi";

const placeholders = [
  { title: "Blue Page", link: "linktopage1" },
  { title: "Green Page", link: "linktopage2" },
  { title: "Red Page", link: "linktopage3" },
];

const colors = [
  "bg-gradient-color1",
  "bg-custom-red",
  "bg-gradient-color2",
  "bg-orange",
  "bg-custom-yellow",
  "bg-dark-green",
  "bg-custom-green",
  "bg-turquoise",
  "bg-light-blue",
  "bg-dark-blue",
  "bg-additional-color",
  "bg-primarycolor",
];

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          "https://api.spotify.com/v1/browse/categories?offset=0&limit=11"
        );
        if (data) {
          setCategories(data.categories.items);
          console.log(data.categories);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);
  return (
    <>
      <main className="px-6 pb-20">
        <Header />
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12"
          title="Categories"
        />
        <section className="flex flex-col gap-6">
          {categories.map((category, index) => (
            <Accordion
              key={index}
              className={`relative z-20 rounded-md px-6 py-4 cursor-pointer ${
                colors[index % colors.length]
              }`}
              heading={category.name}
              content={placeholders.map((placeholder, index) => (
                <div
                  key={index}
                  className="flex justify-between px-3 py-4 mb-2 items-center bg-slate-300"
                >
                  <Link to={placeholder.title}>{placeholder.title}</Link>
                  <IoIosArrowForward />
                </div>
              ))}
            />
          ))}
        </section>
      </main>
      <FooterMenu />
    </>
  );
};

export default CategoriesPage;
