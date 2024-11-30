import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SolutionCard = styled(Card)(({ theme }) => ({
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
  '& .MuiTypography-h5': {
    color: '#FFFFFF',
    fontWeight: 600,
    marginBottom: '1rem',
    fontSize: '1.5rem',
  },
  '& .MuiTypography-body1': {
    color: '#F0F0F0',
    fontSize: '1.1rem',
    lineHeight: 1.6,
  },
  '& .feature-item': {
    color: '#F0F0F0',
    marginBottom: '0.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 32px rgba(13, 175, 148, 0.15)',
    border: '1px solid rgba(13, 175, 148, 0.3)',
    '& .MuiSvgIcon-root': {
      color: '#0DAF94',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: '12px 24px',
  borderRadius: '8px',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateX(5px)',
  },
}));

const solutions = [
  {
    title: 'OpenAI System-Lösungen',
    description: 'Integrieren Sie modernste KI-Technologie in Ihre bestehenden Systeme.',
    features: [
      'GPT-Integration',
      'Selbstlernende Systeme',
      'Echtzeitanalyse',
      'Intelligente Automation',
    ],
  },
  {
    title: 'Maßgeschneiderte APIs',
    description: 'Entwicklung und Bereitstellung individueller KI-APIs für Ihre spezifischen Anforderungen.',
    features: [
      'Flexible Schnittstellen',
      'Moderne Technologien',
      'Hohe Skalierbarkeit',
      'Umfassende Dokumentation',
    ],
  },
];

const Solutions: React.FC = () => {
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
          background: 'radial-gradient(circle at right, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
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
            Unsere KI-Lösungen
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
            Entdecken Sie unsere innovativen KI-Lösungen für Ihr Unternehmen
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 4,
          }}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <SolutionCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 2,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    {solution.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.6,
                    }}
                  >
                    {solution.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {solution.features.map((feature, featureIndex) => (
                      <Box
                        key={featureIndex}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                          className: 'feature-item',
                        }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{
                            mr: 1,
                            color: 'primary.main',
                            fontSize: '1.2rem',
                          }}
                        />
                        <Typography
                          variant="body1"
                          sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                  <StyledButton
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Jetzt anfragen
                  </StyledButton>
                </CardContent>
              </SolutionCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Solutions;
