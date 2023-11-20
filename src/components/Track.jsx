import { useState } from "react";

const Track = (props) => {
  const [isPlaying, setIsplaying] = useState(false);

  function handleChange() {
    setIsplaying(!isPlaying);
  }

  return (
    <div className="flex items-center mb-4 justify-between bg-gradient-to-r from-orange to-primarycolor text-white rounded-md">
      <div className="flex items-center gap-4">
          
          <div className="w-20 h-20 flex justify-center items-center rounded-md" style={{ backgroundImage: `url(${props.image})` }}>
          <button
            className="bg-gradient-to-r from-orange to-primarycolor rounded-full w-9 h-9 text-white"
            onClick={handleChange}
          >
            ▶
          </button>
            </div>

        <span>
          <h2 className="font-bold">
            {props.title.length > 15
              ? props.title.split(" ").slice(0, 3).join(" ") + "..."
              : props.title}
          </h2>
          <div className="flex gap-4 text-sm">
            {/* {song.artists.map((artist) => {
              return <p key={artist.id}>{artist.name.length > 1
                ? artist.name.split(" ").slice(0, 3).join(" ") +
                  "..."
                : artist.name}</p>;
            })} */}
            {props.artist}
          </div>
        </span>
      </div>
      <p className="pr-5">{props.playtime}</p>
    </div>
  );
};

export default Track;
