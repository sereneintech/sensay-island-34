
import { Card } from "@/components/ui/card";

export function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="gradient-text mb-6">Our Mission</h2>
          
          <div className="glass-card p-8 animate-slide-up">
            <p className="text-lg mb-4">
              Sensay Island is a sovereign micronation guided by an AI Council modeled on leaders who shaped civilization. 
              Our purpose is to explore enlightened governance—balancing human rights, ethical artificial intelligence, and 
              environmental stewardship for generations to come.
            </p>
            <p className="text-lg">
              We invite visionaries, researchers, and forward-thinkers to join us in creating a new paradigm
              where technology and human wisdom converge to address the challenges of our time.
            </p>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-gradient-to-br from-sensay-blue to-sensay-green text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h5 className="mb-3">Ethical Innovation</h5>
              <p className="text-gray-600">
                Pioneering AI governance models that prioritize human wellbeing and ethical frameworks.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-gradient-to-br from-sensay-green to-sensay-gold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="mb-3">Environmental Harmony</h5>
              <p className="text-gray-600">
                Creating sustainable systems that respect and regenerate our natural environment.
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <div className="h-16 w-16 flex items-center justify-center mx-auto mb-4 rounded-full bg-gradient-to-br from-sensay-gold to-sensay-blue text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h5 className="mb-3">Human Flourishing</h5>
              <p className="text-gray-600">
                Fostering a community dedicated to the advancement of human potential and wellbeing.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
