
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Timeline from "@/components/home/Timeline";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Timeline />
      </main>
      <Footer />
    </>
  );
};

export default Index;
