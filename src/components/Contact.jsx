import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Send, Globe, Smartphone, Film } from 'lucide-react';

const contactDetails = [
  { 
    icon: <Mail size={24} />, 
    title: 'Email', 
    value: 'hello@yourdomain.com', 
    link: 'mailto:hello@yourdomain.com' 
  },
  { 
    icon: <MessageCircle size={24} />, 
    title: 'WhatsApp', 
    value: '+94 77 123 4567', 
    link: 'https://wa.me/94771234567' 
  },
  { 
    icon: <MapPin size={24} />, 
    title: 'Location', 
    value: 'Pettah, Sri Lanka', 
    link: null 
  }
];

const socials = [
  { icon: <Globe size={20} />, href: '#' },
  { icon: <Smartphone size={20} />, href: '#' },
  { icon: <Film size={20} />, href: '#' },
  { icon: <Mail size={20} />, href: '#' }
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 container mx-auto px-6 max-w-7xl relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Get In <span className="text-[#2BD764]">Touch</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          Ready to start your next project? Drop me a message and let's create something amazing together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Info & Details */}
        <motion.div 
          className="lg:col-span-5 flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Availability Status */}
          <div className="inline-flex items-center self-start gap-3 px-5 py-2.5 rounded-full border border-[#2BD764]/30 bg-[#2BD764]/10 mb-10 shadow-[0_0_20px_rgba(43,215,100,0.1)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2BD764] animate-pulse"></span>
            <span className="text-white text-xs font-bold uppercase tracking-widest">Available for freelance work</span>
          </div>

          <h3 className="text-3xl font-extrabold uppercase mb-8 text-white">Let's Connect</h3>
          
          <div className="flex flex-col gap-6 mb-12 flex-grow">
            {contactDetails.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 glass p-4 rounded-2xl border-l-4 border-l-transparent hover:border-l-[#2BD764] transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-[#2BD764]/10 flex justify-center items-center text-[#2BD764] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">{item.title}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="text-white font-sans text-lg font-semibold hover:text-[#2BD764] transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-sans text-lg font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Follow Me</p>
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full glass border border-white/10 flex justify-center items-center text-white hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <form className="glass p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl flex flex-col gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-widest pl-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-sans focus:outline-none focus:border-[#2BD764] focus:ring-1 focus:ring-[#2BD764] transition-all placeholder:text-gray-600" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-xs font-bold text-gray-300 uppercase tracking-widest pl-2">Your Email</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-sans focus:outline-none focus:border-[#2BD764] focus:ring-1 focus:ring-[#2BD764] transition-all placeholder:text-gray-600" 
                  placeholder="john@example.com" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-widest pl-2">Subject</label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-sans focus:outline-none focus:border-[#2BD764] focus:ring-1 focus:ring-[#2BD764] transition-all placeholder:text-gray-600" 
                placeholder="Project Inquiry" 
              />
            </div>

            <div className="flex flex-col gap-3 mb-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-widest pl-2">Message</label>
              <textarea 
                rows="5"
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white font-sans focus:outline-none focus:border-[#2BD764] focus:ring-1 focus:ring-[#2BD764] transition-all placeholder:text-gray-600 resize-none" 
                placeholder="Tell me about your project..." 
              ></textarea>
            </div>

            <button 
              type="button"
              className="w-full bg-[#2BD764] text-[#0a0a0e] font-extrabold uppercase tracking-widest py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-white transition-colors group"
            >
              Send Message
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
