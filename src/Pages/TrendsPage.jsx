import { Link } from "react-router-dom";
import Header from "../components/Header";

const TrendsPage = () => {
  return (
    <>
      <Header
        className=""
        buttonClass=""
        showBackButton={true}
        showSearchButton={true}
        isDarkMode={false}
        showPageName={true}
        textColor=""
      />
      <h1>Trends</h1>
      <Link to="/Playlist">Playlist</Link>
    </>
  );
};

export default TrendsPage;
