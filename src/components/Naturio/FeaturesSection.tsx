import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Paper, Collapse } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: 'rgba(42, 42, 59, 0.7)',
  backdropFilter: 'blur(10px)',
  color: '#FFFFFF',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    backgroundColor: 'rgba(42, 42, 59, 0.9)',
    boxShadow: '0 12px 40px rgba(0, 183, 255, 0.2)',
    border: '1px solid rgba(0, 183, 255, 0.3)',
  },
}));

const features = [
  {
    icon: '/images/commission-free.svg',
    title: 'Provisionsfrei in allen Abostufen',
    description: 'Naturio bietet flexible Abomodelle für Händler – vom Einzelunternehmen bis zum Großkonzern – komplett ohne versteckte Gebühren oder Provisionen.',
    details: [
      'Transparente Preisstruktur',
      'Keine versteckten Gebühren',
      'Flexible Abomodelle',
      'Kostenlose Testphase'
    ]
  },
  {
    icon: '/images/verification.svg',
    title: 'Nachhaltigkeits-Verifizierung',
    description: 'Alle Produkte werden sorgfältig geprüft und zertifiziert, um die höchsten Nachhaltigkeitsstandards zu erfüllen.',
    details: [
      'Strenge Qualitätskontrolle',
      'Zertifizierungsprozess',
      'Regelmäßige Überprüfungen',
      'Transparente Kriterien'
    ]
  },
  {
    icon: '/images/ai-matching.svg',
    title: 'Intelligentes Produkt-Matching',
    description: 'Unsere KI liefert gezielte Produktempfehlungen und optimiert Ihre Sichtbarkeit, um Ihre nachhaltigen Produkte effektiv zu vermarkten.',
    details: [
      'KI-basierte Empfehlungen',
      'Automatische Kategorisierung',
      'SEO-Optimierung',
      'Zielgruppen-Matching'
    ]
  },
  {
    icon: '/images/tools.svg',
    title: 'Umfassende Händler-Tools',
    description: 'Leistungsstarke Verwaltungs- und Analysetools bieten Ihnen Marketing-Features, um Ihren Erfolg zu maximieren.',
    details: [
      'Echtzeit-Analytics',
      'Marketing-Automation',
      'Inventory Management',
      'Performance Tracking'
    ]
  }
];

const FeaturesSection: React.FC = () => {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);

  const handleFeatureClick = (index: number) => {
    setExpandedFeature(expandedFeature === index ? null : index);
  };

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
              fontWeight: 600,
              background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Hauptfunktionen
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: 'rgba(255,255,255,0.8)',
              mb: 8,
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.8,
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
                <FeatureCard onClick={() => handleFeatureClick(index)}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'flex-start',
                    mb: expandedFeature === index ? 3 : 0
                  }}>
                    <Box 
                      sx={{ 
                        mr: 3,
                        transition: 'transform 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'scale(1.1) rotate(5deg)'
                        }
                      }}
                    >
                      <Box
                        component="img"
                        src={feature.icon}
                        alt=""
                        sx={{
                          width: 48,
                          height: 48,
                          filter: 'drop-shadow(0 0 20px rgba(0, 255, 155, 0.3))',
                        }}
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography 
                        variant="h5" 
                        component="h3" 
                        sx={{ 
                          fontWeight: 600,
                          mb: 2,
                          background: expandedFeature === index 
                            ? 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 100%)'
                            : 'none',
                          backgroundClip: 'text',
                          textFillColor: expandedFeature === index ? 'transparent' : 'inherit',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: expandedFeature === index ? 'transparent' : 'inherit',
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: 'rgba(255,255,255,0.8)',
                          lineHeight: 1.7
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Collapse in={expandedFeature === index}>
                    <Box 
                      sx={{ 
                        mt: 3, 
                        pt: 3,
                        borderTop: '1px solid rgba(255,255,255,0.1)'
                      }}
                    >
                      <Grid container spacing={2}>
                        {feature.details.map((detail, detailIndex) => (
                          <Grid item xs={12} sm={6} key={detailIndex}>
                            <Box 
                              sx={{ 
                                display: 'flex',
                                alignItems: 'center',
                                p: 1.5,
                                bgcolor: 'rgba(0, 255, 155, 0.1)',
                                borderRadius: 1,
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  bgcolor: 'rgba(0, 255, 155, 0.2)',
                                  transform: 'translateX(5px)'
                                }
                              }}
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: '#00ff9b',
                                  mr: 2
                                }}
                              />
                              <Typography
                                sx={{
                                  color: 'rgba(255,255,255,0.9)',
                                  fontSize: '0.9rem',
                                  fontWeight: 500
                                }}
                              >
                                {detail}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Collapse>
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
