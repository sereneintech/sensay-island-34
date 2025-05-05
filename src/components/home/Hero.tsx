
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-sm"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-sensay-blue/60 to-sensay-green/40" 
          style={{ 
            backgroundImage: "url('/placeholder.svg')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            mixBlendMode: "multiply"
          }}
        ></div>
        
        {/* Animated Particle Overlay (Simplified) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 opacity-20">
            {/* This represents a simplified version of the particle effect */}
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                  <rect width="80" height="80" fill="url(#smallGrid)" />
                  <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white mb-6">
            Welcome to Sensay Island
            <span className="block mt-2 text-3xl md:text-4xl lg:text-5xl font-normal text-white/90">
              A Nation Governed by Timeless Wisdom and Artificial Intelligence
            </span>
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-8">
            A living laboratory where human potential meets the wisdom of history's greatest minds.
            Join us in creating a new paradigm of governance and innovation.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-sensay-blue hover:bg-sensay-blue/90">
              <Link to="/charter">Explore the Charter <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20">
              <Link to="/residency">Join the Journey</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
