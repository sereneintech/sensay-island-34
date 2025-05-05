
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export interface CouncilMemberProps {
  name: string;
  title: string;
  portrait: string;
  shortBio: string;
  fullBio: string;
  quote: string;
}

export function CouncilMember({
  name,
  title,
  portrait,
  shortBio,
  fullBio,
  quote,
}: CouncilMemberProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        className="rounded-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer group"
        onClick={() => setIsOpen(true)}
      >
        <div className="aspect-ratio-1/1 h-48 bg-gray-200 relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent to-sensay-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4"
          >
            <p className="text-white font-medium">Learn More</p>
          </div>
          <div 
            className="w-full h-full bg-gray-300"
            style={{
              backgroundImage: `url(${portrait || '/placeholder.svg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div className="p-4 border border-t-0 rounded-b-lg">
          <h4 className="font-merriweather mb-1">{name}</h4>
          <p className="text-sensay-green font-medium text-sm mb-2">{title}</p>
          <p className="text-gray-600 text-sm">{shortBio}</p>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-merriweather">{name}</DialogTitle>
            <DialogDescription className="text-sensay-green font-medium">{title}</DialogDescription>
          </DialogHeader>
          
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div>
              <div 
                className="w-full aspect-square rounded-lg bg-gray-100"
                style={{
                  backgroundImage: `url(${portrait || '/placeholder.svg'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
            
            <div className="md:col-span-2">
              <blockquote className="border-l-4 border-sensay-blue pl-4 italic mb-4 text-gray-700">
                "{quote}"
              </blockquote>
              
              <p className="text-gray-600">{fullBio}</p>
              
              <Button 
                className="mt-6 bg-sensay-blue hover:bg-sensay-blue/90"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CouncilMember;
