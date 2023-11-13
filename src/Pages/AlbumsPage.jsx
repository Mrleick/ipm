import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import {Header} from "../components/Header";

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
      .then((data) => setSongs(data.tracks.items));
  }, [token]);

  console.log(songs);
  return (
    <>
      <h1>Album</h1>
      <Link to="/AlbumDetails">AlbumDetails</Link>


      <div className="dark">
        <div className="page w-screen h-screen bg-[#341931] dark:bg-white m-0 sticky top-0">
          {/* <Header /> */}
          <section className="overflow-hidden">
            <h1 className="bg-gradient-to-r from-[#FF6A00] to-[#EE0979] text-transparent bg-clip-text text-3xl pl-5">
              All Albums
            </h1>
            <div className="flex justify-between px-5 align-middle text-white dark:text-black">
              <p className="font-bold text-lg">Featured Albums</p>
              <a
                href="#"
                className="m-[18px] no-underline text-purple-700 dark:text-pink-500"
              >
                View more
              </a>
            </div>

            <section className="gap-5 flex overflow-x-auto px-5 scrollbar-hide">
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
              <img src="../src/assets/albumcover.png" className="rounded-sm" />
            </section>

            <p className="font-bold text-white dark:text-black  pl-5">
              New Releases
            </p>
            <section className="overflow-y-auto scrollbar-hide max-h-96">
              {songs &&
                songs.map((track) => (
                  <article
                    className="flex px-5 justify-between align-middle mb-6 text-white dark:text-black"
                    key={track.id}
                  >
                    <div className="flex gap-3">
                      <img src="../src/assets/songcover.png" />
                      <span>
                        <p className="font-bold text-xl m-0">{track.name}</p>
                        <p className="m-0">{track.artists[0].name}</p>
                      </span>
                    </div>
                    <p>12 sec</p>
                  </article>
                ))}
            </section>
          </section>
          {/* <FootNav /> */}
        </div>
      </div>
    </>
  );
};

export default AlbumPage;
