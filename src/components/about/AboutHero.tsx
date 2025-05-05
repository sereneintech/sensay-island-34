
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
            <blockquote className="mb-6 italic border-l-4 border-sensay-blue/50 pl-4">
              "We, the citizens and founders of Sensay Island, guided by human wisdom and augmented by artificial intelligence, 
              establish this nation to advance justice, knowledge, and the common good for generations to come."
            </blockquote>
            
            <p>
              Sensay Island stands as a living laboratory where the accumulated wisdom of human history 
              meets cutting-edge artificial intelligence in service of a profound question: How might we 
              govern ourselves with greater wisdom, compassion and foresight in the age of AI?
            </p>
          </div>
          
          <div className="mt-12">
            <Button asChild size="lg" className="bg-sensay-blue hover:bg-sensay-blue/90">
              <Link to="/charter">Explore Our Charter <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
