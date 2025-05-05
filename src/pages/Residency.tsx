
import ResidencyForm from "@/components/residency/ResidencyForm";
import ResidencyHero from "@/components/residency/ResidencyHero";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Residency() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-sensay-stone/10 to-white">
      <div className="container mx-auto px-4 pt-20">
        <NavLink to="/" className="inline-flex items-center mb-6 text-sensay-navy hover:text-sensay-teal transition-colors group">
          <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </NavLink>
      </div>
      <ResidencyHero />
      <ResidencyForm />
    </main>
  );
}
