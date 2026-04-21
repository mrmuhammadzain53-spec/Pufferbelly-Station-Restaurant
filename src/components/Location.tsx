import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">Find Us</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-charcoal mb-6">
                Your Station for <br />
                <span className="italic font-normal">Authentic Comfort</span>
              </h3>
              <p className="text-brand-charcoal/60 text-lg leading-relaxed">
                Located in the heart of Grand Junction, we're your go-to spot for hearty meals and a friendly atmosphere. Drop by today!
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="bg-brand-red p-4 rounded-2xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-brand-red/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-brand-charcoal">Address</h4>
                  <p className="text-brand-charcoal/70">337 S 1st St, Grand Junction, CO 81501</p>
                  <a 
                    href="https://maps.google.com?q=337+S+1st+St,+Grand+Junction,+CO" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-red mt-2 hover:underline"
                  >
                    Get Directions <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="bg-brand-brown p-4 rounded-2xl text-white group-hover:scale-110 transition-transform shadow-lg shadow-brand-brown/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-brand-charcoal">Phone</h4>
                  <p className="text-brand-charcoal/70">+1 (970) 242-1600</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-red mt-2">Call to Reserve Instantly</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-brand-red/10 p-4 rounded-2xl text-brand-red group-hover:scale-110 transition-transform">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-brand-charcoal">Hours</h4>
                  <p className="text-brand-charcoal/70">Monday – Sunday: 7:00 AM – 2:00 PM</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-brown mt-2">Open Daily for Your Breakfast Cravings</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative"
          >
            {/* Simple Map Placeholder with Style */}
            <div className="aspect-square bg-brand-cream/50 rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <div className="absolute inset-0 bg-texture opacity-20 pointer-events-none"></div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.3142078652496!2d-108.5714392234559!3d39.06558227144414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471d4924c58e6d%3A0xc3f3453304246061!2s337%20S%201st%20St%2C%20Grand%20Junction%2C%20CO%2081501!5e0!3m2!1sen!2sus!4v1709123456789!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pufferbelly Station Location"
              ></iframe>
            </div>

            {/* Floating Info Card */}
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-brand-red text-white p-6 rounded-3xl shadow-2xl max-w-[240px] hidden sm:block animate-bounce-slow">
               <p className="font-display font-bold text-lg mb-2">Visit Us Early!</p>
               <p className="text-sm opacity-90 leading-relaxed">Our famous cinnamon rolls sell out fast. Grab one before 10 AM!</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
