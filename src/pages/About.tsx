
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import IslandFacts from "@/components/about/IslandFacts";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <IslandFacts />
      </main>
      <Footer />
    </>
  );
};

export default About;
