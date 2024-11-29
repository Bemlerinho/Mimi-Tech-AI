import React from 'react';
import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildIcon from '@mui/icons-material/Build';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: '#2A2A3B',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
}));

const features = [
  {
    icon: <ShoppingCartIcon sx={{ fontSize: 40 }} />,
    title: 'Provisionsfrei in allen Abostufen',
    description: 'Naturio bietet flexible Abomodelle für Händler – vom Einzelunternehmen bis zum Großkonzern – komplett ohne versteckte Gebühren oder Provisionen.'
  },
  {
    icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
    title: 'Nachhaltigkeits-Verifizierung',
    description: 'Alle Produkte werden sorgfältig geprüft und zertifiziert, um die höchsten Nachhaltigkeitsstandards zu erfüllen.'
  },
  {
    icon: <PrecisionManufacturingIcon sx={{ fontSize: 40 }} />,
    title: 'Intelligentes Produkt-Matching',
    description: 'Unsere KI liefert gezielte Produktempfehlungen und optimiert Ihre Sichtbarkeit, um Ihre nachhaltigen Produkte effektiv zu vermarkten.'
  },
  {
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    title: 'Umfassende Händler-Tools',
    description: 'Leistungsstarke Verwaltungs- und Analysetools bieten Ihnen Marketing-Features, um Ihren Erfolg zu maximieren.'
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#1E1E2F', py: 10 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: '#FFFFFF',
              mb: 2,
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600
            }}
          >
            Hauptfunktionen
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: '#FFFFFF',
              opacity: 0.8,
              mb: 8,
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Entdecken Sie die Kernfunktionen von Naturio – Ihre Plattform für nachhaltige und provisionsfreie Lösungen.
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <FeatureCard>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      color: 'primary.main',
                      mr: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </Typography>
                </FeatureCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
