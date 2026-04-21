import { motion } from 'framer-motion';
import { ChefHat, ShoppingBag } from 'lucide-react';

const signatureItems = [
  {
    name: "Famous Cinnamon Rolls",
    price: "$6.99",
    description: "Giant, homemade, gooey cinnamon rolls with our signature cream cheese frosting. Baked fresh hourly.",
    image: "/cinnamon-rolls.jpg",
    tag: "Crowd Favorite"
  },
  {
    name: "Meat Lover’s Omelet",
    price: "$15.99",
    description: "Three farm-fresh eggs loaded with bacon, sausage, ham, and cheddar cheese. Served with hash browns.",
    image: "https://images.unsplash.com/photo-1494597564530-859f09207044?auto=format&fit=crop&q=80&w=800",
    tag: "Hearty"
  },
  {
    name: "Banana Walnut Crepes",
    price: "$12.99",
    description: "Delicate crepes stuffed with fresh bananas and toasted walnuts, drizzled with caramel sauce.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=800",
    tag: "Sweet"
  },
  {
    name: "Sirloin & Eggs",
    price: "$18.99",
    description: "6oz juicy sirloin steak cooked to your liking, served with two eggs, toast, and country potatoes.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800",
    tag: "Classic"
  },
  {
    name: "Fruity Waffles",
    price: "$11.99",
    description: "Belgian waffles topped with seasonal fresh berries, whipped cream, and a dusting of powdered sugar.",
    image: "https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?auto=format&fit=crop&q=80&w=800",
    tag: "Popular"
  },
  {
    name: "Endless Pancakes",
    price: "$13.99",
    description: "Light and fluffy buttermilk pancakes. Keep 'em coming until you're full! Served with butter and syrup.",
    image: "/hero-breakfast.jpg",
    tag: "Best Value"
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4">
              Delicious & Fresh
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-brand-charcoal mb-6">
              Our Signature Dishes
            </h3>
            <p className="text-brand-charcoal/60 max-w-2xl mx-auto text-lg">
              Explore our local favorites, made from scratch every single morning. We believe in big portions and even bigger smiles.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-brand-cream/30 rounded-3xl overflow-hidden border border-brand-cream shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-red text-white text-[10px] font-bold uppercase tracking-tighter px-3 py-1 rounded-full shadow-lg">
                    {item.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg font-bold text-brand-red shadow-md">
                  {item.price}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-display font-bold mb-3 text-brand-charcoal group-hover:text-brand-red transition-colors">
                  {item.name}
                </h4>
                <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                <button className="w-full py-3 bg-white border border-brand-red text-brand-red rounded-xl font-bold flex items-center justify-center space-x-2 group-hover:bg-brand-red group-hover:text-white transition-all">
                  <ChefHat size={18} />
                  <span>Order Now</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-3 text-brand-red font-bold text-lg hover:underline underline-offset-8"
          >
            <span>View Full Menu</span>
            <ShoppingBag size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
