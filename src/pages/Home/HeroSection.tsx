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
  color: '#13A7B0',
  fontWeight: 700,
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  backgroundColor: '#13A7B0',
  color: '#ffffff',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: '#0DAF94',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(19, 167, 176, 0.3)',
  },
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContent>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Stack spacing={4} alignItems={{ xs: 'center', md: 'flex-start' }}>
                <motion.img
                  src="/mimi-tech-ai-logo.svg"
                  alt="MIMI Tech AI Logo"
                  style={{
                    width: '300px',
                    marginBottom: '2rem',
                    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    filter: [
                      'drop-shadow(0 4px 8px rgba(19, 167, 176, 0.3))',
                      'drop-shadow(0 4px 16px rgba(19, 167, 176, 0.6))',
                      'drop-shadow(0 4px 8px rgba(19, 167, 176, 0.3))',
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                    fontWeight: 800,
                    color: '#ffffff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    maxWidth: '800px',
                  }}
                >
                  Nachhaltige KI-Lösungen für die Zukunft
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.25rem', sm: '1.5rem' },
                    color: 'text.secondary',
                    maxWidth: '600px',
                    textAlign: { xs: 'center', md: 'left' },
                    mb: 4,
                    opacity: 0.9,
                  }}
                >
                  Innovative KI-Technologien für nachhaltiges Wachstum und digitale Transformation
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems="center"
                >
                  <StyledButton
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Mehr erfahren
                  </StyledButton>

                  <Button
                    component={motion.button}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    variant="outlined"
                    size="large"
                    sx={{
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      px: 4,
                      py: 1.5,
                      borderRadius: '30px',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        borderColor: '#13A7B0',
                        backgroundColor: 'rgba(19, 167, 176, 0.1)',
                      },
                    }}
                  >
                    Kontakt aufnehmen
                  </Button>
                </Stack>
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
