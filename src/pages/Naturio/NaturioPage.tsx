import React from 'react';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO/SEO';
import FeaturesSection from '../../components/Naturio/FeaturesSection';
import SwarmBackground from '../../components/SwarmBackground';

const NaturioPage: React.FC = () => {
  return (
    <>
      <SwarmBackground />
      <SEO 
        title="Naturio | Nachhaltige KI-Lösung für Landwirtschaft"
        description="Naturio - Die innovative KI-Lösung für nachhaltige Landwirtschaft und Ressourcenmanagement. Optimieren Sie Ihre Prozesse mit modernster Technologie."
        keywords="Naturio, Landwirtschaft KI, Nachhaltige KI, Ressourcenmanagement"
      />
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(146,205,138,0.1) 0%, rgba(95,141,89,0.1) 100%)',
          pt: 12,
          pb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container>
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
                      marginBottom: '2rem'
                    }}
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '2rem' },
                    fontWeight: 500,
                    mb: 3,
                    color: 'text.secondary',
                  }}
                >
                  Die provisionsfreie Plattform für nachhaltige Produkte
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 4, 
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    color: 'text.secondary',
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
                      backgroundColor: '#5F8D59',
                      '&:hover': {
                        backgroundColor: '#4A6E45',
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Händler werden
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/pricing"
                    sx={{
                      borderColor: '#5F8D59',
                      color: '#5F8D59',
                      '&:hover': {
                        borderColor: '#4A6E45',
                        backgroundColor: 'rgba(95,141,89,0.04)',
                      },
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                    }}
                  >
                    Abomodelle ansehen
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
                      background: 'rgba(146,205,138,0.1)',
                      borderRadius: '20px',
                      transform: 'rotate(-3deg)',
                      zIndex: -1
                    }
                  }}
                >
                  <Box
                    component="img"
                    src="/naturio.svg"
                    alt="Naturio Platform"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      maxWidth: '500px',
                      display: 'block',
                      margin: '0 auto',
                      filter: 'drop-shadow(0px 4px 20px rgba(0,0,0,0.15))',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        filter: 'drop-shadow(0px 8px 30px rgba(0,0,0,0.2))',
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

      <FeaturesSection />
    </>
  );
};

export default NaturioPage;
