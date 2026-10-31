import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'auto';
    }, 1500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] bg-[#0a0a0e] flex justify-center items-center"
        >
          <div className="flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold tracking-tight uppercase text-white mb-6 flex items-center"
            >
              Fazil<span className="text-[#2BD764]">.</span>
            </motion.div>

            {/* Cinematic Progress Bar */}
            <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-[#2BD764] shadow-[0_0_10px_#2BD764]"
              />
            </div>
            
            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-gray-400 text-[10px] uppercase tracking-[0.4em] font-semibold"
            >
              Motion · Video · AI
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
