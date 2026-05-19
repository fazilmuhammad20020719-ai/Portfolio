import { motion } from 'framer-motion';
import { Star, MessageCircle, ShoppingBag, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    company: 'TechFlow Startup',
    platform: 'Fiverr',
    rating: 5,
    text: 'Absolutely blown away by the motion graphics! The explainer video was delivered ahead of schedule and the quality was top-tier. Highly recommend for any After Effects work.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'Michael Rodriguez',
    company: 'Content Creator',
    platform: 'Direct Client',
    rating: 5,
    text: 'He edited my YouTube videos and my viewer retention skyrocketed. The sound design, B-roll selection, and dynamic pop-ups were exactly what my channel needed.',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop'
  },
  {
    name: 'IS6FX Marketing',
    company: 'Financial Services',
    platform: 'Upwork',
    rating: 5,
    text: 'Professional, communicative, and incredibly talented. The promo video perfectly captured our brand identity and helped increase our ad conversions by 40%.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  }
];

const screenshots = [
  {
    platform: 'WhatsApp Feedback',
    icon: <MessageCircle size={16} className="text-[#25D366]" />,
    image: 'https://images.unsplash.com/photo-1614680376573-3e4e1202bc59?q=80&w=500&auto=format&fit=crop',
    aspect: 'aspect-[9/16]'
  },
  {
    platform: 'Fiverr 5-Star Delivery',
    icon: <ShoppingBag size={16} className="text-[#1dbf73]" />,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop',
    aspect: 'aspect-video md:aspect-square'
  },
  {
    platform: 'Direct Client Chat',
    icon: <MessageCircle size={16} className="text-[#25D366]" />,
    image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=500&auto=format&fit=crop',
    aspect: 'aspect-[9/16]'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Client <span className="text-[#2BD764]">Testimonials</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          Real feedback from founders, creators, and agencies I have worked with around the globe.
        </p>
      </div>

      {/* Trusted By / Client Logos Banner */}
      <motion.div 
        className="mb-24 py-8 border-y border-white/5 bg-white/[0.02]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="text-center text-gray-500 font-sans text-sm font-bold uppercase tracking-widest mb-6">Trusted by incredible brands & creators</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <h3 className="text-2xl font-black font-sans tracking-tighter">IS6FX.</h3>
          <h3 className="text-xl font-bold tracking-widest border-2 border-white px-3 py-1">MT4 PRO</h3>
          <h3 className="text-2xl font-serif italic">FMAC College</h3>
          <h3 className="text-2xl font-bold uppercase tracking-wide flex items-center gap-1"><Star fill="currentColor" size={20}/> STARTUP X</h3>
        </div>
      </motion.div>

      {/* Text Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="glass p-8 rounded-3xl relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
          >
            <Quote size={40} className="text-[#2BD764] opacity-20 absolute top-8 right-8" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={18} fill="#2BD764" className="text-[#2BD764]" />
              ))}
            </div>
            
            <p className="text-gray-300 font-sans normal-case italic text-sm md:text-base leading-relaxed mb-8 relative z-10">
              "{review.text}"
            </p>
            
            <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-[#2BD764]/50" />
              <div>
                <h4 className="text-white font-bold uppercase text-sm">{review.name}</h4>
                <p className="text-gray-400 font-sans normal-case text-xs">{review.company}</p>
              </div>
              <div className="ml-auto bg-white/5 border border-white/10 px-2 py-1 rounded text-xs font-bold text-gray-400">
                {review.platform}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold mb-4 uppercase">Real <span className="text-[#2BD764]">Feedback Screenshots</span></h3>
        <p className="text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          Authenticity matters. Here are some raw, unedited reactions and reviews from my recent deliveries.
        </p>
      </div>

      {/* Screenshots Grid (WhatsApp / Fiverr) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
        {screenshots.map((shot, index) => (
          <motion.div
            key={index}
            className="group relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
          >
            {/* Badge */}
            <div className="absolute -top-4 left-4 z-20 bg-[#0a0a0e] border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl shadow-black/50">
              {shot.icon}
              <span className="text-white text-xs font-bold uppercase tracking-wider">{shot.platform}</span>
            </div>

            {/* Screenshot Frame */}
            <div className={`w-full ${shot.aspect} glass rounded-3xl overflow-hidden border-4 border-[#121218] group-hover:border-[#2BD764] transition-colors duration-500 shadow-2xl`}>
              <img 
                src={shot.image} 
                alt={shot.platform} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-[#2BD764]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
