import React from 'react';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import FeaturesSection from '../../components/Naturio/FeaturesSection';
import HowItWorksSection from '../../components/Naturio/HowItWorksSection';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';

const NaturioPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="Naturio | Nachhaltige KI-Lösung für Landwirtschaft"
        description="Naturio - Die innovative KI-Lösung für nachhaltige Landwirtschaft und Ressourcenmanagement. Optimieren Sie Ihre Prozesse mit modernster Technologie."
        keywords="Naturio, Landwirtschaft KI, Nachhaltige KI, Ressourcenmanagement"
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
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Box sx={{ mb: 4 }}>
                  <motion.img
                    src="/images/Naturio.jpg"
                    alt="Naturio Logo"
                    style={{
                      width: '280px',
                      height: 'auto',
                      marginBottom: '2rem',
                      filter: 'drop-shadow(0 0 25px rgba(0, 183, 255, 0.4))',
                      objectFit: 'contain',
                      display: 'block'
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </Box>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                    background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 50%, #7b42ff 100%)',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 40px rgba(0, 183, 255, 0.15)',
                  }}
                >
                  Die provisionsfreie Plattform für nachhaltige Produkte
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'rgba(255, 255, 255, 0.7)',
                    maxWidth: '600px'
                  }}
                >
                  Naturio ist der führende Marktplatz für ausschließlich nachhaltige Produkte. 
                  Wir bieten Händlern ein einzigartiges, provisionsfreies Abomodell - von 
                  kleinen Einzelhändlern bis hin zu großen Unternehmen. Starten Sie jetzt 
                  und profitieren Sie von unserer innovativen Plattform für nachhaltigen Handel.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    sx={{
                      background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 100%)',
                      color: '#0A1A2F',
                      fontWeight: 600,
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00ff9b 20%, #00b8ff 120%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0, 183, 255, 0.25)',
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Händler werden
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/contact"
                    sx={{
                      borderColor: '#00b8ff',
                      color: '#00b8ff',
                      '&:hover': {
                        borderColor: '#00ff9b',
                        backgroundColor: 'rgba(0, 183, 255, 0.1)',
                        transform: 'translateY(-2px)',
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Jetzt kontaktieren
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'relative',
                  padding: '2rem'
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(0, 183, 255, 0.1)',
                      borderRadius: '20px',
                      transform: 'rotate(-3deg)',
                      zIndex: -1
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="/images/naturio.svg"
                    alt="Naturio Platform"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '500px',
                      display: 'block',
                      margin: '0 auto',
                      filter: 'drop-shadow(0px 4px 20px rgba(0, 183, 255, 0.25))',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'drop-shadow(0px 8px 30px rgba(0, 183, 255, 0.4))',
                        transform: 'translateY(-5px)'
                      }
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <HowItWorksSection />
      <FeaturesSection />
    </>
  );
};

export default NaturioPage;
