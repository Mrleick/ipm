import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import fetchFromApi from "../lib/fetchFromApi";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import tw from "tailwind-styled-components";
import { IoPlaySharp } from "react-icons/io5";

import { IoIosArrowBack, IoIosSearch } from "react-icons/io";

const StyledIconDiv = tw.div`
w-8
h-8
bg-gradient-to-r from-gradient-color1 to-gradient-color2
border-[solid] 
rounded-[100%]
flex
justify-center
items-center

`;
const StyledPlayIcon = tw(IoPlaySharp)`
w-4
h-4
text-white
`;

const StyledButton = tw.button`
bg-primarycolor
 text-base
h-10
w-fit
px-3
   rounded-3xl
`;

const StyleBackgroundImage = tw.div`
bg-no-repeat
bg-bottom

bg-cover

h-[640px]

`;

// let id = "4aawyAB9vmqN3uQ7FjRGTy";

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

const AlbumDetailsPage = () => {
  const [albumDetails, setAlbumDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/albums/${id}`
          //  "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"
        );
        if (data) {
          setAlbumDetails(data);
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
      <section>
        {loading ? (
          <p className="px-6">Loading AlbumDetails...</p>
        ) : (
          albumDetails.images &&
          albumDetails.images.length > 0 && (
            <StyleBackgroundImage
              style={{
                backgroundImage: `url(${albumDetails.images[0].url})`,
              }}
            >
              <header className="flex justify-between py-6 tracking-widest px-6">
                <Link to="/Albums">
                  <button className="text-black   dark:text-white">
                    <IoIosArrowBack className="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
                  </button>
                </Link>
                <h2 className="text-white">AlbumDetails</h2>
                <button className="dark:text-white text-black text-2xl"></button>
              </header>
              <div className="px-6 pb-20">
                <h1 className="text-white font-bold text-4xl pt-8 pb-7 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  {albumDetails.name}
                </h1>
                <p className="text-white font-bold text-base drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  {albumDetails.total_tracks === 1
                    ? albumDetails.total_tracks + " song"
                    : albumDetails.total_tracks + " songs"}
                </p>
                <div>
                  {albumDetails.genres && albumDetails.genres.items ? (
                    albumDetails.genres.items.map((genres, index) => (
                      <section
                        className="flex justify-between max-w-lg"
                        key={index}
                      >
                        <h4 className="pt-60 text-white font-extralight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                          genres hashtags
                        </h4>
                        <div className="flex gap-2 pt-3 text-white">
                          <StyledButton> {track.genres[0]?.name}</StyledButton>
                          <StyledButton>{track.genres[0]?.name}</StyledButton>
                        </div>
                      </section>
                    ))
                  ) : (
                    <>
                      <h4 className="pt-60 text-white font-extralight drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        genres hashtags
                      </h4>
                      <div className="flex gap-2 pt-3 text-white">
                        <StyledButton> #country</StyledButton>
                        <StyledButton>#country roads</StyledButton>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </StyleBackgroundImage>
          )
        )}
      </section>
      <main className="px-6 pb-20 grid-cols-4 ease-in duration-300 dark:bg-secondary-color">
        <h2 className="font-poppins w-40 pt-10 pb-6 ease-in duration-300 font-bold text-secondary-color dark:text-white">
          All Songs
        </h2>
        <ul>
          {loading ? (
            <p className="px-6">Loading tracks...</p>
          ) : albumDetails.tracks && albumDetails.tracks.items ? (
            albumDetails.tracks.items.map((track, index) => (
              <li
                className="flex justify-between max-w-full  dark:text-white"
                key={index}
              >
                <section className="flex gap-5 py-2 items-center">
                  {" "}
                  <StyledIconDiv>
                    <StyledPlayIcon />{" "}
                  </StyledIconDiv>
                  <div className="flex ease-in duration-300 flex-col">
                    <h3 className="font-poppins ease-in duration-300 w-40 font-bold text-secondary-color  dark:text-white">
                      {" "}
                      {track.name}
                    </h3>

                    <p className="max-w-full font-light">
                      {track.artists[0]?.name}
                      {track.artists[1]?.name && ` feat. `}
                    </p>
                    <p className="font-light"> {track.artists[1]?.name}</p>
                  </div>
                </section>
                <p className="w-6 text-right ease-in duration-300 mt-auto mb-auto flex justify-end">
                  {millisToMinutesAndSeconds(track.duration_ms, "s")}
                </p>
              </li>
            ))
          ) : (
            <li>track not available</li>
          )}
        </ul>
      </main>
      <FooterMenu />
    </>
  );
};

export default AlbumDetailsPage;
