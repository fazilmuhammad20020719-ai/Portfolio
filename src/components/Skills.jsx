import { motion, animate } from 'framer-motion';
import { useRef } from 'react';
import { Film, Palette, Box, Code2, Globe, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    category: "Motion Graphics",
    icon: <Film className="w-6 h-6" />,
    skills: [
      { name: "After Effects", percentage: 95 },
      { name: "Premiere Pro", percentage: 90 },
      { name: "DaVinci Resolve", percentage: 85 }
    ]
  },
  {
    category: "Graphic Design",
    icon: <Palette className="w-6 h-6" />,
    skills: [
      { name: "Photoshop", percentage: 90 },
      { name: "Illustrator", percentage: 85 }
    ]
  },
  {
    category: "3D Design",
    icon: <Box className="w-6 h-6" />,
    skills: [
      { name: "Blender", percentage: 80 }
    ]
  },
  {
    category: "Programming",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Java", percentage: 85 },
      { name: "C#", percentage: 80 },
      { name: "C", percentage: 75 },
      { name: "OOP", percentage: 90 }
    ]
  },
  {
    category: "Web Development",
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "HTML / CSS", percentage: 95 },
      { name: "WordPress", percentage: 85 },
      { name: "Hosting Setup", percentage: 80 }
    ]
  },
  {
    category: "Other",
    icon: <Sparkles className="w-6 h-6" />,
    skills: [
      { name: "Video Editing", percentage: 95 },
      { name: "UI Design", percentage: 85 },
      { name: "Sound Sync", percentage: 80 },
      { name: "Storyboarding", percentage: 85 }
    ]
  }
];

const SkillBar = ({ name, percentage }) => {
  const nodeRef = useRef(null);
  
  const startAnimation = () => {
    animate(0, percentage, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value) + '%';
        }
      }
    });
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-200 font-sans text-sm font-bold tracking-wide uppercase">{name}</span>
        <span ref={nodeRef} className="text-[#2BD764] font-bold font-sans text-sm">0%</span>
      </div>
      <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
        <motion.div 
          className="absolute top-0 left-0 h-full bg-[#2BD764] rounded-full shadow-[0_0_15px_rgba(43,215,100,0.5)]"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          onViewportEnter={startAnimation}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical <span className="text-[#2BD764]">Skills</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          A comprehensive breakdown of my expertise across different creative and technical domains.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((group, idx) => (
          <motion.div 
            key={idx}
            className="glass p-8 rounded-3xl border-t-4 border-t-transparent hover:border-t-[#2BD764] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#2BD764]/10 text-[#2BD764] flex justify-center items-center shadow-inner">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">{group.category}</h3>
            </div>
            
            <div className="flex flex-col">
              {group.skills.map((skill, i) => (
                <SkillBar key={i} name={skill.name} percentage={skill.percentage} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
