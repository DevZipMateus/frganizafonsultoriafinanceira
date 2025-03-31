import React from 'react';
import { Button } from './ui/button';
const Hero = () => {
  return <section className="relative w-full py-10 md:py-16 lg:py-20 bg-organiza-dark text-organiza-white overflow-hidden">
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/lovable-uploads/afd70b2b-77ad-4645-b491-61a8aa1a00dd.png" alt="Organiza Logo Background" className="w-full max-w-3xl object-contain" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Empty container for spacing */}
        <div className="py-24 md:py-28 lg:py-32"></div>
        
        {/* Company slogan repositioned to the middle area */}
        
      </div>
      
      {/* Position buttons at the bottom of the section, outside the image area */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 z-10">
        <Button className="bg-organiza-accent hover:bg-organiza-highlight">
          <a href="#contact">Entre em Contato</a>
        </Button>
        <Button variant="outline" className="border-organiza-accent text-organiza-white hover:bg-organiza-accent">
          <a href="#services">Nossos Serviços</a>
        </Button>
      </div>
    </section>;
};
export default Hero;