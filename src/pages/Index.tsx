
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Team from '../components/Team';
import Contact from '../components/Contact';
import FloatingButton from '../components/FloatingButton';
import EgestorERP from '../components/EgestorERP';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Hero />
      <AboutUs />
      <Services />
      <Team />
      <EgestorERP />
      <Contact />
      <FloatingButton />
    </div>
  );
};

export default Index;
