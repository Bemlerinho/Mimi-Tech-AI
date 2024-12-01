import React from 'react';
import { Box, Container, Typography, Button, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(8, 0),
  background: 'transparent',
  overflow: 'hidden',
}));

const GradientText = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  position: 'relative',
  textTransform: 'uppercase',
  perspective: '2000px',
  transformStyle: 'preserve-3d',
  '&::before, &::after': {
    content: 'attr(data-text)',
    position: 'absolute',
    top: 0,
    left: 0,
    transformStyle: 'preserve-3d',
    transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '&::before': {
    transform: 'translateZ(-20px) skewX(-15deg)',
    background: 'linear-gradient(135deg, #13A7B0 0%, #0DAF94 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.4,
    filter: 'blur(8px)',
  },
  '&::after': {
    transform: 'translateZ(-40px) skewX(-15deg)',
    background: 'linear-gradient(135deg, #0DAF94 0%, #13A7B0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.2,
    filter: 'blur(16px)',
  },
  '&:hover': {
    '&::before': {
      transform: 'translateZ(-30px) skewX(-15deg) rotateY(-10deg)',
      opacity: 0.6,
    },
    '&::after': {
      transform: 'translateZ(-60px) skewX(-15deg) rotateY(-10deg)',
      opacity: 0.3,
    }
  },
  animation: 'float 8s ease-in-out infinite',
  '@keyframes float': {
    '0%, 100%': { 
      transform: 'translateY(0px) rotateX(0deg)',
      filter: 'drop-shadow(0 20px 30px rgba(19, 167, 176, 0.2))',
    },
    '50%': { 
      transform: 'translateY(-15px) rotateX(2deg)',
      filter: 'drop-shadow(0 35px 40px rgba(19, 167, 176, 0.4))',
    }
  }
}));

const StyledButton = styled(Button)(({ theme }) => ({
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: 'rgba(19, 167, 176, 0.05)',
  border: '1px solid rgba(19, 167, 176, 0.3)',
  backdropFilter: 'blur(12px)',
  color: '#ffffff',
  position: 'relative',
  overflow: 'hidden',
  clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(19, 167, 176, 0.5) 180deg, rgba(13, 175, 148, 0.5) 270deg, transparent 360deg)',
    animation: 'rotate 4s linear infinite',
    opacity: 0,
    transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: '1px',
    background: 'rgba(19, 167, 176, 0.1)',
    clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)',
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 20px 40px rgba(19, 167, 176, 0.2)',
    '&::before': {
      opacity: 1,
    },
    '&::after': {
      background: 'rgba(19, 167, 176, 0.2)',
    }
  },
  '@keyframes rotate': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  }
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContent>
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} sx={{ textAlign: 'center', mb: 4 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '25%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '20px',
                  background: 'linear-gradient(90deg, rgba(19, 167, 176, 0), rgba(19, 167, 176, 0.3), rgba(19, 167, 176, 0))',
                  filter: 'blur(8px)',
                  animation: 'glowPulse 3s ease-in-out infinite',
                  borderRadius: '50%',
                  zIndex: 1
                },
                '@keyframes glowPulse': {
                  '0%, 100%': {
                    opacity: 0.3,
                    transform: 'translateX(-50%) scale(1)'
                  },
                  '50%': {
                    opacity: 0.6,
                    transform: 'translateX(-50%) scale(1.1)'
                  }
                }
              }}
            >
              <motion.img
                src="/mimi-tech-ai-logo.svg"
                alt="Mimi Tech Logo"
                style={{
                  width: '280px',
                  height: 'auto',
                  marginBottom: '2rem',
                  position: 'relative',
                  zIndex: 2,
                  filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: 1,
                  scale: [0.98, 1.02, 0.98],
                  filter: [
                    'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))',
                    'drop-shadow(0 8px 12px rgba(19, 167, 176, 0.3))',
                    'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.25))'
                  ]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <GradientText
                variant="h1"
                data-text="Nachhaltige KI-Lösungen für die Zukunft"
                sx={{
                  fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
                  letterSpacing: '0.02em',
                  lineHeight: { xs: 1.2, md: 1.1 },
                  mb: { xs: 4, md: 5 },
                  textAlign: 'center',
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '-40%',
                    left: '-15%',
                    width: '130%',
                    height: '180%',
                    background: 'radial-gradient(ellipse at center, rgba(19, 167, 176, 0.15) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                    animation: 'pulse 6s ease-in-out infinite',
                    transformStyle: 'preserve-3d',
                    transform: 'translateZ(-1px)',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { 
                      opacity: 0.5, 
                      transform: 'scale(1) translateZ(-1px)',
                      filter: 'blur(30px)',
                    },
                    '50%': { 
                      opacity: 0.8, 
                      transform: 'scale(1.1) translateZ(-1px)',
                      filter: 'blur(25px)',
                    }
                  }
                }}
              >
                Nachhaltige KI-Lösungen für die Zukunft
              </GradientText>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    lineHeight: 1.5,
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    mb: { xs: 6, md: 7 },
                    position: 'relative',
                    background: 'linear-gradient(90deg, rgba(19, 167, 176, 0.15), rgba(19, 167, 176, 0.05))',
                    backdropFilter: 'blur(8px)',
                    padding: '1.75rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(19, 167, 176, 0.1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                      borderRadius: '16px',
                    },
                    '&:hover::before': {
                      opacity: 1,
                    }
                  }}
                >
                  Innovative KI-Technologien für nachhaltiges Wachstum und digitale Transformation
                </Typography>
              </motion.div>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  mt: 4
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <Button
                    component={Link}
                    to="/discover"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      minWidth: '200px',
                      fontSize: '1.1rem',
                      py: 1.5,
                      background: 'linear-gradient(45deg, #13A7B0, #0DAF94)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #0DAF94, #13A7B0)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(19, 167, 176, 0.3)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Entdecken
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <Button
                    component={Link}
                    to="/learn-more"
                    variant="outlined"
                    size="large"
                    sx={{
                      minWidth: '200px',
                      fontSize: '1.1rem',
                      py: 1.5,
                      borderColor: '#13A7B0',
                      color: '#13A7B0',
                      '&:hover': {
                        borderColor: '#0DAF94',
                        backgroundColor: 'rgba(19, 167, 176, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(19, 167, 176, 0.15)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Mehr erfahren
                  </Button>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Box
                component="img"
                src="/images/hero-image.png"
                alt=""
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  height: 'auto',
                  filter: 'drop-shadow(0 8px 16px rgba(13, 175, 148, 0.3))',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </HeroContent>
  );
};

export default HeroSection;
