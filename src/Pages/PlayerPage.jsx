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
import { useEffect, useState } from "react";

const PlayerPage = () => {
  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQAn6JVEAfJgmQW-NlfKZW6QLqZLo7FCc9ybQLpADrGLYgn10pjEPncLXoj6F72mVZMIhG35NAK9189c4bIJymIjcSPyI3cx1qAs-GYKZ4rW3LWuSB2W_WKcdOdpJUJj081hBworr1Xv8jXXWXvWOdIvSfAcC8Qj48fH-oVSeknLW9HkUnWp0VbiBV4TA40d5k_wzA';
        
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        // Ready
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            document.getElementById('test').onclick = function() {
              play({
                playerInstance: player,
                spotify_uri: 'spotify:track:7MXctppZ1i8H2XxLe6LXKj',
            });
             };
          
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('account_error', ({ message }) => {
            console.error(message);
        });

       


        player.on('playback_error', ({ message }) => {
          console.error('Failed to perform playback', message);
        });
        

        document.getElementById('togglePlay').onclick = function() {
          player.togglePlay();
        };

        document.getElementById('previous').onclick = function() {
          player.previousTrack();
        };

        player.addListener('player_state_changed', ({
          position,
          duration,
          track_window: { current_track }
        }) => {
          console.log('Currently Playing', current_track);
          console.log('Position in Song', position);
          console.log('Duration of Song', duration);
        });
        
        

        player.connect();
      }
      function play({ spotify_uri, playerInstance: { _options: { id } } }) {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${id}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer BQAn6JVEAfJgmQW-NlfKZW6QLqZLo7FCc9ybQLpADrGLYgn10pjEPncLXoj6F72mVZMIhG35NAK9189c4bIJymIjcSPyI3cx1qAs-GYKZ4rW3LWuSB2W_WKcdOdpJUJj081hBworr1Xv8jXXWXvWOdIvSfAcC8Qj48fH-oVSeknLW9HkUnWp0VbiBV4TA40d5k_wzA
                `
            },
        });
    }
}, []);



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
        <button id="previous">
        <img src={Backward} alt="Backward" />
        </button>
        <IoPlayBackSharp className="text-4xl" />
        <button id="togglePlay" className="flex justify-center items-center h-[75px] w-[75px] rounded-full bg-gradient-to-r from-orange to-primarycolor">
          <IoPlaySharp className="text-white text-[40px]" />
        </button>
        <IoPlayForwardSharp className="text-4xl" />
        <img src={Forward} alt="Forward" />
      </div>

      <button id="test">
        play this
      </button>
    </>
  );
};

export default PlayerPage;
