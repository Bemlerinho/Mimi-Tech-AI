import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';

interface ResearchArea {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #e0f7fa 0%, #80deea 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  '& img': {
    width: '40px',
    height: '40px',
  },
}));

const CategoryLabel = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  padding: '4px 12px',
  borderRadius: '16px',
  backgroundColor: 'rgba(0, 128, 128, 0.1)',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontSize: '0.875rem',
  fontWeight: 500,
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
    <Box
      sx={{
        py: 12,
        background: 'linear-gradient(135deg, rgba(0,128,128,0.05) 0%, rgba(0,64,128,0.05) 100%)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ 
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #004d40 0%, #00796b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Forschung & Innovation
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: '800px', mx: 'auto' }}
          >
            Wir treiben die Grenzen der KI-Technologie voran und entwickeln die
            nächste Generation ethischer und nachhaltiger KI-Systeme.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {researchAreas.map((area, index) => (
            <Grid item xs={12} md={6} key={area.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <StyledCard>
                  <CardContent sx={{ p: 4 }}>
                    <IconWrapper>
                      <img src={area.icon} alt={area.title} />
                    </IconWrapper>
                    <CategoryLabel>{area.category}</CategoryLabel>
                    <Typography
                      variant="h4"
                      gutterBottom
                      sx={{ 
                        fontWeight: 600,
                        fontSize: '1.5rem',
                        mb: 2,
                        minHeight: '4rem'
                      }}
                    >
                      {area.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
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
  );
};

export default ResearchSection;
