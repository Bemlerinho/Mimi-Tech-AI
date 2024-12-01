import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PageBackground from '../Background/PageBackground';

interface ResearchArea {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: '420px',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.04)',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
    '& .icon-wrapper': {
      transform: 'scale(1.1) rotate(5deg)',
    },
    '& .card-content': {
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(233,246,255,0.5) 100%)',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '90px',
  height: '90px',
  borderRadius: '24px',
  background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(16,185,129,0.1) 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  '& img': {
    width: '45px',
    height: '45px',
    filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
  },
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  padding: '8px 16px',
  borderRadius: '12px',
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  color: '#3B82F6',
  marginBottom: theme.spacing(2),
  fontSize: '0.8rem',
  fontWeight: 600,
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  border: '1px solid rgba(59, 130, 246, 0.2)',
  whiteSpace: 'normal',
  wordBreak: 'break-word',
  maxWidth: '100%',
  lineHeight: '1.2',
  textAlign: 'center',
}));

const researchAreas: ResearchArea[] = [
  {
    id: 1,
    title: 'Neuronale Architekturen der nächsten Generation',
    category: 'GRUNDLAGENFORSCHUNG',
    description: 'Entwicklung fortschrittlicher neuronaler Netzwerkarchitekturen für verbesserte Sprachverarbeitung und multimodale Verständnisfähigkeiten.',
    icon: '/icons/neural.svg',
  },
  {
    id: 2,
    title: 'Ethische KI-Entwicklung',
    category: 'ETHIK & VERANTWORTUNG',
    description: 'Forschung zu Methoden für die Entwicklung ethischer und verantwortungsvoller KI-Systeme mit Fokus auf Fairness und Transparenz.',
    icon: '/icons/ethics.svg',
  },
  {
    id: 3,
    title: 'Multilinguale KI-Systeme',
    category: 'SPRACHVERARBEITUNG',
    description: 'Entwicklung von KI-Modellen mit verbessertem Verständnis für verschiedene Sprachen und kulturelle Kontexte.',
    icon: '/icons/language.svg',
  },
  {
    id: 4,
    title: 'Nachhaltige KI-Infrastruktur',
    category: 'NACHHALTIGKEIT',
    description: 'Forschung zur Optimierung von Energieeffizienz und Ressourcennutzung in KI-Systemen.',
    icon: '/icons/sustainability.svg',
  },
];

const ResearchSection: React.FC = () => {
  const theme = useTheme();

  return (
    <PageBackground>
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Box textAlign="center" mb={10}>
              <Typography
                component="span"
                sx={{
                  display: 'block',
                  textTransform: 'uppercase',
                  color: '#3B82F6',
                  fontWeight: 600,
                  letterSpacing: '1.5px',
                  fontSize: '0.875rem',
                  mb: 2,
                }}
              >
                Innovationen für die Zukunft
              </Typography>
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  mb: 3,
                  background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800,
                  letterSpacing: '-0.5px',
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                }}
              >
                Forschung & Innovation
              </Typography>
              <Typography
                variant="h5"
                sx={{ 
                  maxWidth: '800px', 
                  mx: 'auto', 
                  mb: 3, 
                  lineHeight: 1.6,
                  color: 'text.secondary',
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                Wir treiben die Grenzen der KI-Technologie voran und entwickeln die nächste Generation ethischer und nachhaltiger KI-Systeme.
              </Typography>
            </Box>
          </motion.div>

          <Grid container spacing={4}>
            {researchAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={3} key={area.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                >
                  <StyledCard>
                    <CardContent 
                      sx={{ 
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        gap: 2
                      }} 
                      className="card-content"
                    >
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                        <IconWrapper className="icon-wrapper">
                          <img src={area.icon} alt={area.title} />
                        </IconWrapper>
                        <CategoryLabel>{area.category}</CategoryLabel>
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ 
                          fontWeight: 700,
                          fontSize: '1.25rem',
                          lineHeight: 1.4,
                          color: '#1F2937',
                          textAlign: 'center',
                          minHeight: '2.8em',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {area.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ 
                          lineHeight: 1.7,
                          color: '#4B5563',
                          fontSize: '0.975rem',
                          textAlign: 'center',
                          flex: 1,
                        }}
                      >
                        {area.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </PageBackground>
  );
};

export default ResearchSection;
