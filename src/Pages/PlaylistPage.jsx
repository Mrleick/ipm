import Heading from "../components/Heading";
import Header from "../components/Header";
import FooterMenu from "../components/FooterMenu";

const PlaylistPage = () => {
  return (
    <>
      <main className="px-6 pb-20 bg-wave dark:bg-secondary-color dark:text-white">
        <Header />
        <Heading
          level="1"
          className="font-bold text-transparent text-5xl bg-clip-text inline-block bg-gradient-to-r from-orange to-primarycolor py-12"
          title="Playlists"
        />
        <section className="flex flex-col gap-6">xxxx</section>
      </main>
      <FooterMenu />
    </>
  );
};

export default PlaylistPage;
