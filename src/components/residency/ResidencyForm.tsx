
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ResidencyForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    specialization: "",
    experience: "",
    motivation: "",
    contribution: "",
    agreedToTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreedToTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        specialization: "",
        experience: "",
        motivation: "",
        contribution: "",
        agreedToTerms: false
      });
      setActiveTab("personal");
    }, 1500);
  };

  const goToNextStep = () => {
    if (activeTab === "personal") setActiveTab("professional");
    else if (activeTab === "professional") setActiveTab("motivation");
    else if (activeTab === "motivation") setActiveTab("review");
  };

  const goToPreviousStep = () => {
    if (activeTab === "review") setActiveTab("motivation");
    else if (activeTab === "motivation") setActiveTab("professional");
    else if (activeTab === "professional") setActiveTab("personal");
  };

  const isStepComplete = () => {
    if (activeTab === "personal") {
      return !!formData.firstName && !!formData.lastName && !!formData.email;
    } else if (activeTab === "professional") {
      return !!formData.profession;
    } else if (activeTab === "motivation") {
      return !!formData.motivation;
    }
    return true;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-center mb-8">Citizenship Application</h2>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="motivation">Motivation</TabsTrigger>
                <TabsTrigger value="review">Review</TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name*
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name*
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center"
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="professional" className="space-y-6">
                <div>
                  <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Profession*
                  </label>
                  <Input
                    id="profession"
                    name="profession"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
                    Specialization or Field (Optional)
                  </label>
                  <Input
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience (Optional)
                  </label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                  </Button>
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center"
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="motivation" className="space-y-6">
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to become a citizen of Sensay Island?*
                  </label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    className="min-h-[120px]"
                  />
                </div>

                <div>
                  <label htmlFor="contribution" className="block text-sm font-medium text-gray-700 mb-1">
                    How do you hope to contribute to our community? (Optional)
                  </label>
                  <Textarea
                    id="contribution"
                    name="contribution"
                    value={formData.contribution}
                    onChange={handleChange}
                    className="min-h-[120px]"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                  </Button>
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center"
                  >
                    Review Application <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="review" className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-3">Personal Information</h3>
                  <p><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</p>
                  <p><span className="font-semibold">Email:</span> {formData.email}</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-3">Professional Background</h3>
                  <p><span className="font-semibold">Profession:</span> {formData.profession}</p>
                  {formData.specialization && <p><span className="font-semibold">Specialization:</span> {formData.specialization}</p>}
                  {formData.experience && <p><span className="font-semibold">Experience:</span> {formData.experience}</p>}
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h3 className="font-medium mb-3">Your Motivation</h3>
                  <p><span className="font-semibold">Why Sensay Island:</span> {formData.motivation}</p>
                  {formData.contribution && <p><span className="font-semibold">Potential Contribution:</span> {formData.contribution}</p>}
                </div>

                <div className="flex items-start gap-2 pt-4">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the terms and conditions and confirm that all information provided is accurate*
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4" /> Previous
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.agreedToTerms}
                    className="min-w-[200px]"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}
