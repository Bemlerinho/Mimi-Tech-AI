import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';

interface ResearchProject {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const researchProjects: ResearchProject[] = [
  {
    title: 'Neuronale Architekturen der nächsten Generation',
    description: 'Entwicklung fortschrittlicher neuronaler Netzwerkarchitekturen für verbesserte Sprachverarbeitung und multimodale Verständnisfähigkeiten.',
    icon: '/icons/language.svg',
    category: 'GRUNDLAGENFORSCHUNG',
  },
  {
    title: 'Ethische KI-Entwicklung',
    description: 'Forschung zu Methoden für die Entwicklung ethischer und verantwortungsvoller KI-Systeme mit Fokus auf Fairness und Transparenz.',
    icon: '/icons/ethics.svg',
    category: 'ETHIK & VERANTWORTUNG',
  },
  {
    title: 'Multilinguale KI-Systeme',
    description: 'Entwicklung von KI-Modellen mit verbessertem Verständnis für verschiedene Sprachen und kulturelle Kontexte.',
    icon: '/icons/language.svg',
    category: 'SPRACHVERARBEITUNG',
  },
  {
    title: 'Nachhaltige KI-Infrastruktur',
    description: 'Forschung zur Optimierung von Energieeffizienz und Ressourcennutzung in KI-Systemen.',
    icon: '/icons/sustainability.svg',
    category: 'NACHHALTIGKEIT',
  },
];

const ResearchPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <SEO 
        title="Forschung & Innovation | Mimi Tech AI"
        description="Entdecken Sie unsere Forschungsprojekte in den Bereichen KI, Ethik und Nachhaltigkeit."
        keywords="KI Forschung, Ethische KI, Nachhaltige KI, Innovation"
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
            transition={{ duration: 0.8, ease: "easeOut" }}
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
              Forschung & Innovation
            </Typography>

            <Typography
              variant="h5"
              align="center"
              sx={{ 
                mb: 8, 
                maxWidth: '800px', 
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
              }}
            >
              Wir treiben die Grenzen der KI-Technologie voran und entwickeln die
              nächste Generation ethischer und nachhaltiger KI-Systeme.
            </Typography>

            <Grid container spacing={4}>
              {researchProjects.map((project, index) => (
                <Grid item xs={12} md={6} key={project.title}>
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
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 3,
                        }}
                      >
                        <Box
                          component="img"
                          src={project.icon}
                          alt=""
                          sx={{
                            width: 48,
                            height: 48,
                            mr: 2,
                            filter: 'drop-shadow(0 0 25px rgba(0, 183, 255, 0.4))',
                          }}
                        />
                        <Typography
                          variant="overline"
                          sx={{
                            color: '#00b8ff',
                            fontWeight: 600,
                            letterSpacing: 1.2,
                            fontSize: '0.8rem',
                            textShadow: '0 0 20px rgba(0, 183, 255, 0.3)',
                          }}
                        >
                          {project.category}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.8,
                          fontSize: '1rem',
                        }}
                      >
                        {project.description}
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

export default ResearchPage;
