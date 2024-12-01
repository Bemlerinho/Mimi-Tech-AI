import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import BiotechIcon from '@mui/icons-material/Biotech';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MemoryIcon from '@mui/icons-material/Memory';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PageBackground from '../Background/PageBackground';

const StyledCard = styled(motion.div)(({ theme }) => ({
  height: '100%',
  background: 'rgba(0, 8, 20, 0.5)',
  backdropFilter: 'blur(20px)',
  borderRadius: '24px',
  border: '1px solid rgba(0, 224, 255, 0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
}));

const GlowingIcon = styled(motion.div)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '24px',
  '& > svg': {
    fontSize: '48px',
    color: '#00e0ff',
    filter: 'drop-shadow(0 0 10px rgba(0, 224, 255, 0.5))',
  },
});

const skills = [
  {
    name: 'Künstliche Intelligenz',
    icon: <PsychologyIcon />,
    description: 'Entwicklung intelligenter Systeme und KI-Lösungen für zukunftsweisende Innovationen',
    gradient: 'linear-gradient(135deg, #00e0ff 0%, #0066ff 100%)'
  },
  { 
    name: 'Machine Learning',
    icon: <MemoryIcon />,
    description: 'Implementierung fortschrittlicher ML-Algorithmen und prädiktiver Modelle',
    gradient: 'linear-gradient(135deg, #0066ff 0%, #00e0ff 100%)'
  },
  { 
    name: 'Deep Learning',
    icon: <BiotechIcon />,
    description: 'Spezialisierung auf komplexe neuronale Netze und innovative DL-Architekturen',
    gradient: 'linear-gradient(135deg, #00e0ff 0%, #0066ff 100%)'
  },
  { 
    name: 'Natural Language Processing',
    icon: <AutoFixHighIcon />,
    description: 'Fortgeschrittene Verarbeitung und Analyse natürlicher Sprache',
    gradient: 'linear-gradient(135deg, #0066ff 0%, #00e0ff 100%)'
  },
  { 
    name: 'Computer Vision',
    icon: <CodeIcon />,
    description: 'Innovative Bildverarbeitung und visuelle KI-Anwendungen der nächsten Generation',
    gradient: 'linear-gradient(135deg, #00e0ff 0%, #0066ff 100%)'
  },
  { 
    name: 'Robotik & Automation',
    icon: <PrecisionManufacturingIcon />,
    description: 'Zukunftsweisende Robotersteuerung und intelligente Prozessautomatisierung',
    gradient: 'linear-gradient(135deg, #0066ff 0%, #00e0ff 100%)'
  },
];

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const titleY = useSpring(useMotionValue(20), springConfig);
  
  useEffect(() => {
    titleY.set(0);
  }, []);

  return (
    <PageBackground>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          style={{
            opacity,
            scale,
            y: titleY,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              textAlign: 'center',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #00e0ff 0%, #0066ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(0, 224, 255, 0.3)',
              letterSpacing: '-0.02em',
            }}
          >
            MIMI Tech AI
          </Typography>

          <Typography
            variant="h4"
            sx={{
              textAlign: 'center',
              mb: { xs: 6, md: 10 },
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '900px',
              mx: 'auto',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              fontWeight: 500,
              lineHeight: 1.6,
            }}
          >
            Wir entwickeln innovative KI-Lösungen für die digitale Transformation von morgen
          </Typography>

          <Grid container spacing={4}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <StyledCard>
                    <CardContent sx={{ p: 4 }}>
                      <GlowingIcon>{skill.icon}</GlowingIcon>
                      <Typography
                        variant="h5"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          background: skill.gradient,
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {skill.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.8)',
                          lineHeight: 1.8,
                        }}
                      >
                        {skill.description}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </PageBackground>
  );
};

export default About;
