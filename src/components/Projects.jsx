import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Brand Promotional Video',
    description: 'A high-energy promotional video featuring dynamic motion graphics and fast-paced cuts for a tech startup.',
    tags: ['After Effects', 'Premiere Pro', 'Motion Design'],
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: '3D Product Animation',
    description: 'Photorealistic 3D rendering and animation for a consumer electronics product launch.',
    tags: ['Blender', 'DaVinci Resolve', '3D Modeling'],
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Social Media Ad Campaign',
    description: 'A series of engaging, short-form video ads optimized for TikTok and Instagram Reels.',
    tags: ['Video Editing', 'Sound Design', 'Color Grading'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected <span className="text-gradient">Projects</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and technical experiments.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group rounded-3xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
          >
            <div className="relative w-full h-60 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0a0a0e]/70 flex justify-center items-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={project.link} className="w-12 h-12 rounded-full flex justify-center items-center text-white bg-white/10 hover:bg-[#2BD764] hover:scale-110 transition-all backdrop-blur-sm">
                  <Play size={20} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs py-1.5 px-3 rounded-full bg-white/5 border border-white/10 text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
