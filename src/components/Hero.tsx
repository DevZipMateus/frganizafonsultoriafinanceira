
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-20 bg-organiza-dark text-organiza-white overflow-hidden">
      {/* Logo background - no opacity filter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          src="/lovable-uploads/afd70b2b-77ad-4645-b491-61a8aa1a00dd.png" 
          alt="Organiza Logo Background" 
          className="w-full max-w-3xl object-contain" 
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        {/* Position text at the top */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xl text-organiza-light md:text-2xl mt-4">
            Seu financeiro organizado faz a diferença.
          </p>
        </div>
        
        {/* Center the buttons at the bottom */}
        <div className="flex justify-center space-x-4 mt-8">
          <Button className="bg-organiza-accent hover:bg-organiza-highlight">
            <a href="#contact">Entre em Contato</a>
          </Button>
          <Button variant="outline" className="border-organiza-accent text-organiza-white hover:bg-organiza-accent">
            <a href="#services">Nossos Serviços</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
