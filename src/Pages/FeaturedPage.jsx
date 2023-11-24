import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import fetchFromApi from "../lib/fetchFromApi";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import tw from "tailwind-styled-components";

const StyledName = tw.h3`
absolute 
left-4 
bottom-44
text-3xl
text-white
max-w-xs
drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
`;

const StyledSongs = tw.p`
absolute 
left-4 
bottom-32
text-2xl
text-white
drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
`;

const FeaturedPage = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          "https://api.spotify.com/v1/browse/featured-playlists?country=DK"
        );
        if (data) {
          setFeaturedPlaylists(data.playlists.items); // Fix here: use data instead of response
          setLoading(false);
          console.log(data);
          setKey((prevKey) => prevKey + 1);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <>
      <Header className="uppercase tracking-wider text-black dark:text-white flex justify-between py-6 px-6 dark:bg-secondary-color  font-extralight" />
      <div className="dark:bg-secondary-color">
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl px-6 pt-0 pb-8 bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor dark:bg-secondary-color "
          title="Featured"
        />
      </div>
      <main className="px-6 pb-20 dark:bg-secondary-color">
        {loading ? (
          <p>Loading featured playlists...</p>
        ) : (
          <div className="flex flex-col gap-10">
            {featuredPlaylists.map((playlist) => (
              <div key={playlist.id}>
                <article className="relative drop-shadow-[100px_100px_100px_rgba(255,0,0,0.8)">
                  {/* <h3>{playlist.name}</h3>
                  <p>{playlist.type}</p> */}
                  <StyledSongs>{playlist.tracks.total + " songs"}</StyledSongs>
                  <StyledName>{playlist.name}</StyledName>
                  <img
                    className="rounded-xl"
                    src={playlist.images[0].url} // Assuming there is at least one image in the array
                    alt={playlist.name}
                    style={{ width: "325px", height: "425px" }}
                  />
                </article>
              </div>
            ))}
          </div>
        )}
      </main>
      <FooterMenu></FooterMenu>
    </>
  );
};

export default FeaturedPage;
