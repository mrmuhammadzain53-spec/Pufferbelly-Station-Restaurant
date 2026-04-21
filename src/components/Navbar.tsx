import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled || location.pathname !== '/'
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-heading font-bold leading-none",
            isScrolled || location.pathname !== '/' ? "text-primary" : "text-white"
          )}>
            Pufferbelly Station
          </span>
          <span className={cn(
            "text-xs tracking-widest uppercase",
            isScrolled || location.pathname !== '/' ? "text-accent" : "text-white/80"
          )}>
            Restaurant & Diner
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled || location.pathname !== '/' ? "text-foreground" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#order-online"
            className="bg-secondary text-accent px-6 py-2 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all shadow-lg"
          >
            Order Online
          </a>
          <Link
            to="/menu"
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all shadow-lg"
          >
            View Menu
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled || location.pathname !== '/' ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled || location.pathname !== '/' ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4 animate-in slide-in-from-top duration-300 border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-foreground hover:text-primary border-b border-gray-100 pb-2"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#order-online"
            onClick={() => setIsOpen(false)}
            className="bg-secondary text-accent text-center py-3 rounded-lg font-bold"
          >
            Order Online
          </a>
          <Link
            to="/menu"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center py-3 rounded-lg font-bold"
          >
            View Full Menu
          </Link>
          <a
            href="tel:+19702421600"
            className="flex items-center justify-center space-x-2 text-primary font-bold"
          >
            <Phone size={18} />
            <span>(970) 242-1600</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
