import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/94771234567" // Update with actual number if needed
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[9000] w-14 h-14 bg-[#25D366] text-white rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 group"
    >
      <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-[#0a0a0e] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none hidden md:block">
        Chat with me
      </span>
      
      {/* Pulse Rings */}
      <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50 pointer-events-none"></div>
    </a>
  );
};

export default WhatsAppButton;
