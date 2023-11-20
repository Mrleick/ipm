import { Link } from "react-router-dom";

const TempRoutingPage = () => {
  return (
    <>
      <h1 className="text-8xl">
        Temp page for navigation only delete before finalized version!
      </h1>
      <div className="grid grid-cols-4 gap-8">
        <Link to="/AlbumDetails">AlbumDetailsPage</Link>
        <Link to="/Albums">AlbumsPage</Link>
        <Link to="/Artists">ArtistsPage</Link>
        <Link to="/Categories">CategoriesPage</Link>
        <Link to="/Featured">FeaturedPage</Link>
        <Link to="/Feed">FeedPage</Link>
        <Link to="/Login">LoginPage</Link>
        <Link to="/Player">PlayerPage</Link>
        <Link to="/Playlist">PlaylistPage</Link>
        <Link to="/Songs">SongsPage</Link>
        <Link to="/TempRouting">TempRouting</Link>
        <Link to="/Trends">TrendsPage</Link>
        <Link to="/Walkthrough">WalkthroughPage</Link>
        <Link to="/Welcome">WelcomePage</Link>
      </div>
    </>
  );
};

export default TempRoutingPage;