import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Grid,
  Button,
  Slider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Chip,
  Paper,
  useTheme,
} from '@mui/material';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import MemoryIcon from '@mui/icons-material/Memory';

interface ConfigOption {
  id: string;
  name: string;
  description: string;
  price: number;
}

const modelOptions: ConfigOption[] = [
  {
    id: 'gpt4',
    name: 'GPT-4 Enterprise',
    description: 'Fortschrittlichstes Sprachmodell für komplexe Aufgaben',
    price: 2000,
  },
  {
    id: 'gpt35',
    name: 'GPT-3.5 Business',
    description: 'Ausgewogene Leistung für die meisten Anwendungsfälle',
    price: 1000,
  },
  {
    id: 'custom',
    name: 'Custom Model',
    description: 'Speziell auf Ihre Bedürfnisse trainiertes Modell',
    price: 5000,
  },
];

const deploymentOptions: ConfigOption[] = [
  {
    id: 'cloud',
    name: 'Cloud Hosting',
    description: 'Flexible Skalierung in der Cloud',
    price: 500,
  },
  {
    id: 'onprem',
    name: 'On-Premise',
    description: 'Installation in Ihrer eigenen Infrastruktur',
    price: 2000,
  },
  {
    id: 'hybrid',
    name: 'Hybrid',
    description: 'Kombination aus Cloud und On-Premise',
    price: 3000,
  },
];

const ConfiguratorPage: React.FC = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedDeployment, setSelectedDeployment] = useState<string>('');
  const [userCount, setUserCount] = useState<number>(50);
  const [requestsPerMonth, setRequestsPerMonth] = useState<number>(10000);

  const steps = ['Modell wählen', 'Deployment', 'Skalierung', 'Zusammenfassung'];

  const calculateTotalPrice = () => {
    const modelPrice = modelOptions.find(m => m.id === selectedModel)?.price || 0;
    const deploymentPrice = deploymentOptions.find(d => d.id === selectedDeployment)?.price || 0;
    const userPrice = Math.floor(userCount / 10) * 100;
    const requestPrice = Math.floor(requestsPerMonth / 1000) * 50;
    return modelPrice + deploymentPrice + userPrice + requestPrice;
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            {modelOptions.map((option) => (
              <Grid item xs={12} md={4} key={option.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      transform: selectedModel === option.id ? 'scale(1.02)' : 'scale(1)',
                      border: selectedModel === option.id ? `2px solid ${theme.palette.primary.main}` : 'none',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => setSelectedModel(option.id)}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <MemoryIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6" component="div">
                          {option.name}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary" paragraph>
                        {option.description}
                      </Typography>
                      <Typography variant="h5" color="primary">
                        €{option.price.toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            {deploymentOptions.map((option) => (
              <Grid item xs={12} md={4} key={option.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card
                    sx={{
                      cursor: 'pointer',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      transform: selectedDeployment === option.id ? 'scale(1.02)' : 'scale(1)',
                      border: selectedDeployment === option.id ? `2px solid ${theme.palette.primary.main}` : 'none',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => setSelectedDeployment(option.id)}
                  >
                    <CardContent>
                      <Box display="flex" alignItems="center" mb={2}>
                        <StorageIcon color="primary" sx={{ mr: 1 }} />
                        <Typography variant="h6" component="div">
                          {option.name}
                        </Typography>
                      </Box>
                      <Typography color="text.secondary" paragraph>
                        {option.description}
                      </Typography>
                      <Typography variant="h5" color="primary">
                        €{option.price.toLocaleString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Anzahl der Benutzer
                </Typography>
                <Slider
                  value={userCount}
                  onChange={(_, newValue) => setUserCount(newValue as number)}
                  min={10}
                  max={500}
                  step={10}
                  marks={[
                    { value: 10, label: '10' },
                    { value: 250, label: '250' },
                    { value: 500, label: '500' },
                  ]}
                  valueLabelDisplay="auto"
                />
                <Box sx={{ mt: 2 }}>
                  <Typography color="text.secondary">
                    Kosten pro 10 Benutzer: €100
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  API-Anfragen pro Monat
                </Typography>
                <Slider
                  value={requestsPerMonth}
                  onChange={(_, newValue) => setRequestsPerMonth(newValue as number)}
                  min={1000}
                  max={100000}
                  step={1000}
                  marks={[
                    { value: 1000, label: '1K' },
                    { value: 50000, label: '50K' },
                    { value: 100000, label: '100K' },
                  ]}
                  valueLabelDisplay="auto"
                />
                <Box sx={{ mt: 2 }}>
                  <Typography color="text.secondary">
                    Kosten pro 1.000 Anfragen: €50
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Ihre Konfiguration
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box mb={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Gewähltes Modell
                  </Typography>
                  <Chip
                    icon={<MemoryIcon />}
                    label={modelOptions.find(m => m.id === selectedModel)?.name}
                    color="primary"
                  />
                </Box>
                <Box mb={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Deployment-Option
                  </Typography>
                  <Chip
                    icon={<StorageIcon />}
                    label={deploymentOptions.find(d => d.id === selectedDeployment)?.name}
                    color="primary"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box mb={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    Benutzer
                  </Typography>
                  <Chip
                    icon={<AutoGraphIcon />}
                    label={`${userCount} Benutzer`}
                    color="primary"
                  />
                </Box>
                <Box mb={3}>
                  <Typography variant="subtitle1" gutterBottom>
                    API-Anfragen
                  </Typography>
                  <Chip
                    icon={<SpeedIcon />}
                    label={`${requestsPerMonth.toLocaleString()} pro Monat`}
                    color="primary"
                  />
                </Box>
              </Grid>
            </Grid>
            <Box mt={4} p={3} bgcolor="background.default" borderRadius={2}>
              <Typography variant="h4" align="center" gutterBottom>
                Geschätzte Kosten
              </Typography>
              <Typography variant="h3" align="center" color="primary">
                €{calculateTotalPrice().toLocaleString()} / Monat
              </Typography>
            </Box>
          </Paper>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box py={8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              color="primary"
              gutterBottom
              align="center"
              sx={{
                mb: 6,
                background: 'linear-gradient(45deg, #1B5E20 30%, #01579B 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              KI-Konfigurator
            </Typography>
          </motion.div>

          <Box sx={{ width: '100%', mb: 4 }}>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>

          <Box sx={{ mt: 4, mb: 4 }}>
            {renderStepContent(activeStep)}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="outlined"
            >
              Zurück
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.href = '/contact'}
              >
                Angebot anfordern
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={
                  (activeStep === 0 && !selectedModel) ||
                  (activeStep === 1 && !selectedDeployment)
                }
              >
                Weiter
              </Button>
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ConfiguratorPage;
