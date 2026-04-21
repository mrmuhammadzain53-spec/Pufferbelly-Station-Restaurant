import { motion } from 'framer-motion';
import { Coffee, Heart, Utensils } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/diner-interior.jpg" 
                alt="Pufferbelly Station Interior" 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown/60 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-4xl font-display font-bold leading-tight">Since 1980</p>
                <p className="font-accent text-3xl text-yellow-400">Serving Local Families</p>
              </div>
            </div>

            {/* Floating Image Decor */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-3 rounded-2xl shadow-2xl hidden lg:block animate-bounce-slow">
              <img 
                src="/cinnamon-rolls.jpg" 
                alt="Signature Cinnamon Roll" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute inset-0 ring-4 ring-brand-red rounded-xl pointer-events-none"></div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-red inline-block"></span>
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal leading-tight">
              A Taste of Home in <br />
              <span className="italic font-normal">Grand Junction</span>
            </h3>
          </div>

          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            At Pufferbelly Station Restaurant, we believe that a great meal can fix just about anything. For over 40 years, we've been serving the community with recipes passed down through generations.
          </p>

          <p className="text-lg text-brand-charcoal/80 font-sans leading-relaxed">
            From our legendary giant cinnamon rolls to our hand-pattied burgers, everything we serve is made with love, fresh ingredients, and a generous touch of home. We're more than just a diner; we're a place where friends become family.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start space-x-4">
               <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red">
                 <Heart size={24} fill="currentColor" />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Family Owned</h4>
                 <p className="text-sm text-brand-charcoal/70">Treating everyone like kin.</p>
               </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-brand-brown/10 p-3 rounded-xl text-brand-brown">
                 <Utensils size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Fresh Ingredients</h4>
                 <p className="text-sm text-brand-charcoal/70">Quality in every bite.</p>
               </div>
            </div>
            <div className="flex items-start space-x-4">
               <div className="bg-brand-red/10 p-3 rounded-xl text-brand-red">
                 <Coffee size={24} />
               </div>
               <div>
                 <h4 className="font-bold text-lg">Daily Specials</h4>
                 <p className="text-sm text-brand-charcoal/70">Always something new.</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
