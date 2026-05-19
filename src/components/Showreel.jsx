import { motion } from 'framer-motion';
import { Play, Film } from 'lucide-react';

const gallerySections = [
  {
    title: 'Cinematic',
    description: 'Story-driven visual narratives with advanced color grading and moody atmospheres.',
    videos: [
      { title: 'Urban Nights', src: 'https://www.youtube.com/embed/LXb3EKWsInQ' },
      { title: 'Nature Escapes', src: 'https://player.vimeo.com/video/135965476' }
    ]
  },
  {
    title: 'Educational',
    description: 'Clear, engaging tutorials and technical explainers designed for high retention.',
    videos: [
      { title: 'IS6FX Trading 101', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' },
      { title: 'MT4 Software Tutorial', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' }
    ]
  },
  {
    title: 'Promotional',
    description: 'High-energy, fast-paced cuts designed for social media conversion.',
    videos: [
      { title: 'Product Launch Promo', src: 'https://player.vimeo.com/video/288344114' },
      { title: 'App Teaser Ad', src: 'https://player.vimeo.com/video/288344114' }
    ]
  },
  {
    title: 'Event Videos',
    description: 'Dynamic event recaps, sound-synced highlight reels, and fast cuts.',
    videos: [
      { title: 'College Fest Recap', src: 'https://www.youtube.com/embed/LXb3EKWsInQ' },
      { title: 'Tech Conference 2024', src: 'https://www.youtube.com/embed/ScMzIvxBSi4' }
    ]
  }
];

const VideoCard = ({ title, src, delay }) => (
  <motion.div 
    className="glass rounded-2xl overflow-hidden p-2 group flex flex-col h-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
  >
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#0a0a0e] border border-white/5 group-hover:border-[#2BD764]/50 transition-colors">
      <iframe 
        width="100%" 
        height="100%" 
        src={src} 
        title={title} 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="w-full h-full object-cover"
        loading="lazy"
      ></iframe>
    </div>
    <div className="pt-4 px-2 pb-2 mt-auto">
      <h4 className="text-white font-bold uppercase tracking-wide text-sm flex items-center gap-2">
        <Film size={16} className="text-[#2BD764]" />
        {title}
      </h4>
    </div>
  </motion.div>
);

const Showreel = () => {
  return (
    <section id="showreel" className="py-32 container mx-auto px-6 max-w-7xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Video <span className="text-[#2BD764]">Showreel</span></h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans normal-case">
          A dedicated gallery showcasing my best edits, cinematic sequences, and motion graphics.
        </p>
      </div>

      {/* Main Auto-Playing Demo Reel */}
      <motion.div 
        className="relative w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden border-2 border-[#2BD764]/30 shadow-[0_0_50px_rgba(43,215,100,0.1)] mb-32 group cursor-pointer"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Placeholder Abstract Tech Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-grid-loop-21153-large.mp4"
        ></video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        
        {/* Play Button Overlay (Hover) */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
          <button className="w-24 h-24 bg-[#2BD764] rounded-full flex justify-center items-center text-[#0a0a0e] hover:scale-110 transition-transform shadow-[0_0_30px_rgba(43,215,100,0.4)]">
            <Play size={40} fill="currentColor" className="ml-1.5" />
          </button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 pointer-events-none">
          <div className="bg-[#2BD764] text-[#0a0a0e] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-4 shadow-lg">
            Demo Reel 2024
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase tracking-tight max-w-2xl leading-[1.1] drop-shadow-xl">
            My Best Edits & Motion Graphics
          </h3>
        </div>
      </motion.div>

      {/* Categorized Video Gallery */}
      <div className="flex flex-col gap-24">
        {gallerySections.map((section, idx) => (
          <div key={idx} className="relative">
            {/* Section Header */}
            <motion.div 
              className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-white/10 pb-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
                <h3 className="text-3xl font-bold uppercase text-white tracking-wide mb-2 flex items-center gap-3">
                  <span className="w-3 h-8 bg-[#2BD764] rounded-full inline-block"></span>
                  {section.title}
                </h3>
                <p className="text-gray-400 font-sans normal-case text-sm md:text-base">
                  {section.description}
                </p>
              </div>
            </motion.div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.videos.map((video, vIdx) => (
                <VideoCard 
                  key={vIdx} 
                  title={video.title} 
                  src={video.src} 
                  delay={vIdx * 0.2} 
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showreel;
