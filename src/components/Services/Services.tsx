import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import PageBackground from '../Background/PageBackground';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  minHeight: '300px',
  background: 'rgba(2, 6, 23, 0.5)',
  backdropFilter: 'blur(10px)',
  borderRadius: '20px',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '& .icon-wrapper': {
      transform: 'scale(1.1)',
      background: 'rgba(0, 224, 255, 0.1)',
    },
    '& .service-title': {
      color: '#00e0ff',
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: 'linear-gradient(90deg, #00e0ff 0%, rgba(0, 224, 255, 0.3) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: '70px',
  height: '70px',
  borderRadius: '16px',
  background: 'rgba(0, 224, 255, 0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(0, 224, 255, 0.1)',
  boxShadow: '0 4px 12px rgba(0, 224, 255, 0.1)',
  '& img': {
    width: '35px',
    height: '35px',
    filter: 'brightness(0) invert(1)',
    opacity: 0.9,
  },
}));

const services: Service[] = [
  {
    id: 1,
    title: 'KI-Integration',
    description: 'Nahtlose Integration modernster KI-Technologien in bestehende Systeme',
    icon: '/images/ai-matching.svg',
  },
  {
    id: 2,
    title: 'Datenverarbeitung',
    description: 'Effiziente Verarbeitung und Analyse großer Datenmengen mit KI',
    icon: '/images/tools.svg',
  },
  {
    id: 3,
    title: 'Cloud-Infrastruktur',
    description: 'Skalierbare Cloud-basierte KI-Infrastruktur für maximale Flexibilität',
    icon: '/images/innovation.svg',
  },
  {
    id: 4,
    title: 'Enterprise Security',
    description: 'Höchste Sicherheitsstandards für Ihre KI-Anwendungen',
    icon: '/images/verification.svg',
  },
  {
    id: 5,
    title: 'Performance',
    description: 'Optimierte Leistung durch KI-gestützte Prozessautomatisierung',
    icon: '/icons/performance.svg',
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'Rund-um-die-Uhr Unterstützung durch unser Expertenteam',
    icon: '/icons/support.svg',
  },
];

const ServicesSection: React.FC = () => {
  const theme = useTheme();

  return (
    <PageBackground>
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          component="section"
          sx={{
            py: { xs: 10, md: 15 },
            background: 'linear-gradient(180deg, #001B3D 0%, #000B1A 100%)',
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
          }}
        >
          {/* Animated background elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: 'hidden',
              zIndex: 0,
              opacity: 0.4,
            }}
          >
            {[...Array(5)].map((_, i) => (
              <Box
                key={i}
                component={motion.div}
                sx={{
                  position: 'absolute',
                  background: 'radial-gradient(circle, rgba(0, 224, 255, 0.15) 0%, rgba(0, 224, 255, 0) 70%)',
                  borderRadius: '50%',
                  filter: 'blur(40px)',
                }}
                initial={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: 1,
                  opacity: 0.3,
                }}
                animate={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                style={{
                  width: '400px',
                  height: '400px',
                  left: `${i * 25}%`,
                  top: `${i * 20}%`,
                }}
              />
            ))}
          </Box>

          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Box textAlign="center" mb={10}>
                <Typography
                  component="h2"
                  variant="h2"
                  sx={{
                    mb: 3,
                    fontWeight: 700,
                    letterSpacing: '-0.5px',
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    color: '#fff',
                    textShadow: '0 0 20px rgba(0, 224, 255, 0.3)',
                  }}
                >
                  Unsere Leistungen
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ 
                    maxWidth: '800px', 
                    mx: 'auto', 
                    mb: 3, 
                    lineHeight: 1.6,
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontWeight: 400,
                    fontSize: { xs: '1.1rem', md: '1.25rem' },
                  }}
                >
                  Innovative Lösungen für Ihre digitale Transformation
                </Typography>
              </Box>
            </motion.div>

            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={service.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <StyledCard>
                      <CardContent 
                        sx={{ 
                          p: 4,
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          textAlign: 'center',
                        }}
                      >
                        <IconWrapper className="icon-wrapper">
                          <img src={service.icon} alt={service.title} />
                        </IconWrapper>
                        <Typography
                          variant="h5"
                          component="h3"
                          className="service-title"
                          sx={{ 
                            fontWeight: 600,
                            mb: 2,
                            color: 'rgba(255, 255, 255, 0.95)',
                            fontSize: '1.4rem',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {service.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ 
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.7,
                            fontSize: '1rem',
                          }}
                        >
                          {service.description}
                        </Typography>
                      </CardContent>
                    </StyledCard>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </PageBackground>
  );
};

export default ServicesSection;
