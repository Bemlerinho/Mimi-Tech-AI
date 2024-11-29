import React from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ResearchSection from '../../components/Research/ResearchSection';
import ProductsSection from './ProductsSection';
import TestimonialsSection from './TestimonialsSection';
import SEO from '../../components/SEO/SEO';
import SwarmBackground from '../../components/SwarmBackground';

const HomePage: React.FC = () => {
  return (
    <>
      <SwarmBackground />
      <SEO 
        title="Mimi Tech AI | Innovative B2B AI Solutions"
        description="Mimi Tech AI - Ihr Partner für innovative B2B KI-Lösungen. Entdecken Sie unsere maßgeschneiderten KI-Produkte wie Naturio und profitieren Sie von unserer Expertise."
        keywords="KI Lösungen, B2B AI, Mimi Tech AI, Naturio, Künstliche Intelligenz, Business Solutions"
      />
      <HeroSection />
      <FeaturesSection />
      <ResearchSection />
      <ProductsSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;
