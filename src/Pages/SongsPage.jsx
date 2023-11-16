import { Link } from "react-router-dom";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu"
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
  const [tracks, setTracks] = useState()

  useEffect(() => {
    fetch("https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",{
      method: "GET",
      headers : {
        "content-type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
      }
    })
    .then((res) => res.json())
    .then((data) => setTracks(data.tracks))

  },[token])
 
tracks && console.log(tracks)
  return (
    <>
     <main className="dark:bg-white bg-secondary-color">
      <div className="dark:text-black px-5">
      <Header />
      </div>
        <Heading level="1" title="All Songs" className="py-4 px-5" />
      <section className="px-5 overflow-y-auto max-h-64">
        {
          tracks && tracks.map((song) => (
            <div key={song.id}>
                <button className="bg-gradient-to-r from-orange to-primarycolor">
                  ▶
                </button>
                <p>hello world</p>
            </div>
          ))
        }
      </section>
      <FooterMenu></FooterMenu>
     </main>
    </>
  );
};

export default SongsPage;
