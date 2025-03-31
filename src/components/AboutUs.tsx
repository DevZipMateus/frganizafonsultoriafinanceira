
import React from 'react';

const AboutUs = () => {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-organiza-accent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-organiza-light">
              Sobre o Escritório
            </h2>
            <p className="text-organiza-light/90 md:text-xl">
              Trabalhamos com consultoria financeira especializada para empresas de pequeno e médio porte, 
              ajudamos empresários a ter mais lucratividade e mais liquidez de dinheiro em caixa, 
              oferecemos um sistema de gestão aprovado e validado no mercado.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="bg-organiza-dark p-4 rounded-lg">
                <h3 className="font-bold text-xl text-organiza-light">Missão</h3>
                <p className="text-organiza-light/80">
                  Ajudar empresas a organizarem suas finanças e alcançarem maior lucratividade.
                </p>
              </div>
              <div className="bg-organiza-dark p-4 rounded-lg">
                <h3 className="font-bold text-xl text-organiza-light">Visão</h3>
                <p className="text-organiza-light/80">
                  Ser referência em consultoria financeira para pequenas e médias empresas.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md h-60 sm:h-80 overflow-hidden rounded-lg">
              <div className="w-full h-full bg-organiza-highlight flex items-center justify-center text-center p-6">
                <p className="text-3xl font-semibold text-organiza-light italic">
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
