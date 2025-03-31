
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-10 md:py-16 lg:py-20 bg-organiza-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-organiza-dark">
              Sobre o Escritório
            </h2>
            <p className="text-organiza-dark/90 md:text-lg">
              Trabalhamos com consultoria financeira especializada para empresas de pequeno e médio porte, 
              ajudamos empresários a ter mais lucratividade e mais liquidez de dinheiro em caixa, 
              oferecemos um sistema de gestão aprovado e validado no mercado.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-organiza-dark p-4 rounded-lg h-full">
                <h3 className="font-bold text-xl text-organiza-white mb-2">Missão</h3>
                <p className="text-organiza-light/90">
                  Ajudar empresas a organizarem suas finanças e alcançarem maior lucratividade.
                </p>
              </div>
              <div className="bg-organiza-accent p-4 rounded-lg h-full">
                <h3 className="font-bold text-xl text-organiza-white mb-2">Visão</h3>
                <p className="text-organiza-light/90">
                  Ser referência em consultoria financeira para pequenas e médias empresas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-60 sm:h-72 overflow-hidden rounded-lg shadow-lg">
              <div className="w-full h-full bg-organiza-highlight flex items-center justify-center text-center p-6">
                <p className="text-2xl md:text-3xl font-semibold text-organiza-white italic">
                  "Seu financeiro organizado faz a diferença."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
