import { Link } from "react-router-dom";
import Header from "../components/Header";
import Wave from "../assets/sound-wave-3.png";
import Vinyl from "../assets/vinyl.png";
import {
  IoPlaySkipBackSharp,
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
} from "react-icons/io5";

const PlayerPage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center mx-auto mt-[64px] w-full relative">
        <img className="p-0 absolute w-[375px]" src={Wave} alt="Sound Wave" />
        <img className="p-0 z-10" src={Vinyl} alt="Record Cover" />
      </div>
      <div className="mt-28">
        <h2 className="font-bold text-center">Don’t Call Me Up</h2>
        <p className="text-center">Mabel</p>
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
        <p>3:40</p>
      </div>

      <div className="flex gap-x-4 justify-center items-center">
        <IoPlaySkipBackSharp className="text-4xl" />
        <IoPlayBackSharp className="text-4xl" />
        <div className="flex justify-center items-center h-[75px] w-[75px] rounded-full bg-gradient-to-r from-orange to-primarycolor">
          <IoPlaySharp className="text-white text-[40px]" />
        </div>
        <IoPlayForwardSharp className="text-4xl" />
        <IoPlaySkipForwardSharp className="text-4xl" />
      </div>
    </>
  );
};

export default PlayerPage;
