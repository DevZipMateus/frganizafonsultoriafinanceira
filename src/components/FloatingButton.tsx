
import React from 'react';
import { Button } from './ui/button';

const FloatingButton = () => {
  return (
    <a 
      href="https://api.whatsapp.com/send?phone=5538984115540"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform">
        <img 
          src="/lovable-uploads/41bb5526-ff7b-427d-aac7-a87e2fdc72ac.png"
          alt="WhatsApp Contact"
          className="w-full h-full"
        />
      </div>
    </a>
  );
};

export default FloatingButton;
