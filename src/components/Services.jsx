import { motion } from 'framer-motion';
import { 
  Film, Play, MonitorPlay, Box, Sparkles, Zap, 
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
    title: 'Visual Effects (VFX)', 
    desc: 'Compositing, green screen removal, and advanced visual effects for film and commercials.', 
    icon: <Sparkles size={32} /> 
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
    description: 'Full-scale production for complex 3D projects or commercial films.',
    features: ['Unlimited Video Length', 'Complex 3D Animation', 'Custom Storyboarding', 'Dedicated Strategy Call', 'Priority 24/7 Support'],
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
          I provide end-to-end creative solutions, from dynamic motion graphics to full-scale video production.
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


    </section>
  );
};

export default Services;
