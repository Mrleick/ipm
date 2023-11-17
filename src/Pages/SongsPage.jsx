import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";

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
      .then((data) => setTracks(data.tracks.items));
  }, [token]);

  ////////////// convert ms to s /////////////////////
  function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <>
      <main className="dark:bg-white bg-secondary-color">
        <div className="dark:text-black px-5">
          <Header />
        </div>
        <Heading level="1" title="All Songs" className="py-4 px-5" />
        <section className="px-5 overflow-y-auto max-h-fit pb-96 text-white dark:text-black">
          {tracks &&
            tracks.map((song) => (
              <>
                {console.log(song)}
                <div className="flex items-center pb-4 justify-between" key={song.id}>
                  <div className="flex gap-4">
                    <button className="bg-gradient-to-r from-orange to-primarycolor rounded-full w-9 h-9 text-white">
                      ▶
                    </button>
                    <span>
                      <h2 className="font-bold">
                        {song.name.length > 15
                          ? song.name.split(" ").slice(0, 3).join(" ") + "..."
                          : song.name}
                      </h2>
                      <div className="flex gap-4 text-sm">
                        {/* {song.artists.map((artist) => {
                        return <p key={artist.id}>{artist.name.length > 1
                          ? artist.name.split(" ").slice(0, 3).join(" ") +
                            "..."
                          : artist.name}</p>;
                      })} */}
                        {song.artists[0].name}
                      </div>
                    </span>
                  </div>
                  <p>{millisToMinutesAndSeconds(song.duration_ms)}</p>
                </div>
              </>
            ))}
        </section>
        <FooterMenu></FooterMenu>
      </main>
    </>
  );
};

export default SongsPage;
