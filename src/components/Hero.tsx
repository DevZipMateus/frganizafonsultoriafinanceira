
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-20 bg-organiza-dark text-organiza-white overflow-hidden">
      {/* Logo background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img 
          src="/lovable-uploads/00b6d73e-0139-4a17-ad97-b66dac2be5f8.png" 
          alt="Organiza Logo Background" 
          className="w-full max-w-3xl object-contain"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Organiza Consultoria Financeira
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-organiza-light/80 md:text-2xl">
              Seu financeiro organizado faz a diferença.
            </p>
          </div>
          <div className="space-x-4 pt-2">
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
