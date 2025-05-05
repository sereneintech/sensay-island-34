
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, CheckCircle, User, Briefcase, HeartHandshake, CheckCheck } from "lucide-react";

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
  
  const [completedSteps, setCompletedSteps] = useState({
    personal: false,
    professional: false,
    motivation: false
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
        title: "Application Submitted Successfully!",
        description: "We're excited to review your application for Sensay Island citizenship.",
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
      setCompletedSteps({
        personal: false,
        professional: false,
        motivation: false
      });
    }, 1500);
  };

  const goToNextStep = () => {
    if (activeTab === "personal") {
      setCompletedSteps(prev => ({ ...prev, personal: true }));
      setActiveTab("professional");
    } else if (activeTab === "professional") {
      setCompletedSteps(prev => ({ ...prev, professional: true }));
      setActiveTab("motivation");
    } else if (activeTab === "motivation") {
      setCompletedSteps(prev => ({ ...prev, motivation: true }));
      setActiveTab("review");
    }
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

  const getStepIcon = (step: string) => {
    if ((step === "personal" && activeTab === "personal") || 
        (step === "professional" && activeTab === "professional") || 
        (step === "motivation" && activeTab === "motivation") || 
        (step === "review" && activeTab === "review")) {
      return "active";
    }
    
    if ((step === "personal" && completedSteps.personal) || 
        (step === "professional" && completedSteps.professional) || 
        (step === "motivation" && completedSteps.motivation)) {
      return "completed";
    }
    
    return "inactive";
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-lg border-sensay-stone/20">
            <h2 className="text-center mb-4 text-sensay-navy">Citizenship Application</h2>
            <p className="text-center text-gray-600 mb-8">Complete all sections to submit your application</p>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-sensay-stone/30">
                <TabsTrigger value="personal" className="data-[state=active]:bg-sensay-teal data-[state=active]:text-white relative">
                  <div className="flex items-center">
                    {getStepIcon("personal") === "completed" ? (
                      <CheckCircle className="mr-2 h-4 w-4 text-sensay-teal" />
                    ) : (
                      <User className="mr-2 h-4 w-4" />
                    )}
                    <span className="hidden md:inline">Personal</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="professional" className="data-[state=active]:bg-sensay-teal data-[state=active]:text-white">
                  <div className="flex items-center">
                    {getStepIcon("professional") === "completed" ? (
                      <CheckCircle className="mr-2 h-4 w-4 text-sensay-teal" />
                    ) : (
                      <Briefcase className="mr-2 h-4 w-4" />
                    )}
                    <span className="hidden md:inline">Professional</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="motivation" className="data-[state=active]:bg-sensay-teal data-[state=active]:text-white">
                  <div className="flex items-center">
                    {getStepIcon("motivation") === "completed" ? (
                      <CheckCircle className="mr-2 h-4 w-4 text-sensay-teal" />
                    ) : (
                      <HeartHandshake className="mr-2 h-4 w-4" />
                    )}
                    <span className="hidden md:inline">Motivation</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger value="review" className="data-[state=active]:bg-sensay-teal data-[state=active]:text-white">
                  <div className="flex items-center">
                    <CheckCheck className="mr-2 h-4 w-4" />
                    <span className="hidden md:inline">Review</span>
                  </div>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="personal" className="space-y-6 animate-fade-in">
                <div className="bg-sensay-stone/10 p-4 rounded-md mb-6">
                  <h3 className="text-sensay-navy mb-2 font-semibold">Personal Information</h3>
                  <p className="text-sm text-gray-600">Tell us about yourself. This information will be used for identification purposes.</p>
                </div>
                
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
                      className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
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
                      className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
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
                    className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
                  />
                  <p className="text-xs text-gray-500 mt-1">We'll never share your email with anyone else.</p>
                </div>

                <div className="flex justify-end pt-4">
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center group transition-all"
                    size="lg"
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="professional" className="space-y-6 animate-fade-in">
                <div className="bg-sensay-stone/10 p-4 rounded-md mb-6">
                  <h3 className="text-sensay-navy mb-2 font-semibold">Professional Background</h3>
                  <p className="text-sm text-gray-600">Share your professional experience. Sensay Island values diverse skills and expertise.</p>
                </div>
                
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
                    className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
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
                    className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
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
                    className="border-sensay-stone/30 focus-visible:ring-sensay-teal"
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center group transition-all"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center group transition-all"
                    size="lg"
                  >
                    Next Step <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="motivation" className="space-y-6 animate-fade-in">
                <div className="bg-sensay-stone/10 p-4 rounded-md mb-6">
                  <h3 className="text-sensay-navy mb-2 font-semibold">Your Motivation</h3>
                  <p className="text-sm text-gray-600">Tell us why you want to join our community and how you envision contributing to Sensay Island.</p>
                </div>
                
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
                    className="min-h-[120px] border-sensay-stone/30 focus-visible:ring-sensay-teal"
                    placeholder="Share your reasons for wanting to join our community..."
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
                    className="min-h-[120px] border-sensay-stone/30 focus-visible:ring-sensay-teal"
                    placeholder="Tell us about the skills, knowledge, or passion you would bring..."
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center group transition-all"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
                  <Button 
                    onClick={goToNextStep}
                    disabled={!isStepComplete()}
                    className="flex items-center group transition-all"
                    size="lg"
                  >
                    Review Application <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="review" className="space-y-6 animate-fade-in">
                <div className="bg-sensay-teal/10 p-4 rounded-md mb-6">
                  <h3 className="text-sensay-navy mb-2 font-semibold">Review Your Application</h3>
                  <p className="text-sm text-gray-600">Please review all information before submitting. You can go back to any section to make changes.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-md border border-sensay-stone/20 hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-3 text-sensay-navy flex items-center">
                    <User className="mr-2 h-5 w-5 text-sensay-teal" /> Personal Information
                  </h3>
                  <div className="space-y-2 pl-7">
                    <p><span className="font-semibold">Name:</span> {formData.firstName} {formData.lastName}</p>
                    <p><span className="font-semibold">Email:</span> {formData.email}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-md border border-sensay-stone/20 hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-3 text-sensay-navy flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-sensay-teal" /> Professional Background
                  </h3>
                  <div className="space-y-2 pl-7">
                    <p><span className="font-semibold">Profession:</span> {formData.profession}</p>
                    {formData.specialization && <p><span className="font-semibold">Specialization:</span> {formData.specialization}</p>}
                    {formData.experience && <p><span className="font-semibold">Experience:</span> {formData.experience}</p>}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-md border border-sensay-stone/20 hover:shadow-md transition-shadow">
                  <h3 className="font-medium mb-3 text-sensay-navy flex items-center">
                    <HeartHandshake className="mr-2 h-5 w-5 text-sensay-teal" /> Your Motivation
                  </h3>
                  <div className="space-y-2 pl-7">
                    <div>
                      <p className="font-semibold mb-1">Why Sensay Island:</p>
                      <p className="text-gray-700">{formData.motivation}</p>
                    </div>
                    {formData.contribution && (
                      <div className="mt-4">
                        <p className="font-semibold mb-1">Potential Contribution:</p>
                        <p className="text-gray-700">{formData.contribution}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-start gap-2 pt-4 bg-sensay-gold/10 p-4 rounded-md">
                  <Checkbox
                    id="terms"
                    checked={formData.agreedToTerms}
                    onCheckedChange={handleCheckboxChange}
                    required
                    className="data-[state=checked]:bg-sensay-teal data-[state=checked]:border-sensay-teal"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the terms and conditions and confirm that all information provided is accurate*
                  </label>
                </div>

                <div className="flex justify-between pt-4">
                  <Button 
                    variant="outline" 
                    onClick={goToPreviousStep}
                    className="flex items-center group transition-all"
                  >
                    <ChevronLeft className="mr-1 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Previous
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.agreedToTerms}
                    className="min-w-[200px] bg-sensay-teal hover:bg-sensay-teal/90 group transition-all"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Submit Application
                        <CheckCircle className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                      </span>
                    )}
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
