import { useState, useEffect } from 'react';
import { Menu, X, Code, User } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Showreel', href: '#showreel' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resume', href: '#resume' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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
      isScrolled ? 'py-4 glass border-b border-white/10' : 'py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <a href="#home" className="text-xl md:text-2xl font-bold tracking-tight text-gradient whitespace-nowrap">Portfolio.</a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-4 xl:gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  className={`font-light text-sm transition-all whitespace-nowrap pb-1 border-b-2 ${
                    isActive 
                      ? 'text-[#2BD764] border-[#2BD764]' 
                      : 'text-gray-300 border-transparent hover:text-[#2BD764]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center gap-3 ml-2 pl-4 xl:ml-4 border-l border-white/10">
            <a href="https://github.com" target="_blank" rel="noreferrer" 
               className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-[#2BD764] hover:-translate-y-0.5 transition-all text-white">
              <Code size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-[#2BD764] hover:-translate-y-0.5 transition-all text-white">
              <User size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div className={`absolute top-full right-4 left-4 flex flex-col bg-[#121218] p-6 rounded-2xl gap-4 transition-all duration-300 lg:hidden shadow-2xl border border-white/10 ${
          isOpen ? 'translate-y-2 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}>
          <div className="grid grid-cols-2 gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className={`text-base font-light transition-colors pb-1 border-b-2 inline-block w-max ${
                    isActive 
                      ? 'text-[#2BD764] border-[#2BD764]' 
                      : 'text-gray-300 border-transparent hover:text-[#2BD764]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
          
          <div className="flex justify-center gap-4 pt-4 border-t border-white/10 mt-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" 
               className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#2BD764] transition-all text-white">
              <Code size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"
               className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-[#2BD764] transition-all text-white">
              <User size={20} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
