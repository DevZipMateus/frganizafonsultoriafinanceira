
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-organiza-dark text-organiza-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Organiza Consultoria Financeira
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-organiza-light/80 md:text-2xl">
              Seu financeiro organizado faz a diferença.
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-organiza-accent hover:bg-organiza-highlight">
              <a href="#contact">Entre em Contato</a>
            </Button>
            <Button variant="outline" className="border-organiza-accent text-organiza-light hover:bg-organiza-accent">
              <a href="#services">Nossos Serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
