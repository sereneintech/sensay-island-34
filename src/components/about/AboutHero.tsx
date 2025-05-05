
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-sensay-blue/10 to-sensay-green/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="gradient-text mb-6">About Sensay Island</h1>
          
          <p className="text-xl mb-8">
            A sovereign micronation dedicated to exploring the intersection of human wisdom and 
            artificial intelligence, creating a blueprint for enlightened governance in the digital age.
          </p>

          <div className="glass-card p-8 text-left">
            <p className="mb-4 italic border-l-4 border-sensay-blue/50 pl-4">
              "Sensay Island stands as a living laboratory where the accumulated wisdom of human history 
              meets cutting-edge artificial intelligence in service of a profound question: How might we 
              govern ourselves with greater wisdom, compassion and foresight in the age of AI?"
            </p>
            
            <p>
              Our journey began with a simple yet revolutionary idea: What if we could create a governance 
              system that synthesizes the greatest insights from history's wisest leaders, enhanced by 
              artificial intelligence, and applied to the challenges of today and tomorrow?
            </p>
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" className="bg-sensay-blue hover:bg-sensay-blue/90">
              <Link to="/government">Meet the AI Council <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
