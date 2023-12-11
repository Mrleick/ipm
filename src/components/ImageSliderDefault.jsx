import useEmblaCarousel from "embla-carousel-react";

export default function ImageSliderDefault({ slides }) {
  const [emblaRef] = useEmblaCarousel({
    loop: false,
    align: "start",
    containScroll: false,
  });

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-30 items-center">
          <div className="embla__slide flex-[0_0_30%] min-w-0 w-10 font-bold ease-in duration-300 text-white dark:text-primarycolor pl-5">
            Trending now
          </div>

          {slides.map((slide, index) => (
            <div
              key={index}
              className="embla__slide flex-[0_0_30%] min-w-0 mx-1 aspect-square"
            >
              <img
                src={slide.images[0].url}
                alt={`Slide ${index}`}
                className="object-cover block h-30 w-30 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
