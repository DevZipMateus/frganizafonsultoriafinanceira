
import React from 'react';

const Services = () => {
  return (
    <section id="services" className="w-full py-10 md:py-16 lg:py-20 bg-organiza-dark">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-organiza-light">
            Nossos Serviços
          </h2>
          <p className="mx-auto max-w-[700px] text-organiza-light/80 md:text-lg">
            Soluções completas para organizar e otimizar suas finanças
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col space-y-3 rounded-lg border border-organiza-highlight p-5 shadow-md transition-transform hover:scale-[1.02]">
            <div className="rounded-full bg-organiza-accent p-3 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-organiza-light"
              >
                <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-organiza-light">BPO Financeiro</h3>
            <p className="text-organiza-light/80">
              Terceirização da gestão financeira com profissionais qualificados, garantindo controle, 
              eficiência e redução de custos para sua empresa.
            </p>
          </div>
          <div className="flex flex-col space-y-3 rounded-lg border border-organiza-highlight p-5 shadow-md transition-transform hover:scale-[1.02]">
            <div className="rounded-full bg-organiza-accent p-3 w-12 h-12 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-organiza-light"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-organiza-light">Sistema de Gestão Financeira</h3>
            <p className="text-organiza-light/80">
              Implementação de sistemas modernos para controle financeiro, com dashboards personalizados 
              e relatórios completos para tomada de decisões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
