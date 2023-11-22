import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import Track from "../components/Track";

const SongsPage = () => {
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

  const [tracks, setTracks] = useState();

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/albums/3SpAbtsIKZ9omjpDCPUQKJ?si=OKy_lUcVSRmIYtWa5OYBIQ/tracks?limit=50",
      {
        method: "GET",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setTracks(data));
  }, [token]);

  ////////////// convert ms to s /////////////////////
  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <>
      <main className="dark:bg-secondary-color bg-white ">
        <div className="px-5">
        <Header className="uppercase tracking-wider text-black dark:text-white flex justify-between py-3 px-0 dark:bg-secondary-color" />
        </div>
        <Heading level="1" title="All Songs" className="pt-0 pb-5 px-5" />
        <section className="px-5 overflow-y-auto max-h-fit pb-96 text-black dark:text-white">
          {tracks &&
            tracks.tracks.items.map((song) => (
              <>
               <Track title={song.name} artist={song.artists[0].name} image={tracks.images[0].url} playtime={millisToMinutesAndSeconds(song.duration_ms)} key={song.id} />
              </>
            ))}
        </section>
        <FooterMenu></FooterMenu>
      </main>
    </>
  );
};

export default SongsPage;
