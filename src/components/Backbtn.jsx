import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";

const Backbtn = () => {
  return (
    <div className="text-white flex justify-between">
      {/* Left Arrow Button */}
      <button className="flex items-center">
        <FaArrowLeft className="h-6 w-6" />
      </button>

      {/* Search Button */}
      <button className="flex items-center">
        <FaSearch className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Backbtn;
