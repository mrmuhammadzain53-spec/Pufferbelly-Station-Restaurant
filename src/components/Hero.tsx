import { ArrowRight, Star, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
        style={{
          backgroundImage: 'url("/hero-breakfast.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white mt-16 md:mt-0"
        >
          {/* Trust Signal Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6 group hover:bg-white/20 transition-colors">
            <span className="flex items-center text-yellow-400">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/90">
              Local Favorite | 2,000+ Reviews
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6 tracking-tight">
            Classic American <br />
            <span className="text-brand-cream italic font-accent lowercase font-normal">Breakfast & Lunch</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 font-sans max-w-lg mb-10 leading-relaxed font-medium">
            Homemade comfort food, generous portions, and a warm diner experience in the heart of Grand Junction.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a 
              href="#menu" 
              className="px-8 py-4 bg-brand-red text-white rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-2xl hover:bg-red-800 transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              <span>Explore Menu</span>
              <ArrowRight size={20} />
            </a>
            <a 
              href="#location" 
              className="px-8 py-4 bg-white text-brand-charcoal rounded-xl font-bold text-lg flex items-center justify-center space-x-2 shadow-xl hover:bg-gray-50 transition-all hover:translate-y-[-2px] active:translate-y-[0px]"
            >
              <MapPin size={20} className="text-brand-red" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="mt-12 flex items-center space-x-4 animate-bounce-slow">
             <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-lg blur-md opacity-40 animate-pulse"></div>
                <div className="relative bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-sm transform rotate-[-2deg]">
                  Get 10% Off Your First Visit!
                </div>
             </div>
          </div>
        </motion.div>
      </div>

      {/* Social Proof Stats on Scroll */}
      <div className="hidden lg:flex absolute bottom-12 right-12 z-10 flex-col items-end text-white/70 font-sans tracking-[0.2em] text-[10px] space-y-2 uppercase font-semibold">
        <p>Serving Since 19XX</p>
        <p>Homemade Everyday</p>
      </div>
    </div>
  );
};

export default Hero;
