import { MessageCircle } from 'lucide-react';
import { ctaConfig } from '@/config';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${ctaConfig.whatsappNumber}?text=${encodeURIComponent(ctaConfig.whatsappMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap">
        <div className="bg-emerald-900 text-white text-sm font-medium px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ¿Necesitas ayuda?
        </div>
      </div>
    </a>
  );
}
