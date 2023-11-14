// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterMenu from "../components/FooterMenu";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import Header from "../components/Header";

const AlbumPage = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const body = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: "91ed82e07cd84670b918c6f2d745a8a8",
      client_secret: "bf1e4b7105214f26bec1f1bd6acf9967",
    });
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    })
      .then((res) => res.json())
      .then((data) => setToken(data.access_token));
  }, []);

  const [songs, setSongs] = useState();

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/albums/6JoI0NEAqeJ20X6lU3Drx0?si=14IqgkiyS7-cSp5_Nv7GMQ/tracks",
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token} `,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, [token]);

  return (
    <>
      <div>
        <div className="w-screen h-screen bg-primarycolor dark:bg-white">
          <Header />
          <header className="pt-5 px-5 flex justify-between text-white dark:text-black">
            <button className="dark:text-black text-white text-2xl">
              <IoIosArrowBack />
            </button>
            <h2>Music</h2>
            <button className="dark:text-black text-white text-2xl">
              <IoIosSearch />
            </button>
          </header>

          <section>
            <h1 className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-transparent bg-clip-text text-5xl pl-5 py-7">
              All Albums
            </h1>
            <div className="flex justify-between px-5 pb-4 text-white dark:text-black">
              <p className="font-bold text-lg">Featured Albums</p>
              <a
                href="#"
                className="no-underline text-purple-700 dark:text-pink-500"
              >
                View more
              </a>
            </div>

            <section className="gap-5 flex overflow-x-auto px-5 pb-8">
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
              <img
                src={songs && songs.images[0].url}
                className="rounded-lg h-32"
              />
            </section>

            <div className="flex justify-between px-5 pb-4 text-white dark:text-black">
              <p className="font-bold text-lg">New Releases</p>
              <a
                href="#"
                className="no-underline text-purple-700 dark:text-pink-500"
              >
                View more
              </a>
            </div>
            <section className="overflow-y-auto max-h-96 pb-14">
              {songs &&
                songs.tracks.items.map((track) => (
                  <article
                    className="flex px-5 justify-between items-center mb-6 text-white dark:text-black"
                    key={track.id}
                  >
                    <div className="flex gap-3">
                      <img
                        src={songs && songs.images[0].url}
                        className="h-14 rounded-lg"
                      />
                      <span className="max-h-14">
                        <p className="font-bold text-xl m-0">
                          {track.name.length > 15
                            ? track.name.split(" ").slice(0, 3).join(" ") +
                              "..."
                            : track.name}
                        </p>
                        <p className="m-0">{track.artists[0].name}</p>
                      </span>
                    </div>
                    <p>12 sec</p>
                  </article>
                ))}
            </section>
          </section>
          <FooterMenu />
        </div>
      </div>
    </>
  );
};

export default AlbumPage;
