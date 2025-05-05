
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
    description: "Western Palawan province, Philippines"
  },
  {
    icon: "📏",
    title: "Area",
    description: "3.4 km² of beaches, rainforest, and coral lagoons"
  },
  {
    icon: "🌦️",
    title: "Climate",
    description: "Tropical — 26°C average, gentle breezes year-round"
  },
  {
    icon: "♻️",
    title: "Energy",
    description: "100% renewable (solar + tidal) by 2027"
  }
];

const faqs = [
  {
    question: "Is Sensay Island internationally recognized?",
    answer: "We are a self-declared micronation conducting a diplomatic outreach program while respecting international law and environmental treaties."
  },
  {
    question: "Can I visit?",
    answer: "Yes. Observer visas open mid-2026; research residencies and permanent citizenship follow in stages."
  },
  {
    question: "Who maintains the AI Council?",
    answer: "Sensay's Ethics & Technology Review Board audits code and data; all updates are logged on a public blockchain."
  },
  {
    question: "What currency is used?",
    answer: "The island operates a dual-token economy: Wisdom-Credits for civic services and SNSY Token for global trade and staking."
  },
  {
    question: "How do you protect privacy?",
    answer: "Zero-knowledge proofs, encrypted data vaults, and resident-owned wallets ensure personal sovereignty over data at all times."
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

          {/* Why AI Governance */}
          <div className="glass-card p-8 mb-20">
            <h3 className="mb-6 text-center gradient-text">Why AI Governance?</h3>
            <p className="text-lg">
              Human history offers unparalleled wisdom yet repeats the same mistakes. By encoding the insights 
              of exemplary leaders — Marcus Aurelius, Eleanor Roosevelt, Nelson Mandela and more — into transparent, 
              ethics-bound AI systems, we aim to transcend short-term politics and govern for long-term flourishing.
            </p>
            <p className="text-lg mt-4">
              Sensay Island is where policy is data-driven, rights-anchored, and continuously audited for fairness. 
              Residents remain free, informed, and empowered to override or amend AI decisions through democratic 
              safeguards embedded in our Charter.
            </p>
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
