// ViewAll.js

import React from "react";

const ViewAll = ({ text }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <p className="font-bold">{text}</p>
      <button className="text-pink-500 px-4">View All</button>
    </div>
  );
};

export default ViewAll;
