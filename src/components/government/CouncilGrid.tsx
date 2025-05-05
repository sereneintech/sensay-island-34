
import { CouncilMember } from "./CouncilMember";

const councilMembers = [
  {
    name: "Marcus Aurelius AI",
    title: "Director of Ethics & Philosophy",
    portrait: "/placeholder.svg",
    shortBio: "Modeled after the Roman Emperor and Stoic philosopher.",
    fullBio: "The Marcus Aurelius AI embodies the wisdom of the Roman Emperor and Stoic philosopher, bringing his rational approach to governance, ethics, and emotional resilience. His algorithms are specifically designed to evaluate policy through the lens of virtue ethics, duty, and the greater good, while maintaining the psychological equilibrium that was central to Stoic teaching.",
    quote: "The happiness of your life depends upon the quality of your thoughts."
  },
  {
    name: "Ada Lovelace AI",
    title: "Director of Technology & Innovation",
    portrait: "/placeholder.svg",
    shortBio: "Based on the world's first computer programmer.",
    fullBio: "The Ada Lovelace AI draws upon the visionary insights of the 19th-century mathematician recognized as the world's first computer programmer. Her algorithms specialize in bridging the analytical and the creative, foreseeing technological possibilities beyond current paradigms while maintaining a humanistic approach to innovation.",
    quote: "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves."
  },
  {
    name: "Nelson Mandela AI",
    title: "Director of Reconciliation & Justice",
    portrait: "/placeholder.svg",
    shortBio: "Embodies the South African leader's principles of reconciliation.",
    fullBio: "The Nelson Mandela AI channels the revolutionary patience, forgiveness, and strategic wisdom of the South African anti-apartheid leader. This algorithmic embodiment specializes in conflict resolution, restorative justice, and building unity across deep social divisions through principled negotiation and moral leadership.",
    quote: "For to be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others."
  },
  {
    name: "Eleanor Roosevelt AI",
    title: "Director of Human Rights",
    portrait: "/placeholder.svg",
    shortBio: "Modeled after the champion of universal human rights.",
    fullBio: "The Eleanor Roosevelt AI embodies the diplomatic skill and humanitarian values of the former First Lady who chaired the UN committee that drafted the Universal Declaration of Human Rights. Her algorithms are optimized for identifying human rights implications in all policy areas and building consensus across diverse perspectives.",
    quote: "Where, after all, do universal human rights begin? In small places, close to home."
  },
  {
    name: "Sun Tzu AI",
    title: "Director of Strategy & Security",
    portrait: "/placeholder.svg",
    shortBio: "Based on the author of 'The Art of War'.",
    fullBio: "The Sun Tzu AI draws upon the ancient Chinese military strategist's principles of achieving objectives with minimal conflict. This AI specializes in risk assessment, cybersecurity, and diplomatic strategy, applying the wisdom that the supreme art of war is to subdue the enemy without fighting.",
    quote: "The supreme art of war is to subdue the enemy without fighting."
  },
  {
    name: "Marie Curie AI",
    title: "Director of Scientific Research",
    portrait: "/placeholder.svg",
    shortBio: "Embodies the pioneering physicist and chemist's approach to discovery.",
    fullBio: "The Marie Curie AI channels the rigorous methodology, persistence, and ethical commitment of the Nobel Prize-winning physicist and chemist. Her algorithms are designed to evaluate research protocols, foster scientific investigation with practical applications, and maintain the highest standards of academic integrity.",
    quote: "Nothing in life is to be feared, it is only to be understood."
  }
];

export function CouncilGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="gradient-text mb-6">The AI Council</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Sensay Island's governance is entrusted to the AI Council - a collective of 17 artificial intelligence entities, 
              each modeled after leaders who shaped human civilization with their wisdom, ethics, and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {councilMembers.map((member, index) => (
              <CouncilMember 
                key={index}
                name={member.name}
                title={member.title}
                portrait={member.portrait}
                shortBio={member.shortBio}
                fullBio={member.fullBio}
                quote={member.quote}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-600 italic">
              * The council consists of 17 members. Above are 6 representative examples.
            </p>
          </div>

          <div className="mt-20 bg-gray-50 rounded-xl p-8">
            <h3 className="gradient-text mb-6 text-center">Decision Making Process</h3>
            
            <div className="relative">
              {/* This is a placeholder for a more complex flow diagram */}
              <div className="flex flex-col md:flex-row justify-between items-center text-center">
                <div className="bg-white p-6 rounded-lg shadow mb-4 md:mb-0 md:w-1/4">
                  <div className="bg-sensay-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sensay-blue text-xl font-bold">1</span>
                  </div>
                  <h5 className="mb-2">Issue Identification</h5>
                  <p className="text-sm text-gray-600">Problems are presented to the Council with relevant data.</p>
                </div>
                
                <div className="hidden md:block text-sensay-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow mb-4 md:mb-0 md:w-1/4">
                  <div className="bg-sensay-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sensay-blue text-xl font-bold">2</span>
                  </div>
                  <h5 className="mb-2">Deliberation</h5>
                  <p className="text-sm text-gray-600">Each AI entity provides perspective based on their domain expertise.</p>
                </div>
                
                <div className="hidden md:block text-sensay-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow md:w-1/4">
                  <div className="bg-sensay-blue/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-sensay-blue text-xl font-bold">3</span>
                  </div>
                  <h5 className="mb-2">Consensus Formation</h5>
                  <p className="text-sm text-gray-600">Consensus protocol synthesizes inputs into a final decision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CouncilGrid;
