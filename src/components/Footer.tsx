import { Phone, MapPin, Clock, MessageSquare, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-accent text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="font-heading text-2xl font-bold text-secondary">Pufferbelly Station</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Serving Grand Junction's favorite homemade comfort food since the tracks were laid. Quality, portions, and community.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-secondary transition-colors"><MessageSquare size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Camera size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/menu" className="hover:text-secondary transition-colors">Full Menu</Link></li>
            <li><a href="/#order-online" className="hover:text-secondary transition-colors font-bold text-secondary">Order Online</a></li>
            <li><a href="#about" className="hover:text-secondary transition-colors">Our Story</a></li>
            <li><a href="#reservations" className="hover:text-secondary transition-colors">Book a Table</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3">
              <MapPin className="text-secondary shrink-0" size={18} />
              <span>337 S 1st St,<br />Grand Junction, CO 81501</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-secondary shrink-0" size={18} />
              <span>(970) 242-1600</span>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="text-secondary shrink-0" size={18} />
              <span>Open Daily<br />6:00 AM - 2:00 PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter / CTA */}
        <div>
          <h4 className="font-heading text-lg font-bold mb-6">Visit Us</h4>
          <p className="text-sm text-white/70 mb-4">Ready for the best breakfast in town?</p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-white px-6 py-2 rounded font-bold hover:bg-primary/90 transition-all text-sm"
          >
            See What's Cooking
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Pufferbelly Station Restaurant. All rights reserved. Serving comfort on every plate.</p>
      </div>
    </footer>
  );
};

export default Footer;
