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

  const headerClasses = `${className} uppercase tracking-wider ${textColor} flex justify-between items-center py-4 px-4 ${
    isDarkMode ? "dark:bg-secondary-color" : ""
  }`;

  return (
    <header className="flex justify-between py-6 px-6 tracking-widest">
      {showBackButton && (
        <button onClick={() => navigate(-1)} className={buttonClass}>
          <IoIosArrowBack size={24} />
        </button>
      )}
      <div
        style={{
          flex: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showPageName && (
          <Heading level="2" className={className} title={pathname} />
        )}
      </div>
      {showSearchButton && (
        <button className={buttonClass}>
          <IoIosSearch size={24} />
        </button>
      )}
    </header>
  );
}
