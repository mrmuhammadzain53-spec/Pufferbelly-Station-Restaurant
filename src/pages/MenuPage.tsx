import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].title);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setIsScrolled(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Height of sticky navs
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveCategory(id);
    }
  };

  return (
    <div className="min-h-screen bg-secondary/20 pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-breakfast.jpg"
            alt="Diner Menu"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4 text-secondary/80 text-sm font-bold uppercase tracking-widest">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span>Full Menu</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4">Our Full Menu</h1>
            <p className="text-xl md:text-2xl font-light text-white/90">Freshly made comfort food served daily from 6:00 AM</p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className={`sticky top-[72px] z-40 bg-white shadow-md transition-all duration-300 ${isScrolled ? 'opacity-100' : 'opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto no-scrollbar space-x-8 py-4 scroll-smooth">
            {menuData.map((category) => (
              <button
                key={category.title}
                onClick={() => scrollToSection(category.title)}
                className={`whitespace-nowrap text-sm font-bold uppercase tracking-widest pb-1 border-b-2 transition-all ${
                  activeCategory === category.title
                    ? 'border-primary text-primary'
                    : 'border-transparent text-foreground/50 hover:text-primary'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-24">
          {menuData.map((category) => (
            <section key={category.title} id={category.title} className="scroll-mt-40">
              <div className="flex items-center gap-4 mb-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{category.title}</h2>
                <div className="flex-grow h-px bg-primary/20"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-start group"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                        {item.isPopular && (
                          <span className="bg-primary/10 text-primary text-[10px] font-bold uppercase px-2 py-0.5 rounded-full flex items-center gap-1">
                            <Star size={10} fill="currentColor" /> Popular
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-foreground/60 max-w-sm leading-relaxed">
                        {item.description || "A delicious house favorite made with fresh ingredients and traditional techniques."}
                      </p>
                    </div>
                    <div className="text-xl font-heading font-bold text-primary ml-4">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Final CTA */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Enjoy Your Meal?</h2>
          <p className="text-xl text-white/80 mb-10">We're open daily until 2:00 PM. Come on by for the best breakfast in Grand Junction!</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://order.online/store/-30923616/?delivery=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-accent px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Order Online Now
            </a>
            <a
              href="tel:+19702421600"
              className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary transition-all shadow-xl flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
