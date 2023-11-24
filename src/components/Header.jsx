import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import Heading from "./Heading";

export default function Header({
  className,
  buttonClass,
  showBackButton = true,
  showSearchButton = true,
  isDarkMode = false,
  showPageName = true,
  textColor,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.substring(1);

  const headerClasses = `${className} uppercase tracking-wider ${textColor} flex justify-between py-4 px-4 ${
    isDarkMode ? "dark:bg-secondary-color" : ""
  }`;

  return (
    <header className={headerClasses}>
      {showBackButton && (
        <button onClick={() => navigate(-1)} className={buttonClass}>
          <IoIosArrowBack size={24} />
        </button>
      )}
      {showPageName && (
        <Heading level="2" className={className} title={pathname} />
      )}
      {showSearchButton && (
        <button className={buttonClass}>
          <IoIosSearch size={24} />
        </button>
      )}
    </header>
  );
}
