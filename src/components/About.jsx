import { motion } from 'framer-motion';
import { Download, GraduationCap, Target, Coffee, Globe, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2023',
    title: 'Started University',
    description: 'Began my academic journey at Rajarata University of Sri Lanka.'
  },
  {
    year: '2023',
    title: 'Learned Java',
    description: 'Mastered core programming concepts and object-oriented principles.'
  },
  {
    year: '2024',
    title: 'Started Motion Graphics',
    description: 'Discovered my passion for animation and visual storytelling.'
  },
  {
    year: '2024 - Present',
    title: 'Built Websites',
    description: 'Creating interactive, motion-rich web applications.'
  }
];

const About = () => {
  return (
    <section id="about" className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About <span className="text-[#2BD764]">Me</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          My story, goals, and the journey that brought me here.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Story & Info */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Who I Am</h3>
            <p className="text-gray-400 font-sans normal-case text-lg leading-relaxed mb-6">
              I am a passionate creator bridging the gap between design and development. What started as a simple curiosity for technology has evolved into a dedicated career path focused on building visually compelling and highly interactive digital products.
            </p>

            {/* University Highlight */}
            <div className="glass p-5 rounded-2xl border-l-4 border-l-[#2BD764] flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2BD764]/20 text-[#2BD764] flex justify-center items-center shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">Education</h4>
                <p className="text-gray-300 font-sans normal-case">
                  Student at <a href="https://www.rjt.ac.lk/" target="_blank" rel="noreferrer" className="text-[#2BD764] hover:underline decoration-2 underline-offset-4 font-bold transition-all">Rajarata University of Sri Lanka</a>
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Vision & Goals</h3>
            <div className="glass p-5 rounded-2xl flex items-start gap-4 mb-10">
              <Target size={24} className="text-[#2BD764] shrink-0 mt-1" />
              <p className="text-gray-400 font-sans normal-case leading-relaxed">
                My absolute passion lies at the intersection of motion graphics and technology. My career vision is to become a leading creative technologist who pushes the boundaries of real-time web animation, turning ordinary websites into immersive cinematic experiences.
              </p>
            </div>

            {/* Badges Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"><Globe size={16} className="text-[#2BD764]" /> LANGUAGES</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">English</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Sinhala</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"><Coffee size={16} className="text-[#2BD764]" /> HOBBIES</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Gaming</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">3D Modeling</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Photography</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"><Heart size={16} className="text-[#2BD764]" /> INTERESTS</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Creative Coding</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">UI Trends</span>
                </div>
              </div>
            </div>

            <a href="#resume" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all bg-[#2BD764] text-[#0a0a0e] hover:bg-white hover:-translate-y-1 uppercase text-sm tracking-wider w-max">
              Download CV <Download size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="glass rounded-3xl p-8 h-full"
          >
            <h3 className="text-2xl font-bold mb-8 uppercase text-white">My Journey</h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:h-full before:w-[2px] before:bg-white/10">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0a0a0e] border-2 border-[#2BD764] flex justify-center items-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#2BD764]"></div>
                  </div>
                  
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5 hover:border-[#2BD764]/30 transition-colors">
                    <span className="inline-block text-[#2BD764] font-bold text-sm tracking-widest mb-1">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-lg uppercase mb-2">{item.title}</h4>
                    <p className="text-gray-400 font-sans normal-case text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default About;
