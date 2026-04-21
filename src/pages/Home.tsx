import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Clock, MapPin, Phone, ChefHat, Users, Award, Coffee, ArrowRight, ShoppingBag, Truck } from 'lucide-react';

const Home = () => {
  const signatureDishes = [
    {
      name: "Famous Cinnamon Rolls",
      description: "Huge, fluffy, and dripping with homemade cream cheese frosting. Baked fresh daily.",
      price: "$2.60",
      image: "/images/cinnamon-rolls.jpg",
    },
    {
      name: "Meat Lover's Omelet",
      description: "Fluffy 3-egg omelet loaded with bacon, ham, sausage, and melted cheddar.",
      price: "$13.00",
      image: "/images/omelet.jpg",
    },
    {
      name: "Endless Pancakes",
      description: "Fluffy buttermilk pancakes served until you say stop! A local favorite.",
      price: "$6.00",
      image: "/images/hero-breakfast.jpg", // Reusing for variety
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "The cinnamon rolls are life-changing! Huge portions and the staff makes you feel like family.",
      rating: 5,
    },
    {
      name: "John D.",
      text: "Best breakfast in Grand Junction. The Meat Lover's Omelet is absolutely massive and delicious.",
      rating: 5,
    },
    {
      name: "Elena R.",
      text: "True American diner experience. Fast service, great coffee, and very reasonable prices.",
      rating: 5,
    },
  ];

  return (
    <div className="pt-0 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-breakfast.jpg"
            alt="Delicious Breakfast"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-primary/90 text-white px-4 py-1 rounded-full text-sm font-bold inline-block mb-6 tracking-widest uppercase">
              Grand Junction's Favorite
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Classic American Breakfast & Lunch — Made Fresh Every Day
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light leading-relaxed">
              Homemade comfort food, generous portions, and a warm diner experience in the heart of Grand Junction.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/menu"
                className="bg-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-all shadow-xl flex items-center gap-2"
              >
                View Full Menu <ArrowRight size={20} />
              </Link>
              <a
                href="#order-online"
                className="bg-secondary text-accent px-10 py-4 rounded-full text-lg font-bold hover:bg-secondary/90 transition-all shadow-xl"
              >
                Order Online
              </a>
              <a
                href="#contact"
                className="bg-white text-primary px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-xl"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <span className="text-sm font-medium">4.5 Rating | 2,000+ Reviews</span>
              </div>
              <div className="h-10 w-px bg-white/20 hidden sm:block"></div>
              <div className="hidden sm:flex items-center gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg backdrop-blur-sm">
                  <Award className="text-secondary" size={24} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider text-secondary">Local Favorite</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <div className="bg-accent py-6 text-white overflow-hidden whitespace-nowrap relative">
        <div className="flex animate-marquee space-x-12 px-6">
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Clock size={18} className="text-secondary" /> Open Daily until 2:00 PM</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Coffee size={18} className="text-secondary" /> Best Coffee in Grand Junction</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><ChefHat size={18} className="text-secondary" /> Homemade Cinnamon Rolls</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Users size={18} className="text-secondary" /> Family Friendly Dining</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><MapPin size={18} className="text-secondary" /> 337 S 1st St, Grand Junction</span>
          
          {/* Duplicate for seamless scroll */}
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Clock size={18} className="text-secondary" /> Open Daily until 2:00 PM</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Coffee size={18} className="text-secondary" /> Best Coffee in Grand Junction</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><ChefHat size={18} className="text-secondary" /> Homemade Cinnamon Rolls</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><Users size={18} className="text-secondary" /> Family Friendly Dining</span>
          <span className="flex items-center gap-2 font-bold uppercase tracking-widest"><MapPin size={18} className="text-secondary" /> 337 S 1st St, Grand Junction</span>
        </div>
      </div>

      {/* Order Online Section */}
      <section className="py-24 bg-white" id="order-online">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Order Online — Fast & Easy</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Choose your preferred platform and enjoy your favorite Pufferbelly meals at home.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Main Order Button */}
            <a
              href="https://order.online/store/-30923616/?delivery=true&hideModal=true&utm_source=gfo&rwg_token=AFd1xnHiNEvKvKCgNvWfS0LeNf0eSmjNk_eu75X3jK42d4j7FWloF6bNXpOmI4QtjHAozTDUnJG-brNpi0AyUh5CBnnyVsiPEw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-primary text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-primary/20 hover:-translate-y-1"
            >
              <div className="absolute -top-4 -right-2 bg-secondary text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-10">
                Most Popular
              </div>
              <ShoppingBag size={56} className="mb-4 text-secondary" />
              <span className="text-3xl font-bold font-heading">Order Online Now</span>
              <span className="text-sm text-white/80 mt-2 font-medium">Fast delivery available directly through our store</span>
            </a>

            {/* Uber Eats */}
            <a
              href="https://www.ubereats.com/store/pufferbelly-station-restaurant/wig8D0wTVsKufpE43zgXug?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-gray-800 hover:-translate-y-1"
            >
              <div className="text-4xl font-bold mb-4 flex items-center gap-2 italic">
                Uber <span className="text-[#06C167]">Eats</span>
              </div>
              <span className="text-xl font-bold">Order with Uber Eats</span>
            </a>

            {/* DoorDash */}
            <a
              href="https://www.doordash.com/store/pufferbelly-restaurant-grand-junction-30923616/?utm_campaign=gpa"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#FF3008] text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-[#FF3008]/20 hover:-translate-y-1"
            >
              <div className="mb-4 bg-white rounded-2xl p-4 flex items-center justify-center">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="#FF3008"><path d="M23.012 11.412s-3.415-4.46-9.15-4.46c-5.735 0-9.148 4.46-9.148 4.46a.654.654 0 000 .817s3.413 4.46 9.148 4.46c5.735 0 9.15-4.46 9.15-4.46a.654.654 0 000-.817zM13.862 14.54a2.71 2.71 0 110-5.42 2.71 2.71 0 010 5.42z"/></svg>
              </div>
              <span className="text-xl font-bold">Order with DoorDash</span>
            </a>

            {/* Pickup */}
            <a
              href="https://order.online/store/-30923616/?pickup=true"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-accent text-white p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-accent/20 hover:-translate-y-1"
            >
              <div className="absolute -top-4 -right-2 bg-secondary text-accent px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-10">
                Skip the Line
              </div>
              <Truck size={56} className="mb-4 text-secondary" />
              <span className="text-2xl font-bold font-heading">Order for Pickup</span>
              <span className="text-sm text-white/80 mt-2">Ready when you arrive</span>
            </a>

            {/* Postmates */}
            <a
              href="https://postmates.com/store/pufferbelly-station-restaurant/wig8D0wTVsKufpE43zgXug?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#F7F7F7] text-black p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-black/5 hover:-translate-y-1"
            >
               <span className="text-3xl font-black mb-4 tracking-tighter">POSTMATES</span>
               <span className="text-xl font-bold">Order with Postmates</span>
            </a>

            {/* Call Direct */}
            <a
              href="tel:+19702421600"
              className="group bg-secondary text-accent p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all flex flex-col items-center justify-center border-4 border-transparent hover:border-secondary/50 hover:-translate-y-1"
            >
               <Phone size={56} className="mb-4" />
               <span className="text-2xl font-bold font-heading">Call to Order</span>
               <span className="text-sm font-bold mt-2 opacity-80">(970) 242-1600</span>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Why Choose Pufferbelly?</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-primary mb-4 flex justify-center"><ChefHat size={32} /></div>
                <h3 className="font-heading text-lg font-bold mb-2">Homemade Cooking</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">Recipes passed down through generations.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-primary mb-4 flex justify-center"><Users size={32} /></div>
                <h3 className="font-heading text-lg font-bold mb-2">Generous Portions</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">No one leaves Pufferbelly hungry.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-primary mb-4 flex justify-center"><Star size={32} /></div>
                <h3 className="font-heading text-lg font-bold mb-2">Friendly Service</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">Waitstaff that knows you by name.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-primary mb-4 flex justify-center"><Coffee size={32} /></div>
                <h3 className="font-heading text-lg font-bold mb-2">Great Value</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">Quality meals at honest diner prices.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-primary mb-4 flex justify-center"><Clock size={32} /></div>
                <h3 className="font-heading text-lg font-bold mb-2">Fast Service</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">Fresh food served at railway speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="py-24" id="menu-preview">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Our Signature Specialties</h2>
              <p className="text-foreground/70">Hand-selected favorites that have kept Grand Junction coming back for years. Crafted with fresh ingredients and a lot of love.</p>
            </div>
            <Link to="/menu" className="group text-primary font-bold flex items-center gap-2 border-b-2 border-primary pb-1">
              Explore Full Menu <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {signatureDishes.map((dish, idx) => (
              <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-64 overflow-hidden relative">
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-primary text-white font-bold px-3 py-1 rounded-full shadow-lg">
                    {dish.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-3">{dish.name}</h3>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{dish.description}</p>
                  <button className="text-primary font-bold hover:underline">Order Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-accent text-white" id="about">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <div className="grid grid-cols-2 gap-4">
                <img src="/images/cinnamon-rolls.jpg" alt="Our story" className="rounded-2xl h-64 w-full object-cover" />
                <img src="/images/hero-breakfast.jpg" alt="Diner interior" className="rounded-2xl h-64 w-full object-cover mt-8" />
             </div>
             <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-2xl hidden md:block">
                <span className="text-4xl font-bold block">15+</span>
                <span className="text-sm uppercase tracking-widest font-bold">Years of Tradition</span>
             </div>
          </div>
          <div>
            <h4 className="text-secondary font-bold tracking-widest uppercase text-sm mb-4">The Pufferbelly Story</h4>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">Comfort, Nostalgia, and Real Home Cooking</h2>
            <div className="space-y-6 text-white/80 text-lg leading-relaxed">
              <p>
                Named after the classic steam locomotives that once roared through Grand Junction, Pufferbelly Station is more than just a restaurant—it's a gathering place for the community.
              </p>
              <p>
                We believe that breakfast is the most important meal of the day, and it should feel like it was cooked in your own kitchen (only with much larger portions!). Our famous cinnamon rolls are baked fresh every morning, and our coffee is always hot and plentiful.
              </p>
              <p>
                Whether you're a regular or just passing through Colorado, we're here to serve you with a smile and a plate full of comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservations */}
      <section className="py-24 bg-secondary/30" id="reservations">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center">
              <h2 className="font-heading text-4xl font-bold mb-6">Reserve Your Table</h2>
              <p className="text-white/80 mb-8 leading-relaxed">
                Planning a family brunch or a weekend breakfast meeting? Let us save you a spot!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold text-lg">(970) 242-1600</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <span>Open 6:00 AM - 2:00 PM Daily</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-foreground/50 ml-1">Name</label>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-foreground/50 ml-1">Phone</label>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-foreground/50 ml-1">Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-bold uppercase text-foreground/50 ml-1">Guests</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>4 People</option>
                      <option>6+ People</option>
                    </select>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg mt-4">
                  Reserve My Table Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">What Our Diners Say</h2>
            <div className="flex justify-center text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
            <p className="text-foreground/70">Trusted by over 1,000+ happy customers every week</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative">
                <div className="text-primary/10 absolute top-4 right-8 text-8xl font-serif">“</div>
                <p className="text-foreground/80 italic mb-8 relative z-10 leading-relaxed text-lg">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <div className="flex text-yellow-400">
                       {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-24" id="contact">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="space-y-8">
              <div>
                <h2 className="font-heading text-4xl font-bold mb-4 text-foreground">Find Us at the Station</h2>
                <p className="text-foreground/70 text-lg">We're located in the heart of Grand Junction, ready to serve you the best breakfast in town.</p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                   <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                      <MapPin size={28} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-1">Our Location</h4>
                      <p className="text-foreground/70">337 S 1st St, Grand Junction, CO 81501</p>
                      <button className="text-primary font-bold mt-2 hover:underline">Open in Google Maps</button>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                      <Clock size={28} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-1">Diner Hours</h4>
                      <p className="text-foreground/70">Open Daily: 6:00 AM – 2:00 PM</p>
                      <p className="text-primary text-sm font-bold mt-1 uppercase tracking-wider italic">Closed for Dinner—See You at Breakfast!</p>
                   </div>
                </div>

                <div className="flex items-start gap-6">
                   <div className="bg-primary/10 p-4 rounded-2xl text-primary shrink-0">
                      <Phone size={28} />
                   </div>
                   <div>
                      <h4 className="font-bold text-xl mb-1">Call to Reserve</h4>
                      <p className="text-foreground/70">(970) 242-1600</p>
                      <a href="tel:+19702421600" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold mt-4 hover:bg-primary/90 transition-all shadow-lg">Call Now</a>
                   </div>
                </div>
              </div>
           </div>
           <div className="h-[500px] bg-gray-200 rounded-[3rem] overflow-hidden shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.33593035764!2d-108.56834572343834!3d39.06015527163836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87471d436a56e545%3A0xe5435010996c9c99!2sPufferbelly%20Station%20Restaurant!5e0!3m2!1sen!2sus!4v1709654123456!5m2!1sen!2sus"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
           </div>
        </div>
      </section>

      {/* Floating Call Button for Mobile */}
      <a
        href="tel:+19702421600"
        className="fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-2xl md:hidden hover:scale-110 transition-transform active:scale-95"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default Home;
