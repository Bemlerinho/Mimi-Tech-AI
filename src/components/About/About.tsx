import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  LinearProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(13, 175, 148, 0.15)',
    border: '1px solid rgba(13, 175, 148, 0.3)',
  },
}));

const StyledProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'linear-gradient(90deg, #0DAF94 0%, #3CAAFF 100%)',
  },
}));

const skills = [
  { name: 'Künstliche Intelligenz', progress: 95 },
  { name: 'Machine Learning', progress: 90 },
  { name: 'Deep Learning', progress: 85 },
  { name: 'Natural Language Processing', progress: 88 },
  { name: 'Computer Vision', progress: 92 },
  { name: 'Robotik & Automation', progress: 87 },
];

const About: React.FC = () => {
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
          background: 'radial-gradient(circle at right top, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  mb: 3,
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #3CAAFF 0%, #0DAF94 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Über MIMI Tech AI
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                MIMI Tech AI ist ein führendes Unternehmen im Bereich der künstlichen Intelligenz 
                und Automatisierung. Wir entwickeln innovative Lösungen, die Unternehmen dabei 
                helfen, ihre Prozesse zu optimieren und neue Geschäftsmöglichkeiten zu erschließen.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Mit unserem Team aus erfahrenen Experten und modernster Technologie setzen wir 
                neue Maßstäbe in der KI-Entwicklung und bieten maßgeschneiderte Lösungen für 
                die Herausforderungen von morgen.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <StyledCard>
                <CardContent sx={{ p: 4 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      mb: 4,
                      color: 'white',
                      fontWeight: 600,
                    }}
                  >
                    Unsere Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {skills.map((skill, index) => (
                      <Box key={index}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
                          >
                            {skill.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                          >
                            {skill.progress}%
                          </Typography>
                        </Box>
                        <StyledProgress
                          variant="determinate"
                          value={skill.progress}
                        />
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
