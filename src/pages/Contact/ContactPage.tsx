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
import SwarmBackground from '../../components/SwarmBackground';

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
      <SwarmBackground />
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(135deg, rgba(0,128,128,0.1) 0%, rgba(0,64,128,0.1) 100%)',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ mb: 4, fontWeight: 700 }}
            >
              Kontaktieren Sie uns
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              sx={{ mb: 6 }}
            >
              Lassen Sie uns gemeinsam Ihre Geschäftsprozesse durch KI-Innovation optimieren
            </Typography>
          </motion.div>

          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
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
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Telefon"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    size="large"
                    sx={{
                      mt: 2,
                      backgroundColor: '#00a86b',
                      '&:hover': {
                        backgroundColor: '#008f5d',
                      },
                    }}
                  >
                    Anfrage senden
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
        <Alert severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactPage;
