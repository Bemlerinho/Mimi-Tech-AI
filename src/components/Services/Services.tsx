import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import DataObjectIcon from '@mui/icons-material/DataObject';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SecurityIcon from '@mui/icons-material/Security';

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 24px rgba(13, 175, 148, 0.15)',
    border: '1px solid rgba(13, 175, 148, 0.3)',
    '& .MuiIconButton-root': {
      backgroundColor: theme.palette.primary.main,
      transform: 'rotate(180deg)',
    },
  },
}));

const IconWrapper = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'rgba(13, 175, 148, 0.1)',
  width: '64px',
  height: '64px',
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease-in-out',
  '& svg': {
    fontSize: '32px',
    color: theme.palette.primary.main,
  },
}));

const services = [
  {
    title: 'KI-Entwicklung',
    description: 'Maßgeschneiderte KI-Lösungen für Ihr Unternehmen mit modernsten Algorithmen und Technologien.',
    icon: <SmartToyIcon />,
  },
  {
    title: 'Machine Learning',
    description: 'Entwicklung und Implementation von ML-Modellen für Datenanalyse und Vorhersagen.',
    icon: <AutoAwesomeIcon />,
  },
  {
    title: 'API Integration',
    description: 'Nahtlose Integration von KI-Services in bestehende Systeme durch moderne APIs.',
    icon: <DataObjectIcon />,
  },
  {
    title: 'Automatisierung',
    description: 'Prozessautomatisierung durch intelligente Algorithmen und Robotik.',
    icon: <IntegrationInstructionsIcon />,
  },
  {
    title: 'Datenanalyse',
    description: 'Umfassende Analyse Ihrer Daten für fundierte Geschäftsentscheidungen.',
    icon: <AnalyticsIcon />,
  },
  {
    title: 'KI-Sicherheit',
    description: 'Implementierung sicherer KI-Systeme mit Fokus auf Datenschutz und Ethik.',
    icon: <SecurityIcon />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Services: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #3CAAFF 0%, #0DAF94 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Unsere Services
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Entdecken Sie unsere innovativen KI-Lösungen für die Herausforderungen von morgen
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={itemVariants}>
                  <ServiceCard>
                    <CardContent
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        p: 4,
                      }}
                    >
                      <IconWrapper>{service.icon}</IconWrapper>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          mb: 2,
                          color: 'white',
                          fontWeight: 600,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.6,
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </ServiceCard>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;
