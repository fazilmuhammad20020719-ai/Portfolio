import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Briefcase, ChevronDown } from 'lucide-react';
// Starts the entrance animations as the loading screen fades out
const INTRO_DELAY = 1.3;

const stats = [
  { value: '03+', label: 'Years Exp' },
  { value: '200+', label: 'Projects' },
  { value: '90+', label: 'Clients' }
];

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: INTRO_DELAY + delay }
  });

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-28 pb-16">

      {/* Animated grid background with parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid mask-fade-radial"></div>
        <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[700px] max-w-[90vw] h-[420px] rounded-full bg-[#2BD764]/10 blur-[120px]"></div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full">
        <div className="flex flex-col items-center text-center">

          {/* Availability badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#2BD764]/30 bg-[#2BD764]/10 mb-8">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#2BD764] opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[#2BD764]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-200">Available for new projects</span>
          </motion.div>

          {/* Kicker Name */}
          <motion.p {...fadeUp(0.1)} className="text-[#2BD764] font-semibold tracking-[0.35em] text-sm uppercase mb-5">
            S. Fazil Muhammad
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} className="text-[clamp(2.25rem,6vw,5.5rem)] font-bold leading-[1.05] mb-8 uppercase tracking-tight text-white text-balance">
            <span className="block">Motion Graphics Designer</span>
            <span className="block text-[#2BD764]">
              <span className="font-['Cinzel_Decorative'] font-bold normal-case text-white/80 mr-[0.15em]">&amp;</span> Video Editor
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} className="text-base md:text-lg text-gray-300 max-w-2xl mb-10 mx-auto leading-relaxed">
            I create motion graphics, 3D animation, and videos that turn complex ideas into clear, engaging stories. With an AI-powered workflow built on 3+ years of craft, I deliver faster turnarounds with precision and polish in every frame.
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="flex flex-wrap justify-center gap-4">
            <a href="#showreel" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all bg-[#2BD764] text-[#0a0a0e] hover:bg-white hover:-translate-y-1 uppercase text-sm tracking-wider shadow-[0_0_30px_rgba(43,215,100,0.35)]">
              Watch My Work <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all glass text-white border border-white/15 hover:border-[#2BD764] hover:text-[#2BD764] hover:-translate-y-1 uppercase text-sm tracking-wider">
              Hire Me <Briefcase size={18} />
            </a>
          </motion.div>
        </div>

        {/* Quick Stats Bottom Bar */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-20 max-w-4xl mx-auto glass rounded-3xl p-8 grid grid-cols-3 gap-4 divide-x divide-white/10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center px-2">
              <h4 className="text-3xl md:text-5xl font-bold text-[#2BD764] mb-2">{stat.value}</h4>
              <p className="text-[11px] md:text-xs text-gray-400 font-semibold tracking-[0.2em] uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.a
          href="#showreel"
          aria-label="Scroll to showreel"
          className="hidden md:flex mx-auto mt-12 w-10 h-10 rounded-full border border-white/15 items-center justify-center text-gray-400 hover:text-[#2BD764] hover:border-[#2BD764] transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 6, 0] }}
          transition={{ opacity: { delay: INTRO_DELAY + 0.8 }, y: { duration: 2, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <ChevronDown size={18} />
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;
