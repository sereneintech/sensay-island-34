import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-all flex flex-col items-center">
              <div className="h-12 w-12 bg-sensay-blue/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-sensay-blue" />
              </div>
              <h4 className="mb-2">Email Us</h4>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <a href="mailto:hello@sensayisland.com" className="text-sensay-blue hover:text-sensay-green transition-colors">
                hello@sensayisland.com
              </a>
              <p className="text-gray-600 mt-4 mb-2">Press Office</p>
              <a href="mailto:press@sensayisland.com" className="text-sensay-blue hover:text-sensay-green transition-colors">
                press@sensayisland.com
              </a>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all flex flex-col items-center">
              <div className="h-12 w-12 bg-sensay-green/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-sensay-green" />
              </div>
              <h4 className="mb-2">Call Us</h4>
              <p className="text-gray-600 mb-2">Press Office</p>
              <a href="tel:+12025550199" className="text-sensay-blue hover:text-sensay-green transition-colors">
                +1 202-555-0199
              </a>
              <p className="text-gray-500 text-sm mt-2">(Encrypted VoIP)</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-all flex flex-col items-center">
              <div className="h-12 w-12 bg-sensay-gold/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-sensay-gold" />
              </div>
              <h4 className="mb-2">Location</h4>
              <p className="text-gray-600">
                Western Palawan Province<br />
                Philippines Archipelago
              </p>
              <p className="text-gray-500 text-sm mt-4">
                (Exact coordinates masked for conservation purposes)
              </p>
            </Card>
          </div>
          
          <div className="mt-12 bg-gray-100 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Interactive Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
