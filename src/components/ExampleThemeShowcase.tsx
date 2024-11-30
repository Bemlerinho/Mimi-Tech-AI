import React from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  Button,
  Card,
  Typography,
  TextField,
  Chip,
  Stack,
  Grid,
  useTheme,
  Avatar,
} from '@mui/material';
import { useTheme as useCustomTheme } from '../theme/ThemeContext';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PsychologyIcon from '@mui/icons-material/Psychology';

export const ExampleThemeShowcase: React.FC = () => {
  const theme = useTheme();
  const { animations } = useCustomTheme();

  return (
    <motion.div
      variants={animations.page.fadeSlide}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box sx={{ p: 4 }}>
        {/* Typography and Colors */}
        <motion.div variants={animations.text.fadeIn}>
          <Stack direction="row" spacing={2} alignItems="center" mb={4}>
            <Avatar 
              sx={{ 
                width: 64, 
                height: 64,
                background: theme.palette.primary.main,
                boxShadow: `0 0 20px ${theme.palette.primary.main}`,
              }}
            >
              <img src="/mimi-avatar.svg" alt="Mimi Tech AI" style={{ width: '70%', height: '70%' }} />
            </Avatar>
            <Box>
              <Typography 
                variant="h2" 
                gutterBottom 
                sx={{ 
                  mb: 0.5,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Mimi Tech AI
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary"
                sx={{ 
                  fontWeight: 500,
                  letterSpacing: '0.02em'
                }}
              >
                Intelligente KI-Lösungen für Ihre Anforderungen
              </Typography>
            </Box>
          </Stack>
        </motion.div>

        {/* AI Features Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {[
            {
              icon: <SmartToyIcon fontSize="large" />,
              title: 'KI-Assistent',
              description: 'Intelligente Unterstützung für Ihre Aufgaben',
              gradient: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
            },
            {
              icon: <AutoAwesomeIcon fontSize="large" />,
              title: 'Smart Automation',
              description: 'Automatisierung Ihrer Geschäftsprozesse',
              gradient: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`
            },
            {
              icon: <PsychologyIcon fontSize="large" />,
              title: 'Cognitive Computing',
              description: 'Fortschrittliche Datenanalyse und Verarbeitung',
              gradient: `linear-gradient(135deg, ${theme.palette.info.main}, ${theme.palette.info.light})`
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                variants={animations.scale}
                whileHover={animations.hover.lift}
              >
                <Card 
                  sx={{ 
                    p: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center',
                    background: alpha(theme.palette.background.paper, 0.8),
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`,
                      background: theme.palette.background.paper,
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      color: 'white',
                      background: feature.gradient,
                      p: 1.5,
                      borderRadius: '12px',
                      mb: 2,
                      boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ 
                      fontWeight: 600,
                      color: theme.palette.text.primary
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ 
                      opacity: 0.8,
                      lineHeight: 1.6
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Interactive Elements */}
        <Card 
          sx={{ 
            p: 3, 
            mb: 4,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <motion.div variants={animations.fadeIn}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Interaktive Elemente
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
              <Button 
                variant="contained"
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                  '&:hover': {
                    background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
                  }
                }}
              >
                Primär Button
              </Button>
              <Button 
                variant="outlined"
                sx={{
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    background: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                Sekundär Button
              </Button>
              <Button 
                variant="text"
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    background: alpha(theme.palette.primary.main, 0.05)
                  }
                }}
              >
                Text Button
              </Button>
            </Stack>
          </motion.div>
        </Card>

        {/* Form Elements */}
        <Card 
          sx={{ 
            p: 3, 
            mb: 4,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <motion.div variants={animations.slideUp}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Formulare
            </Typography>
            <Stack spacing={3}>
              <TextField
                label="KI-Anfrage"
                placeholder="Beschreiben Sie Ihre Anforderungen..."
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                    },
                  },
                }}
              />
              <TextField
                label="E-Mail"
                helperText="Wir werden Sie kontaktieren"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: alpha(theme.palette.primary.main, 0.5),
                    },
                  },
                }}
              />
            </Stack>
          </motion.div>
        </Card>

        {/* Status Indicators */}
        <Card 
          sx={{ 
            p: 3, 
            mb: 4,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <motion.div variants={animations.stagger.container}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Status Anzeigen
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
              <motion.div variants={animations.stagger.item}>
                <Chip 
                  label="Aktiv" 
                  color="primary"
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                    fontWeight: 500
                  }}
                />
              </motion.div>
              <motion.div variants={animations.stagger.item}>
                <Chip 
                  label="Verarbeitung" 
                  color="secondary"
                  sx={{ fontWeight: 500 }}
                />
              </motion.div>
              <motion.div variants={animations.stagger.item}>
                <Chip 
                  label="Erfolgreich" 
                  color="success"
                  sx={{ fontWeight: 500 }}
                />
              </motion.div>
              <motion.div variants={animations.stagger.item}>
                <Chip 
                  label="Warnung" 
                  color="warning"
                  sx={{ fontWeight: 500 }}
                />
              </motion.div>
              <motion.div variants={animations.stagger.item}>
                <Chip 
                  label="Fehler" 
                  color="error"
                  sx={{ fontWeight: 500 }}
                />
              </motion.div>
            </Stack>
          </motion.div>
        </Card>

        {/* Loading States */}
        <Card 
          sx={{ 
            p: 3,
            background: alpha(theme.palette.background.paper, 0.8),
            backdropFilter: 'blur(10px)',
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
            Lade-Animationen
          </Typography>
          <Stack direction="row" spacing={4} alignItems="center">
            <motion.div
              animate={animations.loading.dots.animate}
              style={{ 
                width: 20, 
                height: 20, 
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                borderRadius: '50%',
                boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.3)}`
              }}
            />
            <motion.div
              animate={animations.loading.pulse.animate}
              style={{ 
                width: 20, 
                height: 20, 
                background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                borderRadius: '50%',
                boxShadow: `0 2px 10px ${alpha(theme.palette.secondary.main, 0.3)}`
              }}
            />
            <motion.div
              animate={animations.loading.spin.animate}
              style={{ 
                width: 20, 
                height: 20, 
                background: `linear-gradient(135deg, ${theme.palette.info.main}, ${theme.palette.info.dark})`,
                borderRadius: '4px',
                boxShadow: `0 2px 10px ${alpha(theme.palette.info.main, 0.3)}`
              }}
            />
          </Stack>
        </Card>
      </Box>
    </motion.div>
  );
};
