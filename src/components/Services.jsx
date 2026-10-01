import { motion } from 'framer-motion';
import { 
  Film, Play, MonitorPlay, Box, Globe, Zap, 
  Smartphone, BookOpen, Clock, RefreshCw, CheckCircle2 
} from 'lucide-react';

const services = [
  { 
    title: 'Motion Graphics', 
    desc: 'Dynamic animations, kinetic typography, and visual effects to elevate your brand storytelling.', 
    icon: <Film size={32} /> 
  },
  { 
    title: 'YouTube Editing', 
    desc: 'High-retention edits featuring engaging cuts, pop-ups, and professional sound design.', 
    icon: <Play size={32} /> 
  },
  { 
    title: 'Explainer Videos', 
    desc: 'Clear and concise animated videos designed to easily explain complex products or services.', 
    icon: <MonitorPlay size={32} /> 
  },
  { 
    title: '3D Modeling', 
    desc: 'High-quality 3D assets, character designs, and photorealistic product renders.', 
    icon: <Box size={32} /> 
  },
  { 
    title: 'Website Design', 
    desc: 'Responsive, fast, and modern web applications built with React and Tailwind CSS.', 
    icon: <Globe size={32} /> 
  },
  { 
    title: 'Logo Animation', 
    desc: 'Eye-catching, custom logo reveals and intros that leave a lasting impression.', 
    icon: <Zap size={32} /> 
  },
  { 
    title: 'Social Media Ads', 
    desc: 'High-converting, fast-paced video creatives optimized for TikTok, Instagram Reels, and Shorts.', 
    icon: <Smartphone size={32} /> 
  },
  { 
    title: 'Tutorial Videos', 
    desc: 'Professional educational and training video production with screen-recording and UI highlights.', 
    icon: <BookOpen size={32} /> 
  }
];

const packages = [
  {
    name: 'Basic',
    price: '$150',
    description: 'Perfect for short social media promos or simple edits.',
    features: ['Up to 30 Seconds Video', 'Basic Motion Graphics', '1 Platform Format', 'Royalty-Free Music'],
    delivery: '3 Days',
    revisions: '1 Revision',
    popular: false
  },
  {
    name: 'Professional',
    price: '$450',
    description: 'Ideal for detailed explainer videos or premium YouTube edits.',
    features: ['Up to 3 Minutes Video', 'Advanced Custom Animations', 'Sound Design & SFX', 'Multi-Platform Formats', 'Source Files Included'],
    delivery: '7 Days',
    revisions: '3 Revisions',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Full-scale production for complex 3D projects or web apps.',
    features: ['Unlimited Video Length', 'Complex 3D Animation', 'Full Web App Integration', 'Dedicated Strategy Call', 'Priority 24/7 Support'],
    delivery: '14-30 Days',
    revisions: 'Unlimited Revisions',
    popular: false
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-[#2BD764]">Services</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          I provide end-to-end creative solutions, from dynamic motion graphics to full-stack web development.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="glass p-8 rounded-3xl hover:-translate-y-2 transition-all duration-300 group border border-white/5 hover:border-[#2BD764]/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#2BD764]/10 text-[#2BD764] flex justify-center items-center mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 uppercase tracking-wide text-white">{service.title}</h3>
            <p className="text-gray-400 font-sans normal-case text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Pricing <span className="text-[#2BD764]">Packages</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          Transparent pricing designed to fit projects of any scale.
        </p>
      </div>

      {/* Pricing Packages */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`relative glass p-10 rounded-3xl flex flex-col h-full border ${
              pkg.popular ? 'border-[#2BD764] shadow-[0_0_30px_rgba(43,215,100,0.15)]' : 'border-white/5'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2BD764] text-[#0a0a0e] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold uppercase mb-2 text-white">{pkg.name}</h3>
            <div className="mb-4">
              <span className="text-4xl font-extrabold text-[#2BD764]">{pkg.price}</span>
            </div>
            <p className="text-gray-400 font-sans normal-case text-sm mb-8 h-10">
              {pkg.description}
            </p>
            
            {/* Delivery & Revisions Info */}
            <div className="flex flex-col gap-3 mb-8 p-4 bg-white/5 rounded-2xl">
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#2BD764]" />
                <span className="text-gray-200 font-sans text-sm font-semibold">Delivery: {pkg.delivery}</span>
              </div>
              <div className="flex items-center gap-3">
                <RefreshCw size={18} className="text-[#2BD764]" />
                <span className="text-gray-200 font-sans text-sm font-semibold">Revisions: {pkg.revisions}</span>
              </div>
            </div>

            <ul className="flex flex-col gap-4 mb-10 flex-grow">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#2BD764] shrink-0 mt-0.5" />
                  <span className="text-gray-300 font-sans text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#contact" 
              className={`w-full py-4 rounded-full font-bold uppercase text-sm tracking-widest transition-all text-center mt-auto ${
                pkg.popular 
                  ? 'bg-[#2BD764] text-[#0a0a0e] hover:bg-white' 
                  : 'glass border border-[#2BD764] text-white hover:bg-[#2BD764] hover:text-[#0a0a0e]'
              }`}
            >
              Choose {pkg.name}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
