import { motion } from 'framer-motion';

// Shared heading used at the top of every section: eyebrow label, title with an accent word, and a subtitle.
const SectionHeader = ({ eyebrow, title, accent, subtitle, align = 'center', children }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      className={`mb-16 flex flex-col gap-6 ${isCenter ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between text-center md:text-left'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={isCenter ? 'max-w-2xl' : ''}>
        <p className={`inline-flex items-center gap-3 text-[#2BD764] text-xs font-semibold tracking-[0.3em] uppercase mb-4 ${isCenter ? 'justify-center' : ''}`}>
          <span className="w-8 h-px bg-[#2BD764]"></span>
          {eyebrow}
          {isCenter && <span className="w-8 h-px bg-[#2BD764]"></span>}
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          {title} {accent && <span className="text-[#2BD764]">{accent}</span>}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">{subtitle}</p>
        )}
      </div>
      {children}
    </motion.div>
  );
};

export default SectionHeader;
