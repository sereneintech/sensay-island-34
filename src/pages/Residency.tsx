
import ResidencyForm from "@/components/residency/ResidencyForm";
import ResidencyHero from "@/components/residency/ResidencyHero";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function Residency() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-20">
        <NavLink to="/" className="inline-flex items-center mb-6 text-sensay-navy hover:text-sensay-teal">
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to Home
        </NavLink>
      </div>
      <ResidencyHero />
      <ResidencyForm />
    </main>
  );
}
