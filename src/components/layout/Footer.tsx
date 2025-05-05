
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-sensay-stone border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-dm-serif font-normal text-xl">
              <span className="text-sensay-navy">Sensay</span>{" "}
              <span className="text-sensay-teal">Island</span>
            </h4>
            <p className="mt-4 text-sensay-navy text-sm">
              A sovereign micronation governed by an AI Council, dedicated to ethical AI advancement and human flourishing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-dm-serif text-lg font-normal mb-4 text-sensay-navy">Navigation</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">About</Link></li>
              <li><Link to="/charter" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Charter</Link></li>
              <li><Link to="/news" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">News</Link></li>
              <li><Link to="/contact" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-dm-serif text-lg font-normal mb-4 text-sensay-navy">Resources</h5>
            <ul className="space-y-2">
              <li><Link to="/residency" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Residency</Link></li>
              <li><Link to="/research" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Research</Link></li>
              <li><a href="#" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">DAO Explorer</a></li>
              <li><a href="#" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">GitHub</a></li>
              <li><a href="#" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Mastodon</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-dm-serif text-lg font-normal mb-4 text-sensay-navy">Contact</h5>
            <address className="not-italic text-sensay-navy space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={16} className="text-sensay-teal" />
                <span>Philippines Archipelago</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail size={16} className="text-sensay-teal" />
                <a href="mailto:hello@sensay.island" className="hover:text-sensay-teal transition-colors">
                  hello@sensay.island
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sensay-navy text-sm">
              © {year} Sensay Island – Sovereign Micronation. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex gap-4">
              <Link to="/privacy" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Privacy</Link>
              <Link to="/terms" className="text-sensay-navy hover:text-sensay-teal transition-colors text-sm">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
