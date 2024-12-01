import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  TextField,
  Button,
  Grid,
  Snackbar,
  Alert,
  MenuItem,
} from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';

interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  position: string;
}

const interests = [
  'Naturio - KI für nachhaltige Landwirtschaft',
  'KI-gestützte Prozessautomatisierung',
  'Datenanalyse & Prognosen',
  'Individuelle KI-Entwicklung',
  'Strategische KI-Beratung',
];

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    position: '',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Hier später API-Integration implementieren
      setSnackbar({
        open: true,
        message: 'Vielen Dank für Ihre Anfrage. Unser B2B-Team wird sich in Kürze bei Ihnen melden.',
        severity: 'success',
      });
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        position: '',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
        severity: 'error',
      });
    }
  };

  return (
    <>
      <Box sx={{ 
        position: 'relative',
        background: '#0A1A2F',
        minHeight: '100vh',
        py: 8,
      }}>
        <SwarmBackground />
        <MouseAgent3D />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              align="center"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 50%, #7b42ff 100%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 40px rgba(0, 183, 255, 0.15)',
              }}
            >
              Kontaktieren Sie uns
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{ 
                mb: 6,
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                maxWidth: '800px',
                mx: 'auto'
              }}
            >
              Lassen Sie uns gemeinsam Ihre Geschäftsprozesse durch KI-Innovation optimieren
            </Typography>
          </motion.div>

          <Paper 
            elevation={3} 
            sx={{ 
              p: 4, 
              borderRadius: 4,
              bgcolor: 'rgba(17, 25, 40, 0.88)',
              backdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                boxShadow: '0 8px 32px rgba(0, 183, 255, 0.15)',
                border: '1px solid rgba(0, 183, 255, 0.3)',
              },
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Unternehmen"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Position im Unternehmen"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="E-Mail"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefon"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="Interessenbereich"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                      '& .MuiMenuItem-root': {
                        color: '#0A1A2F',
                      },
                    }}
                  >
                    {interests.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Ihre Nachricht"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschreiben Sie kurz Ihre Anforderungen und wie wir Ihnen helfen können..."
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'rgba(255, 255, 255, 0.23)',
                        },
                        '&:hover fieldset': {
                          borderColor: '#00b8ff',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#00ff9b',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'rgba(255, 255, 255, 0.7)',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 100%)',
                      color: '#0A1A2F',
                      fontWeight: 600,
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #00ff9b 20%, #00b8ff 120%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0, 183, 255, 0.25)',
                      },
                      transition: 'all 0.3s ease-in-out',
                    }}
                  >
                    Nachricht senden
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
