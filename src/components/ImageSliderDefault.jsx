import useEmblaCarousel from "embla-carousel-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import fetchFromApi from "../lib/fetchFromApi";

export default function ImageSliderDefault({ slides }) {
  const [tracks, setTracks] = useState([]);
  const { genre } = useParams();
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: false,
  });

  useEffect(() => {
    async function fetchDataFromSpotify() {
      try {
        const data = await fetchFromApi(
          `https://api.spotify.com/v1/recommendations?seed_genres=${genre}`
        );

        if (data && data.tracks) {
          const albumData = data.tracks.map((track) => track.album);
          setTracks(albumData);
        } else {
          console.error("No tracks data found in the response:", data);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }

    fetchDataFromSpotify();
  }, []);

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-30 items-center">
          <div className="embla__slide flex-[0_0_30%] min-w-0 w-10 font-bold ease-in duration-300 text-white dark:text-primarycolor pl-5">
            Trending now
          </div>
          {tracks.map((track, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_30%] min-w-0 mx-1 aspect-square"
            >
              <Link
                className="dark:bg-secondary-color"
                to={`/albumDetails/${track.id}`}
                key={track.id}
              >
                {track.images && track.images[0] ? (
                  <img
                    src={track.images[0].url}
                    alt={`Slide ${index}`}
                    className="object-fit w-28 h-28 rounded-lg"
                  />
                ) : (
                  // Provide a fallback if images are not available
                  <span>No Image Available</span>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
