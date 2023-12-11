import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import Track from "../components/Track";
import fetchFromApi from "../lib/fetchFromApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
const SongsPage = () => {
  const [tracks, setTracks] = useState();
  const { id } = useParams();
  useEffect(() => {
    async function fetchDataFromSpotify() {
      // const id = "3SpAbtsIKZ9omjpDCPUQKJ";
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/albums/${id}`
        );
        if (data) {
          setTracks(data.tracks);
        }
      } catch (error) {
        console.error("Error songs:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      <div className="dark:bg-secondary-color ease-in duration-300 bg-white ">
        <header className="flex justify-between py-6 tracking-widest px-6">
          {" "}
          <Link to="/artists">
            <button className="text-black dark:text-white">
              <IoIosArrowBack className="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
            </button>
          </Link>
          <h2 className="text-black dark:text-white ">songs</h2>
          <button className="dark:text-white text-black text-2xl">
            <IoIosSearch />
          </button>
        </header>
        <Heading level="1" title="All Songs" className="pt-0 pb-5 px-5" />{" "}
      </div>
      <main className="dark:bg-secondary-color ease-in duration-300 bg-white ">
        <section className="px-5 ease-in duration-300 overflow-y-auto max-h-fit pb-96 text-black dark:text-white">
          {tracks &&
            tracks.items.map((song) => (
              <Track
                title={song.name}
                artist={song.artists[0].name}
                image={
                  tracks.images && tracks.images.length > 0
                    ? tracks.images[0].url
                    : ""
                }
                playtime={millisToMinutesAndSeconds(song.duration_ms)}
                key={song.id}
              />
            ))}
        </section>
      </main>
      <FooterMenu />
    </>
  );
};

export default SongsPage;
