
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-organiza-white shadow-md py-2' : 'bg-organiza-white py-3'
    }`}>
      <div className="container flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/3c5af339-5358-4bf8-878d-4f0319b1d180.png" 
              alt="Organiza Consultoria Financeira" 
              className="h-12" 
            />
          </Link>
        </div>
        <nav className={`${isMobile ? 'hidden' : 'flex'} items-center gap-6`}>
          <Link to="/" className="text-sm font-medium text-organiza-dark hover:text-organiza-highlight transition-colors">
            Início
          </Link>
          <a href="#about" className="text-sm font-medium text-organiza-dark hover:text-organiza-highlight transition-colors">
            Sobre
          </a>
          <a href="#services" className="text-sm font-medium text-organiza-dark hover:text-organiza-highlight transition-colors">
            Serviços
          </a>
          <a href="#team" className="text-sm font-medium text-organiza-dark hover:text-organiza-highlight transition-colors">
            Equipe
          </a>
          <a href="#contact" className="text-sm font-medium text-organiza-dark hover:text-organiza-highlight transition-colors">
            Contato
          </a>
        </nav>
        <div className={`${isMobile ? 'flex' : 'hidden'} items-center gap-2`}>
          <Button
            variant="ghost"
            className="p-2 text-organiza-dark hover:bg-organiza-accent/10 hover:text-organiza-accent"
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
          <div className="absolute top-full left-0 right-0 bg-organiza-white border-b border-organiza-accent shadow-lg animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col p-4">
              <Link
                to="/"
                className="py-2 text-base font-medium text-organiza-dark hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <a
                href="#about"
                className="py-2 text-base font-medium text-organiza-dark hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#services"
                className="py-2 text-base font-medium text-organiza-dark hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#team"
                className="py-2 text-base font-medium text-organiza-dark hover:text-organiza-highlight"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </a>
              <a
                href="#contact"
                className="py-2 text-base font-medium text-organiza-dark hover:text-organiza-highlight"
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
