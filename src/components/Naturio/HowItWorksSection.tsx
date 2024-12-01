import React from 'react';
import { Box, Container, Typography, Stepper, Step, StepLabel, StepContent, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const CustomStepLabel = styled(StepLabel)(({ theme }) => ({
  '& .MuiStepLabel-label': {
    color: '#FFFFFF',
    fontSize: '1.2rem',
    fontWeight: 600,
    marginLeft: theme.spacing(2),
  },
  '& .MuiStepLabel-iconContainer': {
    paddingRight: 0,
  },
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: '#00ff9b',
    filter: 'drop-shadow(0 0 10px rgba(0, 255, 155, 0.3))',
  },
}));

const steps = [
  {
    label: 'Registrierung & Verifizierung',
    description: 'Erstellen Sie Ihr Händlerkonto und durchlaufen Sie unseren schnellen Verifizierungsprozess. Wir prüfen Ihre Unternehmensdetails und Nachhaltigkeitsnachweise.',
    icon: <AccountCircleIcon sx={{ fontSize: 40, color: '#00ff9b' }} />,
  },
  {
    label: 'Shop einrichten',
    description: 'Gestalten Sie Ihren individuellen Shop mit unserem intuitiven Shop-Builder. Passen Sie Design und Branding an Ihre Bedürfnisse an.',
    icon: <StorefrontIcon sx={{ fontSize: 40, color: '#00ff9b' }} />,
  },
  {
    label: 'Produkte hinzufügen',
    description: 'Fügen Sie Ihre nachhaltigen Produkte hinzu. Unsere KI hilft Ihnen bei der Optimierung von Produktbeschreibungen und Kategorisierung.',
    icon: <InventoryIcon sx={{ fontSize: 40, color: '#00ff9b' }} />,
  },
  {
    label: 'Verkaufen & Wachsen',
    description: 'Starten Sie den Verkauf ohne Provisionen. Nutzen Sie unsere Marketing-Tools und Analytics, um Ihren Erfolg zu steigern.',
    icon: <MonetizationOnIcon sx={{ fontSize: 40, color: '#00ff9b' }} />,
  },
];

const StepBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: 'rgba(42, 42, 59, 0.7)',
  backdropFilter: 'blur(10px)',
  borderRadius: theme.spacing(2),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(42, 42, 59, 0.9)',
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
}));

const HowItWorksSection: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#1A1A2E', py: 10 }}>
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
            Wie es funktioniert
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
            In nur wenigen Schritten zu Ihrem erfolgreichen nachhaltigen Online-Shop
          </Typography>
        </motion.div>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          {steps.map((step, index) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StepBox sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                  <Box
                    sx={{
                      bgcolor: 'rgba(0, 255, 155, 0.1)',
                      p: 1.5,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#FFFFFF',
                        mb: 1,
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          width: 28,
                          height: 28,
                          borderRadius: '50%',
                          bgcolor: 'rgba(0, 255, 155, 0.2)',
                          color: '#00ff9b',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2,
                          fontSize: '0.9rem',
                          fontWeight: 700,
                        }}
                      >
                        {index + 1}
                      </Box>
                      {step.label}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.7,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>
              </StepBox>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksSection;
