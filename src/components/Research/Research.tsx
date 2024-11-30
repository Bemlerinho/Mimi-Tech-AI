import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import HubIcon from '@mui/icons-material/Hub';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import NatureIcon from '@mui/icons-material/Nature';

const ResearchCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(10, 26, 47, 0.85)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(13, 175, 148, 0.2)',
  transition: 'all 0.3s ease-in-out',
  padding: '2rem',
  '& .MuiTypography-root': {
    textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
  },
  '& .MuiTypography-subtitle2': {
    color: '#0DAF94',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '0.5rem',
  },
  '& .MuiTypography-h5': {
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: '1.5rem',
    marginBottom: '1rem',
  },
  '& .MuiTypography-body1': {
    color: '#F0F0F0',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 32px rgba(13, 175, 148, 0.15)',
    border: '1px solid rgba(13, 175, 148, 0.3)',
    '& .icon-wrapper': {
      background: 'rgba(13, 175, 148, 0.2)',
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '64px',
  height: '64px',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '1.5rem',
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '32px',
    color: '#0DAF94',
  },
}));

const researchAreas = [
  {
    title: 'Grundlagenforschung',
    subtitle: 'Neuronale Architekturen der nächsten Generation',
    description: 'Entwicklung innovativer KI-Modelle und Algorithmen für verbesserte Leistung und Effizienz.',
    icon: <HubIcon />,
  },
  {
    title: 'Ethik & Verantwortung',
    subtitle: 'Ethische KI-Entwicklung',
    description: 'Forschung zu verantwortungsvoller KI-Entwicklung und ethischen Richtlinien.',
    icon: <SecurityIcon />,
  },
  {
    title: 'Sprachverarbeitung',
    subtitle: 'Multilinguale KI-Systeme',
    description: 'Entwicklung fortschrittlicher Sprachmodelle für natürliche Kommunikation.',
    icon: <LanguageIcon />,
  },
  {
    title: 'Nachhaltigkeit',
    subtitle: 'Nachhaltige KI-Modelle',
    description: 'Forschung zur Entwicklung energieeffizienter und umweltfreundlicher KI-Systeme.',
    icon: <NatureIcon />,
  },
];

const Research: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at left, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #3CAAFF 0%, #0DAF94 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Forschung & Innovation
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Wir treiben die Grenzen der KI-Technologie voran und entwickeln die
            nächste Generation ethischer und nachhaltiger KI-Systeme.
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ResearchCard>
                <CardContent sx={{ p: 4 }}>
                  <IconWrapper className="icon-wrapper">
                    {area.icon}
                  </IconWrapper>
                  <Typography
                    variant="subtitle2"
                  >
                    {area.title}
                  </Typography>
                  <Typography
                    variant="h5"
                  >
                    {area.subtitle}
                  </Typography>
                  <Typography
                    variant="body1"
                  >
                    {area.description}
                  </Typography>
                </CardContent>
              </ResearchCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Research;
