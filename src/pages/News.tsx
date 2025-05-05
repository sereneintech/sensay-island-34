
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsHero from "@/components/news/NewsHero";
import NewsList from "@/components/news/NewsList";

const News = () => {
  return (
    <>
      <Navbar />
      <main>
        <NewsHero />
        <NewsList />
      </main>
      <Footer />
    </>
  );
};

export default News;
