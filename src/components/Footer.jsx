import { ArrowUp, Mail, Globe, Smartphone, Film } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0e] border-t border-white/10 pt-20 pb-10 mt-32 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-[radial-gradient(ellipse_at_bottom,rgba(43,215,100,0.05)_0%,transparent_70%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Email */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-4 text-white uppercase">Portfolio<span className="text-[#2BD764]">.</span></h2>
            <p className="text-gray-400 font-sans text-sm leading-relaxed mb-6 max-w-xs">
              Specializing in cinematic motion design, 3D animation, and visually stunning web development.
            </p>
            <a href="mailto:hello@johndoe.com" className="inline-flex items-center gap-3 text-white font-bold hover:text-[#2BD764] transition-colors border-b border-transparent hover:border-[#2BD764] pb-1">
              <Mail size={16} className="text-[#2BD764]" /> hello@johndoe.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Quick Links</h3>
            <ul className="flex flex-col gap-3 font-sans text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-[#2BD764] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Home</a></li>
              <li><a href="#about" className="hover:text-[#2BD764] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> About</a></li>
              <li><a href="#skills" className="hover:text-[#2BD764] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Skills</a></li>
              <li><a href="#projects" className="hover:text-[#2BD764] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Portfolio</a></li>
              <li><a href="#contact" className="hover:text-[#2BD764] transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-white/20"></span> Contact</a></li>
            </ul>
          </div>

          {/* More Links */}
          <div className="md:col-span-1">
             <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Resources</h3>
             <ul className="flex flex-col gap-3 font-sans text-gray-400 text-sm">
               <li><a href="#services" className="hover:text-[#2BD764] transition-colors">Services & Pricing</a></li>
               <li><a href="#showreel" className="hover:text-[#2BD764] transition-colors">Showreel / Videos</a></li>
               <li><a href="#testimonials" className="hover:text-[#2BD764] transition-colors">Client Reviews</a></li>
               <li><a href="#resume" className="hover:text-[#2BD764] transition-colors">Resume & CV</a></li>
             </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:border-[#2BD764] hover:scale-110 transition-all shadow-lg"><Globe size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:border-[#2BD764] hover:scale-110 transition-all shadow-lg"><Smartphone size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:border-[#2BD764] hover:scale-110 transition-all shadow-lg"><Film size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex justify-center items-center text-gray-300 hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:border-[#2BD764] hover:scale-110 transition-all shadow-lg"><Mail size={18} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} S. Fazil Muhammad. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 bg-white/5 hover:bg-[#2BD764] text-gray-300 hover:text-[#0a0a0e] px-5 py-2.5 rounded-full transition-all text-xs font-bold uppercase tracking-widest border border-white/10 hover:border-[#2BD764]"
          >
            Back to Top 
            <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#0a0a0e]/20 flex justify-center items-center transition-colors">
              <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
