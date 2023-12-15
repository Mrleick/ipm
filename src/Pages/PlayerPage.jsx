import Header from "../components/Header";
import Wave from "../assets/sound-wave-3.png";
import Vinyl from "../assets/vinyl.png";
import Backward from "../assets/skip-backward.png";
import Forward from "../assets/skip-forward.png";
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySharp,
} from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

const PlayerPage = () => {
  const { SPPlayer, setSPPlayer } = useOutletContext();
  const [currentTrack, setCurrentTrack] = useState();
  const [currentArtist, setCurrentArtist] = useState();
  const [playtime, setPlaytime] = useState();

  function pausePlay() {
    SPPlayer && SPPlayer.togglePlay().then(() => console.log("yay"));
  }
  function next() {
    SPPlayer && SPPlayer.nextTrack().then(() => console.log("yay"));
  }
  function previous() {
    SPPlayer && SPPlayer.previousTrack().then(() => console.log("yay"));
  }

  useEffect(() => {
    SPPlayer &&
      SPPlayer.getCurrentState().then((state) => {
        console.log(state);
        setCurrentTrack(state.track_window.current_track.name);
        setCurrentArtist(state.track_window.current_track.artists[0].name);
        setPlaytime(millisToMinutesAndSeconds(state.duration));
      });
  });

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <>
      <Header className="uppercase  text-black dark:text-white flex justify-between py-6 px-6 dark:bg-secondary-color  font-extralight" />
      <div className="flex justify-center items-center mx-auto mt-[64px] w-full relative">
        <img className="p-0 absolute w-[375px]" src={Wave} alt="Sound Wave" />
        <img className="p-0 z-10" src={Vinyl} alt="Record Cover" />
      </div>
      <div className="mt-28">
        <h2 className="font-bold text-center">
          {currentTrack ? currentTrack : "Track not found"}
        </h2>
        <p className="text-center">
          {currentArtist ? currentArtist : "Artist not found"}
        </p>
      </div>
      <div className="flex justify-center items-center mt-4">
        <input
          type="range"
          min="0"
          max="100"
          className="w-[325px] appearance-none bg-[#FF1168] h-1 outline-none"
        />
      </div>
      <div className="flex justify-between mx-auto mt-[15px] mb-[15px] max-w-[325px]">
        <p>00:00</p>
        <p> {playtime ? playtime : "00:00"} </p>
      </div>

      <div className="flex gap-x-4 justify-center mb-4 items-center">
        <button onClick={previous}>
          <img src={Backward} alt="Backward" />
        </button>

        <button id="seekback">
          <IoPlayBackSharp className="text-4xl" />
        </button>

        <button
          onClick={pausePlay}
          className="flex justify-center items-center h-[75px] w-[75px] rounded-full bg-gradient-to-r from-orange to-primarycolor"
        >
          <IoPlaySharp className="text-white text-[40px]" />
        </button>

        <IoPlayForwardSharp className="text-4xl" />

        <button onClick={next}>
          <img src={Forward} alt="Forward" />
        </button>
      </div>
    </>
  );
};

export default PlayerPage;
