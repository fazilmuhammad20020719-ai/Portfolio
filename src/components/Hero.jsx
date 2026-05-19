import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

      {/* Background Video with Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-grid-loop-21153-large.mp4"
        ></video>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#0a0a0e]/70"></div>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full mt-10 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Kicker Name */}
              <div className="flex items-center mb-4 justify-center lg:justify-start">
                <p className="text-[#2BD764] font-bold tracking-[0.2em] text-sm uppercase">
                  S. Fazil Muhammad — Motion Designer
                </p>
              </div>

              <h1 className="text-[clamp(3rem,5vw,5.5rem)] font-extrabold leading-[1.1] mb-6 uppercase tracking-tight text-white">
                Motion Graphics <br />
                <span className="text-[#2BD764]">Designer</span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mb-10 mx-auto lg:mx-0 font-sans normal-case">
                I specialize in bringing ideas to life through dynamic motion design, 3D animation, and visual storytelling. Transforming complex concepts into visually stunning realities.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-16 lg:mb-0">
                <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all bg-[#2BD764] text-[#0a0a0e] hover:bg-white hover:-translate-y-1 uppercase text-sm tracking-wider">
                  View Portfolio <ArrowRight size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all glass text-white border border-[#2BD764] hover:bg-[#2BD764] hover:text-[#0a0a0e] hover:-translate-y-1 uppercase text-sm tracking-wider">
                  Hire Me <Briefcase size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all glass text-white hover:bg-white/10 hover:-translate-y-1 uppercase text-sm tracking-wider">
                  Contact Me <Mail size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Profile Picture & Name */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <motion.div
              className="relative w-full flex justify-center mt-8 lg:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <div className="w-[360px] md:w-[460px] lg:w-[800px] relative flex justify-center items-end">
                {/* Soft Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(43,215,100,0.15)_0%,transparent_60%)] z-0"></div>

                <img
                  src={heroImg}
                  alt="S.Fazil Muhammad"
                  className="w-full h-auto object-contain relative z-10"
                  style={{
                    filter: 'grayscale(30%) drop-shadow(0px 10px 30px rgba(0,0,0,0.6))',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
                  }}
                />
              </div>
            </motion.div>
          </div>

        </div>

        {/* Quick Stats Bottom Bar */}
        <motion.div
          className="mt-20 lg:mt-16 glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10 relative z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-[#2BD764] mb-2">08+</h4>
            <p className="text-sm text-gray-300 font-bold tracking-widest uppercase">Years Exp</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-[#2BD764] mb-2">150+</h4>
            <p className="text-sm text-gray-300 font-bold tracking-widest uppercase">Projects</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-[#2BD764] mb-2">50+</h4>
            <p className="text-sm text-gray-300 font-bold tracking-widest uppercase">Clients</p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-4xl font-extrabold text-[#2BD764] mb-2">Ae / C4D</h4>
            <p className="text-sm text-gray-300 font-bold tracking-widest uppercase">Core Skills</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
