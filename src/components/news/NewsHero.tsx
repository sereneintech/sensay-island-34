
import { Button } from "@/components/ui/button";

export function NewsHero() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-r from-sensay-teal/10 to-sensay-jade/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="gradient-text mb-6">News & Updates</h1>
          
          <p className="text-xl mb-8 text-sensay-navy">
            Stay informed about the latest developments, research findings, and events happening on Sensay Island.
          </p>
          
          <form className="glass-card p-6 mt-8 flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-sensay-teal"
              required
            />
            <Button type="submit" className="bg-sensay-teal hover:bg-sensay-teal/90">
              Subscribe to Updates
            </Button>
          </form>
          <p className="text-sm text-sensay-navy/70 mt-2">
            Receive quarterly dispatches on governance experiments, research findings, and residency openings.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewsHero;
