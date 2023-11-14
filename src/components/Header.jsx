import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import Heading from "./Heading";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.pathname);

  return (
    <header className="flex justify-between bg-slate-400 py-4 tracking-widest">
      <button onClick={() => navigate(-1)}>
        <IoIosArrowBack size={24} />
      </button>
      <Heading
        level="2"
        className="uppercase tracking-wider"
        title={location.pathname}
      />
      <nav>
        <IoIosSearch size={24} />
      </nav>
    </header>
  );
}
