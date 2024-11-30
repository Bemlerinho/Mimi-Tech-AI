import React from 'react';
import { Box, Container } from '@mui/material';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ResearchSection from '../../components/Research/ResearchSection';
import ProductsSection from './ProductsSection';
import TestimonialsSection from './TestimonialsSection';
import SEO from '../../components/SEO/SEO';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mimi Tech AI | Innovative B2B AI Solutions"
        description="Mimi Tech AI - Ihr Partner für innovative B2B KI-Lösungen. Entdecken Sie unsere maßgeschneiderten KI-Produkte wie Naturio und profitieren Sie von unserer Expertise."
        keywords="KI Lösungen, B2B AI, Mimi Tech AI, Naturio, Künstliche Intelligenz, Business Solutions"
      />
      
      <Box sx={{ 
        position: 'relative',
        background: '#0A1A2F',
        minHeight: '100vh',
      }}>
        <SwarmBackground />
        <MouseAgent3D />
        <Container 
          maxWidth="xl" 
          sx={{ 
            position: 'relative',
            zIndex: 1,
          }}
        >
          <HeroSection />
          <FeaturesSection />
          <ResearchSection />
          <ProductsSection />
          <TestimonialsSection />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
