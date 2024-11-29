import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  TextField,
  Button,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GroupsIcon from '@mui/icons-material/Groups';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SwarmBackground from '../../components/SwarmBackground';

const companySections = [
  {
    subtitle: 'ZUKUNFT & INNOVATION',
    title: 'Unsere Vision',
    description: 'MIMI Tech AI strebt danach, als globaler Vorreiter die Zukunft nachhaltiger KI-Technologien zu gestalten. Unsere Vision verbindet technologische Effizienz mit ökologischer Verantwortung, um Unternehmen und Konsumenten gleichermaßen zu unterstützen.',
    icon: <VisibilityIcon style={{ fontSize: '48px', color: '#00b8ff' }} />,
  },
  {
    subtitle: 'EXPERTISE & ERFAHRUNG',
    title: 'Unser Team',
    description: 'Unser Team vereint erfahrene Spezialisten aus den Bereichen künstliche Intelligenz, Softwareentwicklung und Nachhaltigkeit. Mit einem globalen Ansatz entwickeln wir maßgeschneiderte Lösungen für unsere Kunden.',
    icon: <GroupsIcon style={{ fontSize: '48px', color: '#00b8ff' }} />,
  },
  {
    subtitle: 'UMWELT & RESSOURCEN',
    title: 'Nachhaltigkeit',
    description: 'Wir setzen auf ressourceneffiziente Technologien und nachhaltige Entwicklungspraktiken. Unser Ziel ist es, durch innovative KI-Lösungen einen positiven Beitrag zur Umwelt zu leisten.',
    icon: <AddCircleOutlineIcon style={{ fontSize: '48px', color: '#00ff9b' }} />,
  },
  {
    subtitle: 'FORSCHUNG & ENTWICKLUNG',
    title: 'Innovation',
    description: 'Durch kontinuierliche Forschung und Entwicklung treiben wir die Grenzen der KI-Technologie voran. Wir entwickeln zukunftsweisende Lösungen, die unseren Kunden einen echten Mehrwert bieten.',
    icon: <LightbulbIcon style={{ fontSize: '48px', color: '#00b8ff' }} />,
  },
];

const CompanyPage = () => {
  const theme = useTheme();

  return (
    <>
      <SwarmBackground />
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={3}>
          {companySections.map((section, index) => (
            <Grid item xs={12} md={6} key={section.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(17, 25, 40, 0.75)',
                    borderRadius: 4,
                    p: 4,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Icon Container */}
                  <Box 
                    sx={{ 
                      display: 'flex',
                      alignItems: 'center',
                      mb: 3,
                      zIndex: 1,
                    }}
                  >
                    {section.icon}
                  </Box>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#00b8ff',
                      fontWeight: 600,
                      mb: 2,
                      letterSpacing: 1,
                    }}
                  >
                    {section.subtitle}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      mb: 2,
                      color: 'white',
                      fontWeight: 700,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      lineHeight: 1.8,
                    }}
                  >
                    {section.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Newsletter Section */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: 'rgba(17, 25, 40, 0.75)',
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 3,
              color: 'white',
              fontWeight: 700,
            }}
          >
            Bleiben Sie auf dem Laufenden
          </Typography>
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <TextField
              fullWidth
              placeholder="Ihre E-Mail-Adresse"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.23)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.4)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00b8ff',
                  },
                },
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              }}
            />
            <Button
              variant="contained"
              sx={{
                bgcolor: '#00b8ff',
                color: 'white',
                px: 4,
                '&:hover': {
                  bgcolor: '#0091ff',
                },
                whiteSpace: 'nowrap',
              }}
            >
              Newsletter abonnieren
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default CompanyPage;
