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
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';

interface AboutSection {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const aboutSections: AboutSection[] = [
  {
    title: 'Unsere Vision',
    description: 'MIMI Tech AI strebt danach, als globaler Vorreiter die Zukunft nachhaltiger KI-Technologien zu gestalten. Unsere Vision verbindet technologische Effizienz mit ökologischer Verantwortung, um Unternehmen und Konsumenten gleichermaßen zu unterstützen.',
    icon: '/icons/vision.svg',
    category: 'ZUKUNFT & INNOVATION',
  },
  {
    title: 'Unser Team',
    description: 'Unser Team vereint erfahrene Spezialisten aus den Bereichen künstliche Intelligenz, Softwareentwicklung und Nachhaltigkeit. Mit einem globalen Ansatz entwickeln wir maßgeschneiderte Lösungen für unsere Kunden.',
    icon: '/icons/team.svg',
    category: 'EXPERTISE & ERFAHRUNG',
  },
  {
    title: 'Nachhaltigkeit',
    description: 'Wir setzen auf ressourceneffiziente Technologien und nachhaltige Entwicklungspraktiken. Unser Ziel ist es, durch innovative KI-Lösungen einen positiven Beitrag zur Umwelt zu leisten.',
    icon: '/icons/sustainability.svg',
    category: 'UMWELT & RESSOURCEN',
  },
  {
    title: 'Innovation',
    description: 'Durch kontinuierliche Forschung und Entwicklung treiben wir die Grenzen der KI-Technologie voran. Wir entwickeln zukunftsweisende Lösungen, die unseren Kunden einen echten Mehrwert bieten.',
    icon: '/icons/innovation.svg',
    category: 'FORSCHUNG & ENTWICKLUNG',
  },
];

const AboutPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <SEO 
        title="Über uns | Mimi Tech AI"
        description="Erfahren Sie mehr über Mimi Tech AI - Unsere Vision, unser Team und unsere Werte in der KI-Entwicklung."
        keywords="Über Mimi Tech AI, KI Vision, Team, Nachhaltigkeit, Innovation"
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
              Über MIMI Tech AI
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
              Wir sind ein innovatives Technologieunternehmen, das sich der Entwicklung
              nachhaltiger und ethischer KI-Lösungen verschrieben hat.
            </Typography>

            <Grid container spacing={4}>
              {aboutSections.map((section, index) => (
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
                        variant="overline"
                        sx={{
                          color: '#00b8ff',
                          fontWeight: 600,
                          letterSpacing: 1.2,
                          mb: 1,
                          display: 'block',
                          fontSize: '0.8rem',
                          textShadow: '0 0 20px rgba(0, 183, 255, 0.3)',
                        }}
                      >
                        {section.category}
                      </Typography>

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

export default AboutPage;
