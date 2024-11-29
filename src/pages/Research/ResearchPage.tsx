import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';

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
    <Layout>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 12 } }}>
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
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.8,
              textShadow: '0 0 20px rgba(0, 0, 0, 0.3)'
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
                    component={motion.div}
                    whileHover={{ 
                      y: -12,
                      transition: { duration: 0.3 }
                    }}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.05) 100%)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '24px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      overflow: 'hidden',
                      '&:hover': {
                        boxShadow: '0 16px 48px rgba(0, 183, 255, 0.15)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.08) 100%)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box
                        sx={{
                          width: 90,
                          height: 90,
                          borderRadius: '24px',
                          background: 'linear-gradient(135deg, rgba(0, 183, 255, 0.1) 0%, rgba(123, 66, 255, 0.1) 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 3,
                          transform: 'rotate(-5deg)',
                          boxShadow: '0 8px 24px rgba(0, 183, 255, 0.1)',
                        }}
                      >
                        <img
                          src={project.icon}
                          alt={project.title}
                          style={{ 
                            width: 45, 
                            height: 45,
                            filter: 'drop-shadow(0 4px 12px rgba(0, 183, 255, 0.3))'
                          }}
                        />
                      </Box>
                      <Typography
                        variant="overline"
                        sx={{
                          color: '#00b8ff',
                          fontWeight: 700,
                          letterSpacing: '2px',
                          fontSize: '0.85rem',
                          textShadow: '0 0 20px rgba(0, 183, 255, 0.3)',
                        }}
                      >
                        {project.category}
                      </Typography>
                      <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                          mt: 1,
                          mb: 2,
                          fontSize: { xs: '1.75rem', md: '2rem' },
                          fontWeight: 700,
                          background: 'linear-gradient(135deg, #fff 0%, rgba(255, 255, 255, 0.8) 100%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                          fontSize: '1.05rem',
                        }}
                      >
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default ResearchPage;
