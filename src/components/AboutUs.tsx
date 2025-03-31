
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-10 md:py-16 lg:py-20 bg-organiza-white">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-organiza-dark">
            Sobre o Escritório
          </h2>
          <div className="w-20 h-1 bg-organiza-accent mx-auto mt-4 mb-6"></div>
        </div>
        
        <div className="space-y-6 text-center md:text-left">
          <p className="text-organiza-dark/90 text-lg leading-relaxed">
            Trabalhamos com consultoria financeira especializada para empresas de pequeno e médio porte, 
            ajudamos empresários a ter mais lucratividade e mais liquidez de dinheiro em caixa, 
            oferecemos um sistema de gestão aprovado e validado no mercado.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="bg-organiza-dark p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-organiza-white mb-3">Missão</h3>
              <div className="w-12 h-1 bg-organiza-accent mb-4"></div>
              <p className="text-organiza-light/90 leading-relaxed">
                Ajudar empresas a organizarem suas finanças e alcançarem maior lucratividade, 
                oferecendo consultoria personalizada e ferramentas eficientes para o gerenciamento financeiro.
              </p>
            </div>
            <div className="bg-organiza-accent p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
              <h3 className="font-bold text-2xl text-organiza-white mb-3">Visão</h3>
              <div className="w-12 h-1 bg-organiza-dark mb-4"></div>
              <p className="text-organiza-light/90 leading-relaxed">
                Ser referência em consultoria financeira para pequenas e médias empresas, 
                contribuindo para o crescimento sustentável e o sucesso de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
