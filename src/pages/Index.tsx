
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-organiza-dark">
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <Contact />
      <FloatingButton />
    </div>
  );
};

export default Index;
