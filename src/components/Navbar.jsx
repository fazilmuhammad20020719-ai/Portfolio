import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Showreel', href: '#showreel' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Thin progress bar along the top edge of the navbar
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for Active Menu Item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } // Triggers when section is around middle of screen
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'py-3 bg-[#0a0a0e]/80 backdrop-blur-xl border-b border-white/10' : 'py-6'
    }`}>
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#2BD764] origin-left"
        style={{ scaleX: progress }}
      />

      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a href="#home" className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight uppercase text-white whitespace-nowrap">
          Fazil<span className="text-[#2BD764]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 p-1 rounded-full border border-white/10 bg-white/[0.03]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 xl:px-4 py-1.5 rounded-full text-[13px] font-medium transition-colors whitespace-nowrap ${
                    isActive ? 'text-[#0a0a0e]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-[#2BD764]"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{item.name}</span>
                </a>
              );
            })}
          </div>

          <a href="#contact"
             className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#2BD764] text-[#2BD764] hover:bg-[#2BD764] hover:text-[#0a0a0e] transition-colors text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full right-4 left-4 flex flex-col bg-[#121218] p-6 rounded-2xl gap-4 transition-all duration-300 lg:hidden shadow-2xl border border-white/10 ${
          isOpen ? 'translate-y-2 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2BD764] text-[#0a0a0e]'
                      : 'text-gray-300 bg-white/[0.03] hover:text-[#2BD764]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <a href="#contact" onClick={() => setIsOpen(false)}
             className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2BD764] text-[#0a0a0e] font-bold uppercase tracking-wider text-sm">
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
