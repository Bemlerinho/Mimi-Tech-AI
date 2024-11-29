import React from 'react';
import { Box, Container, Grid, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SupportIcon from '@mui/icons-material/Support';
import StaticBackground from '../../components/ThreeAnimation';

const features = [
  {
    icon: <CodeIcon />,
    title: 'KI-Integration',
    description: 'Nahtlose Integration modernster KI-Technologien in bestehende Systeme',
  },
  {
    icon: <StorageIcon />,
    title: 'Datenverarbeitung',
    description: 'Effiziente Verarbeitung und Analyse großer Datenmengen mit KI',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud-Infrastruktur',
    description: 'Skalierbare Cloud-basierte KI-Infrastruktur für maximale Flexibilität',
  },
  {
    icon: <SecurityIcon />,
    title: 'Enterprise Security',
    description: 'Höchste Sicherheitsstandards für Ihre KI-Anwendungen',
  },
  {
    icon: <SpeedIcon />,
    title: 'Performance',
    description: 'Optimierte Leistung durch KI-gestützte Prozessautomatisierung',
  },
  {
    icon: <SupportIcon />,
    title: '24/7 Support',
    description: 'Rund-um-die-Uhr Unterstützung durch unser Expertenteam',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', py: 8, backgroundColor: 'transparent' }}>
      <StaticBackground color="#00a86b" />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 700,
              color: 'white',
              mb: 6,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Unsere Leistungen
          </Typography>
        </motion.div>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                    transition: 'transform 0.3s ease-in-out',
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(10px)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .feature-icon': {
                        color: '#00a86b',
                      },
                    },
                  }}
                >
                  <Box
                    className="feature-icon"
                    sx={{
                      display: 'flex',
                      mb: 2,
                      color: '#2c3e50',
                      transition: 'color 0.3s ease-in-out',
                      '& > svg': {
                        fontSize: 40,
                      },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
