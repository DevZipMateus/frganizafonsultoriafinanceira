
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-20 bg-organiza-dark text-organiza-white overflow-hidden">
      {/* Logo background - increased opacity */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <img 
          src="/lovable-uploads/afd70b2b-77ad-4645-b491-61a8aa1a00dd.png" 
          alt="Organiza Logo Background" 
          className="w-full max-w-3xl object-contain" 
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-start text-left max-w-lg">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Organiza Consultoria Financeira
          </h1>
          <div className="space-y-2">
            <p className="text-xl text-organiza-light/80 md:text-2xl">
              Seu financeiro organizado faz a diferença.
            </p>
          </div>
          <div className="space-x-4 pt-6">
            <Button className="bg-organiza-accent hover:bg-organiza-highlight">
              <a href="#contact">Entre em Contato</a>
            </Button>
            <Button variant="outline" className="border-organiza-accent text-organiza-white hover:bg-organiza-accent">
              <a href="#services">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
