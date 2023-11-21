import tw from "tailwind-styled-components";
import roundpexel from "../assets/1.png";
import roundpexel2 from "../assets/2.png";
import roundpexel3 from "../assets/3.png";

const Feedgroup = () => {
  return (
    <section className="flex items-center text-white">
      <div className="-ml-2">
        <img src={roundpexel} alt="Image 1" className="w-full h-auto" />
      </div>
      <div className="-ml-8">
        <img src={roundpexel2} alt="Image 2" className="w-full h-auto" />
      </div>
      <div className="-ml-8">
        <img src={roundpexel3} alt="Image 3" className="w-full h-auto" />
      </div>
      <div className="">
        <p className="text-lg">
          <span className="font-bold">3,123 </span>are talking about this
        </p>
      </div>
    </section>
  );
};

export default Feedgroup;
