import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import fetchFromApi from "../lib/fetchFromApi";
import { IoMdWifi } from "react-icons/io";
import ImageSliderDefault from "../components/ImageSliderDefault";
import { Link } from "react-router-dom";
import Attraction from "../components/attraction";

const TrendsPage = () => {
  const [playlists, setPlaylists] = useState([]);
  const [tracks, setTracks] = useState([]);
  const { genre } = useParams();

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/recommendations?seed_genres=${genre}`
        );

        if (data && data.tracks) {
          // Extract album information from tracks
          const albumData = data.tracks.map((track) => track.album);
          setTracks(albumData);
        } else {
          console.error("No tracks data found in the response:", data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/browse/featured-playlists?country=GB&limit=10&offset=5`
        );
        if (data) {
          setPlaylists(data.playlists.items);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <div className="dark:text-white ease-in duration-300 dark:bg-primarycolor">
      <Header
        className=""
        buttonClass=""
        showBackButton={true}
        showSearchButton={true}
        isDarkMode={true}
        showPageName={true}
        textColor="dark:text-white"
      />

      <main className="px-6 pb-32">
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r ease-in duration-300 from-orange to-primarycolor dark:text-white py-12"
          title="Latest Trends"
        />

        <section className="flex flex-col gap-6 h-96">
          <div className="w-full h-full rounded-md bg-slate-700 relative">
            <div className="absolute right-6 -top-4 h-11 w-11 bg-slate-400 flex items-center justify-center bg-gradient-to-r ease-in duration-300 from-orange to-primarycolor rounded-full">
              <IoMdWifi size={32} color="white" />
            </div>
            <Link
              to={`/playlist?q=${playlists[0]?.id}&desc=${playlists[0]?.description}`}
            >
              <img
                src={playlists[0]?.images[0]?.url}
                alt="jul"
                className="object-cover h-full w-full block rounded-lg"
                width={240}
              />
              <header className="absolute bottom-10 left-3">
                <h2 className="text-4xl font-bold text-white pb-2">
                  {playlists[0]?.name}
                </h2>
                <h3 className="font-bold text-white">45 #hashtags</h3>
                <div className="flex -space-x-2 overflow-hidden items-center pt-4">
                  <img
                    className="inline-block h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <img
                    className="inline-block h-6 w-6 rounded-full"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                    alt=""
                  />
                  <span className="text-xs pl-4 flex gap-1 text-white">
                    <h3 className="font-bold">3,123</h3> are talking about this
                  </span>
                </div>
              </header>
            </Link>
          </div>
        </section>
        <section className="bg-primarycolor py-5 -mt-10 -ml-3 -mr-6 rounded-l-lg ease-in duration-300 dark:bg-white">
          {tracks.length > 0 && (
            <div className="py-10">
              <ImageSliderDefault slides={tracks} />
            </div>
          )}
        </section>
        <section className="flex flex-col gap-6 -mt-10 h-96">
          {playlists.length > 1 && (
            <div className="w-full h-full rounded-md bg-slate-700 relative">
              <div className="absolute right-6 -top-4 h-11 w-11 bg-slate-400 flex items-center justify-center bg-gradient-to-r from-orange to-primarycolor rounded-full">
                <IoMdWifi size={32} color="white" />
              </div>
              <Link
                to={`/playlist?q=${playlists[1]?.id}&desc=${playlists[1]?.description}`}
              >
                <img
                  src={playlists[1]?.images[0]?.url}
                  alt="jul"
                  className="object-cover h-full w-full block rounded-lg"
                  width={240}
                />
                <header className="absolute bottom-10 left-3">
                  <h2 className="text-4xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pb-2">
                    {playlists[1]?.name}
                  </h2>
                  <Attraction></Attraction>
                </header>
              </Link>
            </div>
          )}
        </section>
      </main>
      <FooterMenu />
    </div>
  );
};

export default TrendsPage;
