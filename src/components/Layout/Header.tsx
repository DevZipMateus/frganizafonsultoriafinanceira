
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useMobile } from '../../hooks/use-mobile';

const Header = () => {
  const isMobile = useMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-organiza-dark border-b border-organiza-accent">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/1142df65-6349-41d5-b8da-a2fa7a3feea3.png" 
              alt="Organiza Consultoria Financeira" 
              className="h-12" 
            />
          </Link>
        </div>
        <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
          <Link to="/" className="text-sm font-medium text-organiza-light hover:text-organiza-highlight">
            Início
          </Link>
          <a href="#about" className="text-sm font-medium text-organiza-light hover:text-organiza-highlight">
            Sobre
          </a>
          <a href="#services" className="text-sm font-medium text-organiza-light hover:text-organiza-highlight">
            Serviços
          </a>
          <a href="#team" className="text-sm font-medium text-organiza-light hover:text-organiza-highlight">
            Equipe
          </a>
          <a href="#contact" className="text-sm font-medium text-organiza-light hover:text-organiza-highlight">
            Contato
          </a>
        </nav>
        <div className={`${isMobile ? 'flex' : 'hidden'} items-center gap-2`}>
          <Button
            variant="outline"
            className="text-organiza-light border-organiza-accent hover:bg-organiza-accent"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
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
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-organiza-dark border-b border-organiza-accent">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="text-sm font-medium text-organiza-light hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <a
                href="#about"
                className="text-sm font-medium text-organiza-light hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#services"
                className="text-sm font-medium text-organiza-light hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#team"
                className="text-sm font-medium text-organiza-light hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-organiza-light hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
