import { useNavigate, useLocation } from "react-router-dom";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import Heading from "./Heading";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const pathname = location.pathname.substring(1);

  return (
    <header className="flex justify-between py-6 tracking-widest">
      <button
        onClick={() => navigate(-1)}
        className="text-black dark:text-white"
      >
        <IoIosArrowBack size={24} />
      </button>
      <Heading
        level="2"
        className="uppercase tracking-wider text-black dark:text-white"
        title={pathname}
      />
      <button className="dark:text-white text-black text-2xl">
        <IoIosSearch />
      </button>
    </header>
  );
}
