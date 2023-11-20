import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import fetchFromApi from "../lib/fetchFromApi";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import tw from "tailwind-styled-components";
import { IoPlaySharp } from "react-icons/io5";

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

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

millisToMinutesAndSeconds(298999); // "4:59"
millisToMinutesAndSeconds(60999); // "1:01"

const AlbumDetailsPage = () => {
  const [albumDetails, setAlbumDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          "https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy"
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
      <div className="px-6 pb-20">
        <Header />
      </div>

      <main className="px-6 pb-20 grid-cols-4">
        {albumDetails.images && albumDetails.images.length > 0 && (
          <img
            className="col-span-1"
            src={albumDetails.images[0].url}
            alt="hello"
          />
        )}
        <p>{albumDetails.album_type}</p>
        <p>{albumDetails.label}</p>
      </main>

      <h2>All Songs</h2>
      <ul className="px-6 pb-20">
        {albumDetails.tracks && albumDetails.tracks.items ? (
          albumDetails.tracks.items.map((track, index) => (
            <li className="flex gap-4 justify-between" key={index}>
              <div className="flex gap-4 py-2 items-center">
                {" "}
                <StyledIconDiv>
                  <StyledPlayIcon />{" "}
                </StyledIconDiv>
                <div className="flex flex-col">
                  <h3 className="font-poppins font-bold"> {track.name}</h3>

                  <div>
                    <p>
                      {track.artists[0]?.name}
                      {track.artists[1]?.name &&
                        ` feat ${track.artists[1].name}`}
                    </p>
                  </div>
                </div>
              </div>
              <p className="w-32  flex">
                {millisToMinutesAndSeconds(track.duration_ms, "s")} mins
              </p>
            </li>
          ))
        ) : (
          <li>track not available</li>
        )}
      </ul>

      <FooterMenu />
    </>
  );
};

export default AlbumDetailsPage;
