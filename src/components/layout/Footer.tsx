
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="font-merriweather font-bold text-xl">
              <span className="text-sensay-blue">Sensay</span>{" "}
              <span className="text-sensay-green">Island</span>
            </h4>
            <p className="mt-4 text-gray-600 text-sm">
              A sovereign micronation governed by an AI Council, dedicated to ethical AI advancement and human flourishing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-merriweather text-lg font-semibold mb-4">Navigation</h5>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">About</Link></li>
              <li><Link to="/government" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">AI Government</Link></li>
              <li><Link to="/charter" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Charter</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h5 className="font-merriweather text-lg font-semibold mb-4">Participate</h5>
            <ul className="space-y-2">
              <li><Link to="/residency" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Residency</Link></li>
              <li><Link to="/research" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Research</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">News</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="font-merriweather text-lg font-semibold mb-4">Contact</h5>
            <address className="not-italic text-gray-600 space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <MapPin size={16} />
                <span>Philippines Archipelago</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Mail size={16} />
                <a href="mailto:info@sensayisland.org" className="hover:text-sensay-blue transition-colors">
                  info@sensayisland.org
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {year} Sensay Island. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex gap-4">
              <Link to="/privacy" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Privacy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-sensay-blue transition-colors text-sm">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
