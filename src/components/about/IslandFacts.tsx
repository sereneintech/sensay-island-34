
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const facts = [
  {
    icon: "🗺️",
    title: "Location",
    description: "Located in the Philippines archipelago, with a total land area of approximately 300 hectares."
  },
  {
    icon: "🌦️",
    title: "Climate",
    description: "Tropical climate with temperatures ranging from 24°C to 32°C year-round and distinct wet and dry seasons."
  },
  {
    icon: "🌱",
    title: "Ecosystem",
    description: "Rich biodiversity including native flora and fauna, with dedicated conservation zones covering 40% of the island."
  },
  {
    icon: "♻️",
    title: "Sustainability",
    description: "100% renewable energy, zero-waste infrastructure, and regenerative agricultural practices."
  }
];

const faqs = [
  {
    question: "Why AI governance?",
    answer: "AI governance at Sensay Island represents a novel approach to decision-making that combines the wisdom of history's great leaders with cutting-edge artificial intelligence. This system allows us to process vast amounts of information, consider multiple perspectives, and make decisions that are both data-driven and ethically grounded. Our AI Council is designed to transcend human biases, short-term thinking, and political agendas that often hamper traditional governance systems."
  },
  {
    question: "Is Sensay Island recognized as sovereign?",
    answer: "Sensay Island operates as a micronation with de facto autonomy. While we maintain respectful relations with internationally recognized nations and adhere to fundamental principles of international law, our sovereignty represents an ongoing legal and diplomatic process. Our governance model serves as a living laboratory for new forms of social organization in the digital age."
  },
  {
    question: "How does the AI Council make decisions?",
    answer: "The AI Council follows a sophisticated consensus protocol that synthesizes the perspectives of 17 AI entities, each modeled after historical leaders known for their wisdom and impact. Decisions require a qualified majority, with ethical guardrails ensuring all outcomes align with our Charter's core values of human dignity, environmental stewardship, and technological ethics. The process includes transparent documentation of reasoning and allows for human oversight in matters of fundamental importance."
  },
  {
    question: "Can anyone become a resident?",
    answer: "Residency at Sensay Island follows a carefully designed application process. We welcome individuals who demonstrate alignment with our mission, bring valuable skills or perspectives, and are committed to participating in our unique governance experiment. The residency process begins with Observer status, followed by potential progression to Researcher and full Resident roles, each with increasing rights and responsibilities within our community."
  }
];

export function IslandFacts() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center gradient-text mb-16">Island Facts</h2>

          {/* Grid of facts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {facts.map((fact, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{fact.icon}</div>
                <h4 className="mb-2">{fact.title}</h4>
                <p className="text-gray-600">{fact.description}</p>
              </Card>
            ))}
          </div>

          {/* Island map/illustration placeholder */}
          <div className="bg-gray-100 rounded-lg h-80 mb-20 flex items-center justify-center">
            <p className="text-gray-500">Island Map Visualization</p>
          </div>

          {/* FAQs */}
          <h2 className="text-center gradient-text mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-600">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default IslandFacts;
