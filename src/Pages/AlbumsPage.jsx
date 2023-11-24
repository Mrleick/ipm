// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AlbumPage = () => {
  const [token, setToken] = useState();
  ////////////////////////// Get Token ////////////////////////////
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

  //////////////////////////7 get singles offset /////////////////////////
  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/new-releases?offset=20", {
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setSongs(data.albums.items));
  }, [token]);

  ///////////////////// get Featured Albums /////////////////////
  const [FeatAlbums, setFeatAlbums] = useState();
  useEffect(() => {
    fetch("https://api.spotify.com/v1/browse/new-releases", {
      method: "GET",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setFeatAlbums(data.albums.items));
  }, [token]);

  return (
    <>
      <div>
        <div className="w-screen h-screen bg-secondary-color dark:bg-white">
          <Header
            className=""
            buttonClass=""
            showBackButton={true}
            showSearchButton={true}
            isDarkMode={false}
            showPageName={true}
            textColor=""
          />

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
              {FeatAlbums &&
                FeatAlbums.map((album) => (
                  <Link to={`/albumDetails/${album.id}`} key={album.id}>
                    <img
                      src={album.images[0].url}
                      className="rounded-lg h-32"
                    />
                  </Link>
                ))}
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
            <section className="overflow-y-auto h-40 pb-14">
              {songs &&
                songs.map((single) => (
                  <Link to={`/albumDetails/${single.id}`} key={single.id}>
                    <article className="flex px-5 justify-between items-center mb-6 text-white dark:text-black">
                      <div className="flex gap-3">
                        <img
                          src={single.images[0].url}
                          className="h-14 rounded-lg"
                        />
                        <span className="max-h-14">
                          <p className="font-bold text-xl m-0">
                            {single.name.length > 15
                              ? single.name.split(" ").slice(0, 3).join(" ") +
                                "..."
                              : single.name}
                          </p>
                          <p className="m-0">{single.artists[0].name}</p>
                        </span>
                      </div>
                      <p>12 sec</p>
                    </article>
                  </Link>
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
