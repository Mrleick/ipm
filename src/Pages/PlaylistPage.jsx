import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import { useState, useEffect } from "react";
import fetchFromApi from "../lib/fetchFromApi";
import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import Button from "../components/ui/button";

const PlaylistPage = () => {
  const [playlists, setPlaylists] = useState([]);
  let params = new URLSearchParams(document.location.search);
  let playlistUrl = params.get("q"); // is the string "Jonathan"

  console.log(playlists);

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/playlists/${playlistUrl}/tracks`
        );
        if (data) {
          setPlaylists(data.items);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <>
      <section className="pb-20 bg-wave bg-cover dark:bg-secondary-color dark:text-white px-6 min-h-96">
        <Header
          className="uppercase text-white flex justify-between py-6 tracking-widest"
          darkMode="dark:text-white text-black text-2xl"
        />
        <Heading
          level="1"
          className="font-bold text-5xl text-white py-12"
          title="Playlists"
        />
        <div className="flex flex-wrap">
          {playlists.map((playlist, index) => (
            <div key={index}>
              <img
                src={playlist.track.album.images[1].url}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      </section>
      <main className="px-6 pb-24 pb-20bg dark:bg-secondary-color dark:text-white">
        <Heading
          level="2"
          className="font-bold text-center pb-10"
          title="Top list"
        />

        <section className="flex flex-col gap-6">
          {playlists.map((playlist, index) => (
            <div key={index} className="flex gap-6">
              <Link to="/">
                <div className="h-11 w-11 bg-slate-400 flex items-center justify-center bg-gradient-to-r from-orange to-primarycolor rounded-full">
                  <IoIosPlay size={24} color="white" />
                </div>
              </Link>
              <div>
                <h3 className="font-bold">{playlist.track.name}</h3>

                {playlist.track.artists.map((artist, index) => (
                  <p key={index} className="flex">
                    {artist.name}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </section>
        <Button
          title="LISTEN ALL"
          color="border-primarycolor text-primarycolor"
        />
      </main>
      <FooterMenu />
    </>
  );
};

export default PlaylistPage;
