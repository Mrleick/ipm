import { Link } from "react-router-dom";

const TempRoutingPage = () => {
  return (
    <>
      <h1 className="text-8xl">
        Temp page for navigation only delete before finalized version!
      </h1>
      <div className="grid grid-cols-4 gap-8">
        <Link to="/AlbumDetailsPage">AlbumDetailsPage</Link>
        <Link to="/AlbumsPage">AlbumsPage</Link>
        <Link to="/ArtistsPage">ArtistsPage</Link>
        <Link to="/CategoriesPage">CategoriesPage</Link>
        <Link to="/FeaturedPage">FeaturedPage</Link>
        <Link to="/FeedPage">FeedPage</Link>
        <Link to="/LoginPage">LoginPage</Link>
        <Link to="/PlayerPage">PlayerPage</Link>
        <Link to="/PlaylistPage">PlaylistPage</Link>
        <Link to="/SongsPage">SongsPage</Link>
        <Link to="/TempRouting">TempRouting</Link>
        <Link to="/TrendsPage">TrendsPage</Link>
        <Link to="/WalkthroughPage">WalkthroughPage</Link>
        <Link to="/WelcomePage">WelcomePage</Link>
      </div>
    </>
  );
};

export default TempRoutingPage;
