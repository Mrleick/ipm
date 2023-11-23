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
import { useEffect} from "react";

const PlayerPage = () => {
  let deviceId;
  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
        const token = 'BQDdC-qr8lR6UxLL15T9KYAg-ObQqxpWXvOeOc6FSzrxBSVvhIfbNn0UFKrZKWw8Y1s9as0q2-Y6uDK_1Ay0dwFdJ3GU7na45Zt0gyB0gXJ0_pkBx80eGFavJlEM3bG3_US6KE0sONPzOTZqQU0q8jaQh9TQs1OZdKEwCYdjbFK_q20iJYnKFblCikODQOZLh3g5vA';
        
        const player = new Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        // Ready
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
            deviceId = device_id
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

        document.getElementById('next').onclick = function() {
          player.nextTrack();
        };

        let currentPosition;
        document.getElementById('seekback').onclick = function() {
          player.seek(10 + currentPosition);
        }

        player.addListener('player_state_changed', ({
          position,
          duration,
          track_window: { current_track }
        }) => {
          console.log('Currently Playing', current_track);
          console.log('Position in Song', position);
          console.log('Duration of Song', duration);
          currentPosition = position
        });
        
        

        player.connect();
      }

      function play({ spotify_uri}) {
      fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            body: JSON.stringify({ uris: [spotify_uri] }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer BQDdC-qr8lR6UxLL15T9KYAg-ObQqxpWXvOeOc6FSzrxBSVvhIfbNn0UFKrZKWw8Y1s9as0q2-Y6uDK_1Ay0dwFdJ3GU7na45Zt0gyB0gXJ0_pkBx80eGFavJlEM3bG3_US6KE0sONPzOTZqQU0q8jaQh9TQs1OZdKEwCYdjbFK_q20iJYnKFblCikODQOZLh3g5vA

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

        <button id="seekback">
          <IoPlayBackSharp className="text-4xl" />
        </button>

        <button id="togglePlay" className="flex justify-center items-center h-[75px] w-[75px] rounded-full bg-gradient-to-r from-orange to-primarycolor">
          <IoPlaySharp className="text-white text-[40px]" />
        </button>

        <IoPlayForwardSharp className="text-4xl" />

        <button id="next">
          <img src={Forward} alt="Forward" />
        </button>
      </div>

      <button id="test">
        play this
      </button>
    </>
  );
};

export default PlayerPage;
