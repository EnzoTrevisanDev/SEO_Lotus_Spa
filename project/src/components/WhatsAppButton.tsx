import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5519996083494"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50 flex items-center justify-center sm:p-5"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} className="sm:w-6 sm:h-6" />
    </a>
  );
};

export default WhatsAppButton;