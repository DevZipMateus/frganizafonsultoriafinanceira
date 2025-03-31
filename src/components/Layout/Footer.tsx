
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-organiza-dark text-organiza-light py-8 border-t border-organiza-accent">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/1142df65-6349-41d5-b8da-a2fa7a3feea3.png" 
                alt="Organiza Consultoria Financeira" 
                className="h-12" 
              />
            </Link>
            <p className="text-sm text-organiza-light/70">
              Consultoria financeira especializada para empresas de pequeno e médio porte.
            </p>
            <p className="text-sm text-organiza-light/70 italic">
              "Seu financeiro organizado faz a diferença."
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-organiza-light/70 hover:text-organiza-light">
                Início
              </Link>
              <a href="#about" className="text-sm text-organiza-light/70 hover:text-organiza-light">
                Sobre
              </a>
              <a href="#services" className="text-sm text-organiza-light/70 hover:text-organiza-light">
                Serviços
              </a>
              <a href="#team" className="text-sm text-organiza-light/70 hover:text-organiza-light">
                Equipe
              </a>
              <a href="#contact" className="text-sm text-organiza-light/70 hover:text-organiza-light">
                Contato
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-organiza-light/70">
                Avenida Brasiliano Bras 778, Centro, São Francisco - MG
              </p>
              <p className="text-sm text-organiza-light/70">
                <a href="tel:+5538984115540" className="hover:text-organiza-light">
                  (38) 98411-5540
                </a>
              </p>
              <p className="text-sm text-organiza-light/70">
                <a href="mailto:diego.palestras@gmail.com" className="hover:text-organiza-light">
                  diego.palestras@gmail.com
                </a>
              </p>
              <div className="flex space-x-2 pt-2">
                <a
                  href="https://instagram.com/diegomessiasconsultor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-organiza-light hover:text-organiza-highlight"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5538984115540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-organiza-light hover:text-organiza-highlight"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-organiza-accent pt-4 text-center">
          <p className="text-xs text-organiza-light/70">
            &copy; {currentYear} Organiza Consultoria Financeira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
