
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CouncilGrid from "@/components/government/CouncilGrid";

const Government = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-3xl text-center mb-8">
          <h1 className="gradient-text mb-6">AI Government</h1>
          <p className="text-xl">
            The first sovereign governance system combining the wisdom of history's greatest minds
            with cutting-edge artificial intelligence technology.
          </p>
        </div>
        <CouncilGrid />
      </main>
      <Footer />
    </>
  );
};

export default Government;
