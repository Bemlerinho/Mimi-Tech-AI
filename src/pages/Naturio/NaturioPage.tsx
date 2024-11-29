import React from 'react';
import { Box, Container, Typography, Grid, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';
import SEO from '../../components/SEO/SEO';
import FeaturesSection from '../../components/Naturio/FeaturesSection';

const NaturioPage: React.FC = () => {
  return (
    <Layout>
      <SEO 
        title="Naturio | Nachhaltige KI-Lösung für Landwirtschaft"
        description="Naturio - Die innovative KI-Lösung für nachhaltige Landwirtschaft und Ressourcenmanagement. Optimieren Sie Ihre Prozesse mit modernster Technologie."
        keywords="Naturio, Landwirtschaft KI, Nachhaltige KI, Ressourcenmanagement"
      />
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0,128,128,0.1) 0%, rgba(0,64,128,0.1) 100%)',
          pt: 12,
          pb: 6,
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
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 3,
                  }}
                >
                  Naturio
                </Typography>
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
                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                  Naturio ist der führende Marktplatz für ausschließlich nachhaltige Produkte. 
                  Wir bieten Händlern ein einzigartiges, provisionsfreies Abomodell - von 
                  kleinen Einzelhändlern bis hin zu großen Unternehmen. Starten Sie jetzt 
                  und profitieren Sie von unserer innovativen Plattform für nachhaltigen Handel.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                  <Button
                    variant="contained"
                    size="large"
                    href="/contact"
                    sx={{
                      backgroundColor: '#00a86b',
                      '&:hover': {
                        backgroundColor: '#008f5d',
                      },
                    }}
                  >
                    Händler werden
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    href="/pricing"
                    sx={{
                      borderColor: '#00a86b',
                      color: '#00a86b',
                      '&:hover': {
                        borderColor: '#008f5d',
                        backgroundColor: 'rgba(0,168,107,0.04)',
                      },
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
              >
                <Box
                  component="img"
                  src="/images/Naturio.jpg"
                  alt="Naturio Platform"
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <FeaturesSection />
    </Layout>
  );
};

export default NaturioPage;
