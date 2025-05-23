
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const timelineEvents = [
  {
    date: "2025",
    title: "Foundational Milestone",
    description: "Purchase of island & ratification of the Foundational Charter.",
    link: "/charter"
  },
  {
    date: "2026",
    title: "First Cohort Arrives",
    description: "First cohort of observers and researchers arrive; renewable-energy micro-grid comes online.",
    link: "/residency"
  },
  {
    date: "2027",
    title: "Residency Program Opens",
    description: "Resident program opens; Environmental Sanctuary declared over 60% of island.",
    link: "/residency"
  },
  {
    date: "2028",
    title: "Global Symposium",
    description: "Global AI-Governance Symposium hosted on Sensay Island.",
    link: "/news"
  }
];

export function Timeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center gradient-text mb-16">Milestone Timeline</h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-sensay-blue/20 -translate-x-1/2 hidden md:block"></div>

            {timelineEvents.map((event, index) => (
              <div key={index} className="mb-12 md:mb-0">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Timeline point */}
                  <div className="hidden md:block w-1/2"></div>
                  <div className="md:absolute md:left-1/2 md:-translate-x-1/2 z-10 w-10 h-10 rounded-full bg-white border-4 border-sensay-blue flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-sensay-blue"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2 md:px-8 mb-12 md:mb-24">
                    <Card className={`p-6 hover:shadow-lg transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                      <p className="text-sm font-semibold text-sensay-blue">{event.date}</p>
                      <h4 className="mt-2 mb-2">{event.title}</h4>
                      <p className="mb-4 text-gray-600">{event.description}</p>
                      <Link 
                        to={event.link} 
                        className="text-sensay-blue hover:text-sensay-green font-medium text-sm inline-flex items-center"
                      >
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
