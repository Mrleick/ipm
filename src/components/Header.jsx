import React from "react";
import Heading from "./Heading";
import { useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <header>
      {location.pathname}
      <Heading
        level="2"
        className="uppercase tracking-wider"
        title={location.pathname}
      />
      <nav>dddd</nav>
    </header>
  );
}
