import Header from "../components/Header";
import Heading from "../components/Heading";
import FooterMenu from "../components/FooterMenu";
import ArtistsOfTheMonth from "../components/ArtistsOfTheMonth";
import ViewAll from "../components/ViewAll";
import ArtistCard from "../components/ArtistCard";
import TopArtistsByCountry from "../components/TopArtistsByCountry";

const ArtistsPage = () => {
  return (
    <>
      <Header className="uppercase tracking-wider text-black dark:text-white flex justify-between py-6 px-6 dark:bg-secondary-color" />
      <main className="px-6 pb-20 dark:bg-secondary-color dark:text-white">
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12"
          title="All Artists"
        />
        <ViewAll text="Artists of the Month" showButton={true} />
        <ArtistsOfTheMonth />
        <ViewAll text="Featured Artists" showButton={true} />
        <ArtistCard />
        <ViewAll text="Top Artists By Country" showButton={false} />
        <TopArtistsByCountry country="DK" />
        <FooterMenu />
      </main>
    </>
  );
};

export default ArtistsPage;
