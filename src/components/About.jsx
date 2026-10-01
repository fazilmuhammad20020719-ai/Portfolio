import { motion } from 'framer-motion';
import { Download, GraduationCap, Target, Coffee, Globe, Heart } from 'lucide-react';

const timeline = [
  {
    year: '2021–2023',
    title: 'Started Freelancing',
    description: 'Started working with clients worldwide, creating promotional videos, explainer videos, website tutorials, and social media content.'
  },
  {
    year: '2023–Present',
    title: 'Freelance Video Editor',
    company: 'Fiverr | Remote',
    description: 'Created 100+ videos for clients worldwide, including promotional videos for crypto businesses, apps, NFTs, and digital products.'
  },
  {
    year: '2024–2025',
    title: 'Junior Motion Graphics Designer',
    company: 'IS6FX — Forex Broker | Remote',
    description: 'Created advanced motion graphics, promotional campaigns, website tutorials, and educational trading content.'
  },
  {
    year: '2025–Present',
    title: 'Motion Graphics Designer & Video Editor',
    company: 'Wayond — Dubai, UAE | Remote',
    description: 'Creating SaaS and promotional videos, website tutorials, educational content, animation videos, and podcast content for digital platforms.'
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
            <div className="text-gray-400 font-sans normal-case text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Hi, I’m Fazil Muhammad. I have a BICT (Hons) degree from Rajarata University of Sri Lanka.
              </p>
              <p>
                I’m a Motion Graphics Designer and Video Editor with around five years of experience. I specialize in motion graphics, promotional videos, SaaS promotional and product videos, social media content, and tutorial videos.
              </p>
              <p>
                I specialize in turning software features and ideas into clear, engaging visual stories through motion graphics and animation. I mainly work with After Effects, Premiere Pro, DaVinci Resolve, Blender, Figma, and AI tools.
              </p>
              <p>
                Currently, I work remotely with clients and companies, creating marketing and educational video content. I enjoy turning ideas into engaging visual stories through animation and motion design.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 uppercase text-white">Vision & Goals</h3>
            <div className="glass p-5 rounded-2xl flex items-start gap-4 mb-10">
              <Target size={24} className="text-[#2BD764] shrink-0 mt-1" />
              <p className="text-gray-400 font-sans normal-case leading-relaxed">
                I want to build my career in the creative field, specializing in SaaS and technology content by turning complex products and ideas into simple, engaging visual stories. I aim to combine motion design, 3D, AI, and creative thinking to create impactful content that looks great and connects with people.
              </p>
            </div>

            {/* Badges Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2 text-sm tracking-wider"><Globe size={16} className="text-[#2BD764]" /> LANGUAGES</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">English</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Sinhala</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Tamil</span>
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
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Content Creation</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Creative Re-editing & Repurposing</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Teaching & Knowledge Sharing</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Collaborating with AI</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Crypto</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Forex</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">Blockchain</span>
                  <span className="px-3 py-1 glass rounded-full text-xs text-gray-300 font-sans">SaaS & Technology</span>
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
            <h3 className="text-xl lg:text-lg xl:text-xl font-bold mb-8 uppercase text-white tracking-tight">My Journey in Motion Graphics Design</h3>
            
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
                    <h4 className="text-white font-bold text-lg uppercase mb-1">{item.title}</h4>
                    {item.company && (
                      <div className="text-gray-300 font-bold text-sm mb-2 opacity-80">{item.company}</div>
                    )}
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
