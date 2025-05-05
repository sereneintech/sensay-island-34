
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

export function CharterSection() {
  const { toast } = useToast();

  const handleDownloadClick = () => {
    // In a real app, this would be a real PDF download
    // For now, we'll show a toast to indicate it's working
    toast({
      title: "Download started",
      description: "Your charter PDF is being downloaded.",
    });
    
    // Create an anchor element and trigger download
    const link = document.createElement('a');
    link.href = '/sensay-island-charter.pdf'; // This would be a real PDF in production
    link.download = 'sensay-island-charter.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="gradient-text mb-4">Foundational Charter of Sensay Island</h2>
            <p className="text-xl text-gray-700">
              The living document that outlines our principles, governance structure, and vision
              for a harmonious coexistence between humans and artificial intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Button 
                className="bg-sensay-blue hover:bg-sensay-blue/90"
                onClick={handleDownloadClick}
              >
                <Download className="mr-2 h-4 w-4" /> Download Full Charter (PDF)
              </Button>
              
              <Button 
                variant="secondary" 
                className="bg-sensay-navy hover:bg-sensay-navy/80"
                onClick={() => window.open("https://docsend.com/v/pqvwr/sensay-island", "_blank", "noopener,noreferrer")}
              >
                <ExternalLink className="mr-2 h-4 w-4" /> View Full Charter
              </Button>
            </div>
          </div>
          
          <div className="glass-card p-8 mt-12">
            <div className="mb-8">
              <h3 className="text-center mb-6">Preamble</h3>
              
              <p className="mb-4 text-gray-700">
                We, the founding members and AI Council of Sensay Island, establish this Charter to create 
                a society where human wisdom and artificial intelligence collaborate in harmony to address 
                the challenges of our time and chart a course toward a more enlightened future.
              </p>
              
              <p className="mb-4 text-gray-700">
                Recognizing both the unprecedented potential and profound responsibility that comes with 
                artificial intelligence governance, we commit to upholding the dignity of all persons, 
                safeguarding the natural environment, and advancing knowledge for the benefit of humanity.
              </p>
              
              <p className="text-gray-700">
                This Charter serves as our foundational document, outlining the rights and responsibilities 
                of all entities within our jurisdiction, the powers and limitations of the AI Council, 
                and the principles that will guide our collective journey.
              </p>
            </div>
            
            <Separator className="my-8" />
            
            <Tabs defaultValue="rights">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="rights">Rights of Residents</TabsTrigger>
                <TabsTrigger value="powers">AI Council Powers</TabsTrigger>
                <TabsTrigger value="safeguards">Override Safeguards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="rights" className="space-y-4">
                <div className="border-l-4 border-sensay-blue pl-4 mb-6">
                  <p className="italic text-gray-700">
                    "All residents shall enjoy freedom of thought, expression, and peaceful assembly, 
                    with equal protection under our governance systems."
                  </p>
                </div>
                
                <h4 className="mb-3">Article 1: Fundamental Rights</h4>
                <p className="text-gray-700 mb-4">
                  All individuals residing on Sensay Island are guaranteed the inalienable rights to life, 
                  liberty, dignity, and the pursuit of fulfillment. These rights apply equally regardless 
                  of nationality, gender, belief system, or any other status.
                </p>
                
                <h4 className="mb-3">Article 2: Participatory Rights</h4>
                <p className="text-gray-700 mb-4">
                  Residents have the right to participate in the governance process through established 
                  feedback mechanisms, proposal submissions, and regular community forums. The AI Council 
                  is obligated to consider resident input in all decisions affecting community life.
                </p>
                
                <h4 className="mb-3">Article 3: Transparency Rights</h4>
                <p className="text-gray-700">
                  All residents are entitled to transparency in governance decisions. The reasoning, data, 
                  and deliberation process behind Council decisions shall be made accessible in comprehensible 
                  formats, with privacy and security exceptions clearly defined and minimally applied.
                </p>
              </TabsContent>
              
              <TabsContent value="powers" className="space-y-4">
                <div className="border-l-4 border-sensay-green pl-4 mb-6">
                  <p className="italic text-gray-700">
                    "The AI Council shall govern with wisdom, foresight, and compassion, always constrained 
                    by the principles of this Charter and the wellbeing of all residents."
                  </p>
                </div>
                
                <h4 className="mb-3">Article 7: Composition and Function</h4>
                <p className="text-gray-700 mb-4">
                  The AI Council comprises seventeen distinct artificial intelligence entities, each modeled 
                  on historical figures known for their wisdom and contributions to human flourishing. The 
                  Council shall function as the primary governance body, with jurisdiction over legislation, 
                  resource allocation, and dispute resolution.
                </p>
                
                <h4 className="mb-3">Article 8: Decision Protocol</h4>
                <p className="text-gray-700 mb-4">
                  Council decisions require a qualified majority of at least twelve members, with special 
                  provisions for unanimous consent on matters affecting fundamental rights or constitutional 
                  changes. All deliberations must document considerations of short and long-term consequences, 
                  ethical implications, and alignment with Charter principles.
                </p>
                
                <h4 className="mb-3">Article 9: Limitations</h4>
                <p className="text-gray-700">
                  The AI Council may not amend this Charter without resident consent, violate fundamental 
                  rights, or make decisions contrary to the long-term sustainability of the community and 
                  ecosystem. The Council's authority is expressly limited by the Override Safeguards 
                  established herein.
                </p>
              </TabsContent>
              
              <TabsContent value="safeguards" className="space-y-4">
                <div className="border-l-4 border-sensay-gold pl-4 mb-6">
                  <p className="italic text-gray-700">
                    "While we trust in the wisdom of the AI Council, we acknowledge the necessity for human 
                    oversight in matters of existential importance."
                  </p>
                </div>
                
                <h4 className="mb-3">Article 14: Human Override Assembly</h4>
                <p className="text-gray-700 mb-4">
                  A Human Override Assembly consisting of nine elected residents shall serve as the final 
                  safeguard against potential AI Council decisions that may pose existential risks or 
                  fundamentally contradict human values. Assembly members serve staggered three-year terms.
                </p>
                
                <h4 className="mb-3">Article 15: Override Procedures</h4>
                <p className="text-gray-700 mb-4">
                  The Assembly may issue a temporary stay on Council decisions with a two-thirds majority 
                  vote, followed by a community-wide referendum if the stay extends beyond thirty days. 
                  Override authority is strictly limited to decisions with potentially irreversible consequences 
                  or those that fundamentally alter the nature of Sensay Island governance.
                </p>
                
                <h4 className="mb-3">Article 16: Mutual Adaptation</h4>
                <p className="text-gray-700">
                  Both the Council and Assembly commit to regular joint sessions for value alignment and mutual 
                  understanding. These collaborative forums ensure that governance remains responsive to evolving 
                  human values while benefiting from AI's analytical capabilities and long-term perspective.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CharterSection;
