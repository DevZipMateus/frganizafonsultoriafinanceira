
import React from 'react';

const Team = () => {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-organiza-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-organiza-light">
              Nossa Equipe
            </h2>
            <p className="mx-auto max-w-[700px] text-organiza-light/80 md:text-xl">
              Conheça os profissionais dedicados a transformar suas finanças
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-1 lg:gap-10 pt-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative h-40 w-40 overflow-hidden rounded-full">
              <img
                src="/lovable-uploads/8349c47b-1ade-417d-8dbf-c196cfd6517f.png"
                alt="Diego Messias"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold text-organiza-light">Diego Messias</h3>
              <p className="text-organiza-light/80">Consultor e Diretor</p>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://instagram.com/diegomessiasconsultor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-organiza-light hover:text-organiza-highlight"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
