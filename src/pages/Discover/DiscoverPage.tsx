import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';
import naturioIcon from '../../assets/icons/naturio.svg';
import processAutomationIcon from '../../assets/icons/process-automation.svg';
import dataAnalysisIcon from '../../assets/icons/data-analysis.svg';
import customDevelopmentIcon from '../../assets/icons/custom-development.svg';

interface DiscoverySection {
  title: string;
  description: string;
  icon: string;
}

const discoverySections: DiscoverySection[] = [
  {
    title: 'Naturio',
    description: 'Unsere KI-gestützte Plattform für nachhaltige Landwirtschaft und Ressourcenmanagement. Optimieren Sie Ihre landwirtschaftlichen Prozesse mit modernster Technologie.',
    icon: naturioIcon,
  },
  {
    title: 'KI-Prozessautomatisierung',
    description: 'Automatisieren Sie Ihre Geschäftsprozesse mit unseren intelligenten KI-Lösungen. Steigern Sie die Effizienz und reduzieren Sie manuelle Arbeitsschritte.',
    icon: processAutomationIcon,
  },
  {
    title: 'Datenanalyse & Prognosen',
    description: 'Nutzen Sie die Kraft der KI für präzise Datenanalysen und Zukunftsprognosen. Treffen Sie fundierte Entscheidungen basierend auf KI-gestützten Erkenntnissen.',
    icon: dataAnalysisIcon,
  },
  {
    title: 'Individuelle Entwicklung',
    description: 'Wir entwickeln maßgeschneiderte KI-Lösungen für Ihre spezifischen Anforderungen. Von der Konzeption bis zur Implementierung stehen wir Ihnen zur Seite.',
    icon: customDevelopmentIcon,
  },
];

const DiscoverPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Entdecken Sie unsere KI-Lösungen | Mimi Tech AI"
        description="Entdecken Sie die innovativen KI-Lösungen von Mimi Tech AI. Von Naturio bis zur individuellen KI-Entwicklung - Wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen."
        keywords="KI Lösungen, Naturio, Prozessautomatisierung, Datenanalyse, KI-Entwicklung"
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
            py: 8
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 50%, #7b42ff 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(0, 183, 255, 0.15)',
              }}
            >
              Entdecken Sie unsere Lösungen
            </Typography>

            <Typography
              variant="h5"
              align="center"
              sx={{ 
                mb: 8,
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Von nachhaltiger Landwirtschaft bis zur individuellen KI-Entwicklung - 
              Entdecken Sie unsere innovativen Lösungen für Ihr Unternehmen
            </Typography>

            <Grid container spacing={4}>
              {discoverySections.map((section, index) => (
                <Grid item xs={12} md={6} key={section.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        bgcolor: 'rgba(17, 25, 40, 0.88)',
                        borderRadius: 4,
                        backdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        p: 4,
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 40px rgba(0, 183, 255, 0.2)',
                          border: '1px solid rgba(0, 183, 255, 0.3)',
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={section.icon}
                        alt=""
                        sx={{
                          width: 64,
                          height: 64,
                          mb: 3,
                          filter: 'drop-shadow(0 0 25px rgba(0, 183, 255, 0.4))',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />
                      
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                        }}
                      >
                        {section.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.8,
                          fontSize: '1rem',
                        }}
                      >
                        {section.description}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default DiscoverPage;
