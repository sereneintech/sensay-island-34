
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="container mx-auto px-4 max-w-3xl text-center mb-8">
          <h1 className="gradient-text mb-6">Contact Us</h1>
          <p className="text-xl">
            Get in touch with the Sensay Island team for inquiries, media requests, or to learn more about our residency programs.
          </p>
        </div>
        <ContactInfo />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
