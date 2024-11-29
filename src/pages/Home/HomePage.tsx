import React from 'react';
import Layout from '../../components/Layout/Layout';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ResearchSection from '../../components/Research/ResearchSection';
import ProductsSection from './ProductsSection';
import TestimonialsSection from './TestimonialsSection';
import SEO from '../../components/SEO/SEO';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mimi Tech AI | Innovative B2B AI Solutions"
        description="Mimi Tech AI - Ihr Partner für innovative B2B KI-Lösungen. Entdecken Sie unsere maßgeschneiderten KI-Produkte wie Naturio und profitieren Sie von unserer Expertise."
        keywords="KI Lösungen, B2B AI, Mimi Tech AI, Naturio, Künstliche Intelligenz, Business Solutions"
      />
      <Layout>
        <HeroSection />
        <FeaturesSection />
        <ResearchSection />
        <ProductsSection />
        <TestimonialsSection />
      </Layout>
    </>
  );
};

export default HomePage;
