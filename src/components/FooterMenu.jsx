import { IoPulse } from "react-icons/io5";
import {
  IoIosMicrophone,
  IoIosContrast,
  IoMdWifi,
  IoIosSettings,
} from "react-icons/io";
import { IconContext } from "react-icons";
import GradientIcon from "./icons/GradientIcon";
import { Link } from "react-router-dom";

export default function FooterMenu() {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow">
        <nav className="flex justify-around items-center">
          <Link to="/">
            <GradientIcon
              size={32}
              icon={IoPulse}
              gradientId="red-to-orange-react"
            />
          </Link>
          <Link to="/featured">
            <GradientIcon
              size={32}
              icon={IoIosMicrophone}
              gradientId="red-to-orange-react"
            />
          </Link>
          <div className="h-11 w-11 bg-slate-400 flex items-center justify-center bg-gradient-to-r from-orange to-primarycolor rounded-full">
            <IoMdWifi size={32} color="white" />
          </div>
          <div>
            <GradientIcon
              size={32}
              icon={IoIosContrast}
              gradientId="red-to-orange-react"
            />
          </div>
          <div>
            <GradientIcon
              size={32}
              icon={IoIosSettings}
              gradientId="red-to-orange-react"
            />
          </div>
        </nav>
      </footer>
    </IconContext.Provider>
  );
}
