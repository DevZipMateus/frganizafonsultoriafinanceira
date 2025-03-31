
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-20 bg-organiza-dark text-organiza-white overflow-hidden">
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/lovable-uploads/afd70b2b-77ad-4645-b491-61a8aa1a00dd.png" alt="Organiza Logo Background" className="w-full max-w-3xl object-contain" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Empty container for spacing */}
        <div className="py-12 md:py-16 lg:py-20"></div>
        
        {/* Company slogan positioned in the middle area */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-organiza-white mb-4">
            Seu financeiro organizado faz a diferença
          </h1>
          <p className="text-xl text-organiza-white/80">
            Consultoria financeira especializada para empresas de pequeno e médio porte
          </p>
        </div>
        
        {/* Additional spacing */}
        <div className="py-8 md:py-10 lg:py-12"></div>
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
    </section>
  );
};

export default Hero;
