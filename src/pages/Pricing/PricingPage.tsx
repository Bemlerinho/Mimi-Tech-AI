import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckIcon from '@mui/icons-material/Check';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import BoltIcon from '@mui/icons-material/Bolt';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BusinessIcon from '@mui/icons-material/Business';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);
  const theme = useTheme();

  const plans = [
    {
      title: 'Starter',
      price: isYearly ? '5.99' : '6.99',
      icon: <StarOutlineIcon />,
      description: 'Ideal für Kleinstanbieter, Hobby-Verkäufer und Neueinsteiger.',
      features: [
        'Bis zu 3 Produkte',
        'KI-basierte Selbsthilfe',
        'Grundlegende Produktverwaltung',
        'Community-Zugang',
        'E-Mail Support'
      ],
      buttonText: 'Jetzt starten'
    },
    {
      title: 'Basis',
      price: isYearly ? '14.99' : '17.99',
      icon: <WorkspacePremiumIcon />,
      description: 'Perfekt für kleine Händler und Einzelunternehmer mit regelmäßigem Verkaufsvolumen.',
      features: [
        'Bis zu 10 Produkte',
        'Erweiterte Produktverwaltung',
        'Verkaufsübersichten',
        'Empfohlene Platzierungen',
        'Standard Support',
        'Basis-KI-Funktionen'
      ],
      buttonText: 'Jetzt starten'
    },
    {
      title: 'Standard',
      price: isYearly ? '29.99' : '34.99',
      icon: <BoltIcon />,
      description: 'Ideal für wachsende Shops mit moderatem Verkaufsvolumen.',
      features: [
        'Bis zu 25 Produkte',
        'Verkaufsübersichten',
        'Marketing-Tools',
        'Basis-Analysefunktionen',
        'Prioritäts-Support',
        'Erweiterte KI-Funktionen'
      ],
      buttonText: 'Jetzt starten',
      popular: true
    },
    {
      title: 'Pro',
      price: isYearly ? '59.99' : '69.99',
      icon: <WorkspacePremiumIcon />,
      description: 'Für mittelgroße Anbieter mit professionellen Anforderungen.',
      features: [
        'Bis zu 100 Produkte',
        'Umfassende Analysen',
        'Personalisierte Empfehlungen',
        'Erweiterte Marketing-Tools',
        'Premium Support',
        'Voller KI-Zugang'
      ],
      buttonText: 'Jetzt starten'
    },
    {
      title: 'Business',
      price: isYearly ? '199' : '229',
      icon: <BusinessIcon />,
      description: 'Maßgeschneiderte Lösung für große Händler und Unternehmen.',
      features: [
        'Unbegrenzte Produkte',
        'Vollständige Analyse-Tools',
        'Exklusive Marketing-Tools',
        'Strategische Analysen',
        'Dedizierter Account Manager',
        'Custom AI-Integration'
      ],
      buttonText: 'Kontaktieren'
    }
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
            background: 'linear-gradient(45deg, #00ff9b, #00b8ff)',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Transparente Preisgestaltung
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          Wählen Sie den passenden Plan für Ihren nachhaltigen Online-Shop. Keine versteckten Gebühren, keine Provisionen.
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <FormControlLabel
            control={
              <Switch
                checked={isYearly}
                onChange={() => setIsYearly(!isYearly)}
                color="primary"
              />
            }
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography>Monatlich</Typography>
                <Box
                  sx={{
                    bgcolor: 'success.main',
                    color: 'white',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                  }}
                >
                  -17%
                </Box>
                <Typography>Jährlich</Typography>
              </Box>
            }
          />
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={plan.title}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  border: plan.popular ? `2px solid ${theme.palette.primary.main}` : 'none',
                  bgcolor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                {plan.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      bgcolor: 'primary.main',
                      color: 'white',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                      fontSize: '0.75rem',
                    }}
                  >
                    Beliebt
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ mb: 2, color: 'primary.main' }}>{plan.icon}</Box>
                  <Typography variant="h5" component="div" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{ mt: 2 }}
                  >
                    {plan.price}€
                    <Typography
                      component="span"
                      variant="subtitle1"
                      sx={{ color: 'text.secondary' }}
                    >
                      /monat
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, minHeight: 60 }}
                  >
                    {plan.description}
                  </Typography>
                  <Box sx={{ mb: 3 }}>
                    {plan.features.map((feature) => (
                      <Box
                        key={feature}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <CheckIcon sx={{ mr: 1, color: 'success.main' }} />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                  <Button
                    variant={plan.popular ? 'contained' : 'outlined'}
                    fullWidth
                    sx={{
                      mt: 'auto',
                      bgcolor: plan.popular ? 'primary.main' : 'transparent',
                      '&:hover': {
                        bgcolor: plan.popular ? 'primary.dark' : 'rgba(0, 168, 107, 0.04)',
                      },
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="text"
            color="primary"
            sx={{ textDecoration: 'underline' }}
          >
            Alle Features im Detail vergleichen
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default PricingPage;
