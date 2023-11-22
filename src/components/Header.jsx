import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import Heading from "./Heading";

export default function Header({ className, buttonClass }) {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname.substring(1);

  return (
    <header className={className}>
      <button onClick={() => navigate(-1)} className={buttonClass}>
        <IoIosArrowBack size={24} />
      </button>
      <Heading level="2" className={className} title={pathname} />
      <button className={buttonClass}>
        <IoIosSearch size={24} />
      </button>
    </header>
  );
}
