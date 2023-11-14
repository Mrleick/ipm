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
bottom-28
text-3xl
text-white
`;

const StyledSongs = tw.p`
absolute 
left-4 
bottom-16
text-2xl
text-white
`;

const FeaturedPage = () => {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          "https://api.spotify.com/v1/browse/featured-playlists"
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
      <Header></Header>
      <Heading className="px-6 pb-8" title="Featured"></Heading>

      <main className="px-6 pb-20">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-col gap-10">
            {featuredPlaylists.map((playlist) => (
              <div key={playlist.id}>
                <article className="relative ">
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
