
import React from 'react';
import { Card, CardContent } from './ui/card';
import { LinkedinIcon } from 'lucide-react';
const Team = () => {
  return <section id="team" className="w-full py-12 md:py-20 lg:py-24 bg-organiza-accent">
      <div className="container px-4 md:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-organiza-light">
            Conheça Nosso Consultor
          </h2>
          <div className="w-24 h-1 bg-organiza-highlight mx-auto mt-4 mb-6"></div>
        </div>
        
        <Card className="bg-transparent border-none shadow-none overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Profile Image - Larger size */}
              <div className="relative w-52 h-52 md:w-72 md:h-72 overflow-hidden rounded-2xl border-4 border-organiza-highlight shadow-xl">
                <img src="/lovable-uploads/8349c47b-1ade-417d-8dbf-c196cfd6517f.png" alt="Diego Messias" className="object-cover w-full h-full" />
              </div>
              
              {/* Profile Details */}
              <div className="flex-1 space-y-6 text-center md:text-left">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-organiza-light mb-2">Diego Messias</h3>
                  <p className="text-xl text-organiza-highlight font-medium">Consultor Financeiro & Diretor</p>
                </div>
                
                <div className="bg-organiza-dark/30 p-6 rounded-xl">
                  <p className="text-organiza-light/90 text-lg leading-relaxed">
                    Especialista em consultoria financeira para pequenas e médias empresas, 
                    com expertise em gestão de fluxo de caixa e otimização de resultados. 
                    Ajuda empresários a alcançarem maior lucratividade e controle financeiro 
                    através de estratégias personalizadas.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-organiza-light/20">
                    <p className="text-organiza-light/90 text-lg leading-relaxed">
                      <span className="font-semibold text-organiza-highlight">Formação:</span> Bacharel em Administração, 
                      Bacharel em Contabilidade, Pós-graduado em Contabilidade, Perícia e Auditoria, 
                      MBA em Gestão Financeira e Controladoria.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-center md:justify-start space-x-4 pt-2">
                  <a href="https://instagram.com/diegomessiasconsultor" target="_blank" rel="noopener noreferrer" className="text-organiza-light hover:text-organiza-highlight transition-colors p-2 bg-organiza-dark/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default Team;
