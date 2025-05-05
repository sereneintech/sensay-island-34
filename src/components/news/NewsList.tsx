
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const newsItems = [
  {
    id: 1,
    title: "Dan Thomson Establishes Sensay Island — World's First AI-Governed Community",
    date: "April 21, 2025",
    excerpt: "Today marks the official announcement of Sensay Island, a groundbreaking micronation founded on the principles of ethical AI governance and human flourishing.",
    category: "Press Release",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 2,
    title: "Charter Ratification Ceremony Set for July 2025",
    date: "May 15, 2025",
    excerpt: "The Foundational Charter of Sensay Island will be formally ratified in a ceremony combining traditional and digital elements, streaming globally.",
    category: "Announcement",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b"
  },
  {
    id: 3,
    title: "Research Fellowship Applications Open for 2026 Cohort",
    date: "June 3, 2025",
    excerpt: "Scientists and researchers in AI ethics, renewable energy, and sustainable governance are invited to apply for the inaugural fellowship program.",
    category: "Opportunity",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }
];

export function NewsList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
                <div 
                  className="h-48 bg-gray-200 relative"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute top-4 left-4 bg-sensay-blue text-white text-xs font-semibold px-2 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{item.excerpt}</p>
                  <Button asChild variant="link" className="p-0 justify-start text-sensay-blue hover:text-sensay-green">
                    <Link to={`/news/${item.id}`}>Read Full Article</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-sensay-blue hover:bg-sensay-blue/90">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsList;
