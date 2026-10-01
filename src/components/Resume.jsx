import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Award, Cpu, Mail, Phone, MapPin } from 'lucide-react';

const education = [
  { 
    year: '2023 - Present', 
    degree: 'BSc. Information Technology', 
    institution: 'Rajarata University of Sri Lanka',
    desc: 'Focusing on core programming, software engineering, and interactive media design.'
  },
  { 
    year: '2019 - 2021', 
    degree: 'G.C.E. Advanced Level', 
    institution: 'High School',
    desc: 'Completed studies with a strong foundation in analytical subjects and mathematics.'
  }
];

const experience = [
  { 
    year: '2024 - Present', 
    role: 'Freelance Motion Designer', 
    company: 'Global Clients (Fiverr / Upwork)', 
    desc: 'Producing high-conversion promo videos, cinematic edits, and UI animations for a variety of international startups and creators.' 
  },
  { 
    year: '2023 - 2024', 
    role: 'Video Editor & Tech Specialist', 
    company: 'IS6FX Financial', 
    desc: 'Created educational tutorials, software promos, and managed the visual branding for their MT4 trading platform.' 
  }
];

const software = [
  { name: 'After Effects', level: '95%' },
  { name: 'Premiere Pro', level: '90%' },
  { name: 'DaVinci Resolve', level: '85%' },
  { name: 'Blender (3D)', level: '80%' },
  { name: 'Java & OOP', level: '85%' },
  { name: 'React & Tailwind', level: '90%' }
];

const certifications = [
  'Advanced Motion Graphics Masterclass',
  'Full Stack Web Development Bootcamp',
  '3D Character Animation in Blender'
];

const contactInfo = [
  { icon: <Mail size={18} />, text: 'hello@yourdomain.com' },
  { icon: <Phone size={18} />, text: '+94 77 123 4567' },
  { icon: <MapPin size={18} />, text: 'Sri Lanka' }
];

const Resume = () => {
  return (
    <section id="resume" className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-2">My <span className="text-[#2BD764]">Resume</span></h2>
          <p className="text-lg text-gray-400 font-sans normal-case">
            A summary of my academic background and professional experience.
          </p>
        </div>
        
        {/* Download Button */}
        <motion.a 
          href="#" 
          className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all bg-[#2BD764] text-[#0a0a0e] hover:bg-white hover:-translate-y-1 uppercase text-sm tracking-wider shadow-[0_0_20px_rgba(43,215,100,0.3)]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download PDF <Download size={18} />
        </motion.a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Education & Experience */}
        <div className="lg:col-span-7 flex flex-col gap-12">
          
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-8 uppercase text-white flex items-center gap-3">
              <Briefcase className="text-[#2BD764]" /> Experience
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:h-full before:w-[2px] before:bg-white/10">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0a0a0e] border-2 border-[#2BD764] flex justify-center items-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#2BD764]"></div>
                  </div>
                  <div className="glass p-6 rounded-2xl hover:border-[#2BD764]/50 transition-colors">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[#2BD764] font-bold text-xs tracking-widest mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-xl uppercase mb-1">{item.role}</h4>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">{item.company}</p>
                    <p className="text-gray-300 font-sans normal-case text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 uppercase text-white flex items-center gap-3">
              <GraduationCap className="text-[#2BD764]" /> Education
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:h-full before:w-[2px] before:bg-white/10">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-[#0a0a0e] border-2 border-[#2BD764] flex justify-center items-center z-10">
                    <div className="w-2 h-2 rounded-full bg-[#2BD764]"></div>
                  </div>
                  <div className="glass p-6 rounded-2xl hover:border-[#2BD764]/50 transition-colors">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-[#2BD764] font-bold text-xs tracking-widest mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold text-xl uppercase mb-1">{item.degree}</h4>
                    <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">{item.institution}</p>
                    <p className="text-gray-300 font-sans normal-case text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Column: Skills, Software, Certs, Contact */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          
          {/* Software Knowledge */}
          <motion.div
            className="glass p-8 rounded-3xl border-t-4 border-t-[#2BD764]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 uppercase text-white flex items-center gap-3">
              <Cpu className="text-[#2BD764]" size={20} /> Software & Core Skills
            </h3>
            <div className="space-y-5">
              {software.map((sw, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-200 font-sans text-sm font-semibold tracking-wide">{sw.name}</span>
                    <span className="text-[#2BD764] font-bold font-sans text-sm">{sw.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-[#2BD764]"
                      initial={{ width: 0 }}
                      whileInView={{ width: sw.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 + (idx * 0.1) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="glass p-8 rounded-3xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 uppercase text-white flex items-center gap-3">
              <Award className="text-[#2BD764]" size={20} /> Certifications
            </h3>
            <ul className="space-y-4">
              {certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#2BD764] mt-1.5 shrink-0"></div>
                  <span className="text-gray-300 font-sans text-sm leading-relaxed">{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-[#2BD764]/10 p-8 rounded-3xl border border-[#2BD764]/20"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 uppercase text-white">Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#2BD764] flex justify-center items-center text-[#0a0a0e] shrink-0">
                    {info.icon}
                  </div>
                  <span className="font-sans text-sm font-semibold tracking-wide">{info.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
        
      </div>
    </section>
  );
};

export default Resume;
