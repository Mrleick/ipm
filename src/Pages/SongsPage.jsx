import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import fetchFromApi from "../lib/fetchFromApi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Track from "../components/Track";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";

const SongsPage = () => {
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/albums/${id}`
        );
        console.log("API Response:", data);
        if (data) {
          setAlbum(data);
          setLoading(false);
          console.log("Album:", album);
        }
      } catch (error) {
        console.error("Error fetching data from Spotify:", error);
      }
    }

    fetchDataFromSpotify();
  }, [id]);

  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      <div className="dark:bg-secondary-color bg-white ">
        <header className="flex justify-between py-6 tracking-widest px-6">
          <Link to="/artists">
            <button className="text-black dark:text-white">
              <IoIosArrowBack className="text-white text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" />
            </button>
          </Link>
          <h2 className="text-black dark:text-white">songs</h2>
          <button className="dark:text-white text-black text-2xl">
            <IoIosSearch />
          </button>
        </header>
        <Heading level="1" title="All Songs" className="pt-0 pb-5 px-5" />
      </div>
      <main className="dark:bg-secondary-color bg-white ">
        <section className="px-5 overflow-y-auto max-h-fit pb-96 text-black dark:text-white">
          {loading ? (
            <p className="px-6">Loading songs...</p>
          ) : (
            album.tracks &&
            album.tracks.items.map((song) => (
              <Track
                title={song.name}
                artist={song.artists[0].name}
                image={
                  album.images && album.images.length > 0
                    ? album.images[0].url
                    : ""
                }
                playtime={millisToMinutesAndSeconds(song.duration_ms)}
                key={song.id}
              />
            ))
          )}
        </section>
      </main>
      <FooterMenu />
    </>
  );
};

export default SongsPage;
