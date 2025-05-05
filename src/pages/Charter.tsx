
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CharterSection from "@/components/charter/CharterSection";

const Charter = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <CharterSection />
      </main>
      <Footer />
    </>
  );
};

export default Charter;
