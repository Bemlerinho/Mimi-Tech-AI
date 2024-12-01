import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';
import { Link } from 'react-router-dom';

interface LearnMoreSection {
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const sections: LearnMoreSection[] = [
  {
    title: 'Unsere Technologie',
    description: 'Erfahren Sie mehr über unsere innovative KI-Technologie und wie sie Ihr Unternehmen transformieren kann. Wir setzen auf modernste Algorithmen und nachhaltige Entwicklung.',
    buttonText: 'Technologie erkunden',
    link: '/research',
  },
  {
    title: 'Produkte & Lösungen',
    description: 'Entdecken Sie unser Portfolio an KI-Lösungen, von Naturio für nachhaltige Landwirtschaft bis hin zu individuellen Entwicklungen für Ihr Unternehmen.',
    buttonText: 'Produkte ansehen',
    link: '/products',
  },
  {
    title: 'Über uns',
    description: 'Lernen Sie unser Team kennen und erfahren Sie mehr über unsere Mission, Werte und Vision für die Zukunft der KI-Technologie.',
    buttonText: 'Team kennenlernen',
    link: '/about',
  },
  {
    title: 'Kontakt & Beratung',
    description: 'Lassen Sie uns gemeinsam besprechen, wie wir Ihr Unternehmen mit KI-Innovation unterstützen können. Vereinbaren Sie ein kostenloses Beratungsgespräch.',
    buttonText: 'Kontakt aufnehmen',
    link: '/contact',
  },
];

const LearnMorePage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Mehr erfahren | Mimi Tech AI"
        description="Erfahren Sie mehr über Mimi Tech AI - Unsere Technologie, Produkte, Team und Vision für die Zukunft der KI-Innovation."
        keywords="KI Technologie, Mimi Tech AI Team, KI Produkte, KI Beratung"
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
              Mehr über uns erfahren
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
              Entdecken Sie, wie wir mit innovativer KI-Technologie die digitale 
              Transformation vorantreiben und nachhaltige Lösungen schaffen
            </Typography>

            <Grid container spacing={4}>
              {sections.map((section, index) => (
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
                          mb: 3,
                        }}
                      >
                        {section.description}
                      </Typography>

                      <Button
                        component={Link}
                        to={section.link}
                        variant="contained"
                        sx={{
                          background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 100%)',
                          color: '#0A1A2F',
                          fontWeight: 600,
                          py: 1.5,
                          px: 3,
                          fontSize: '1rem',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #00ff9b 20%, #00b8ff 120%)',
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 25px rgba(0, 183, 255, 0.25)',
                          },
                          transition: 'all 0.3s ease-in-out',
                        }}
                      >
                        {section.buttonText}
                      </Button>
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

export default LearnMorePage;
