import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Button, 
  TextField,
  IconButton,
  Collapse,
  useTheme,
  useMediaQuery,
  Tooltip,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Facebook,
  Twitter,
  LinkedIn,
  Instagram,
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [openFAQ, setOpenFAQ] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setEmail('');
  };

  const socialLinks = [
    { icon: <Facebook />, url: '#', label: 'Facebook' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <Instagram />, url: '#', label: 'Instagram' }
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        py: 6,
        bgcolor: '#000000',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box
          sx={{
            mb: 6,
            p: 3,
            borderRadius: 2,
            background: 'linear-gradient(90deg, rgba(60,170,255,0.1) 0%, rgba(60,170,255,0.05) 100%)',
            border: '1px solid rgba(60,170,255,0.2)',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>
            Bleiben Sie auf dem Laufenden
          </Typography>
          <form onSubmit={handleNewsletterSubmit} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <TextField
              variant="outlined"
              placeholder="Ihre E-Mail-Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                flex: isMobile ? '1 1 100%' : '1 1 auto',
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
                  '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                  '&.Mui-focused fieldset': { borderColor: '#3CAAFF' }
                }
              }}
              inputProps={{
                'aria-label': 'Newsletter E-Mail-Adresse',
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                bgcolor: '#3CAAFF',
                '&:hover': { bgcolor: '#2b99ff' },
                flex: isMobile ? '1 1 100%' : '0 0 auto',
              }}
            >
              Newsletter abonnieren
            </Button>
          </form>
        </Box>

        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  background: 'linear-gradient(45deg, #4CAF50 30%, #3CAAFF 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                  fontSize: '1.5rem'
                }}
              >
                MIMI Tech AI
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
              Wir entwickeln innovative und nachhaltige Technologielösungen für eine bessere Zukunft.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((link, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={link.url}
                  aria-label={link.label}
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    '&:hover': { color: '#3CAAFF' }
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2 }}>
              Unternehmen
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Über uns', 'Karriere', 'Kontakt'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#3CAAFF' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2 }}>
              Produkte
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Übersicht', 'Lösungen', 'Preise'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#3CAAFF' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2 }}>
              Ressourcen
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Blog', 'Dokumentation', 'Support'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#3CAAFF' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ color: '#fff', mb: 2 }}>
              Legal
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Datenschutz', 'AGB', 'Impressum'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    textDecoration: 'none',
                    '&:hover': { color: '#3CAAFF' }
                  }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* FAQ Section */}
          <Grid item xs={12}>
            <Box sx={{ mt: 4 }}>
              <Button
                onClick={() => setOpenFAQ(!openFAQ)}
                endIcon={openFAQ ? <ExpandLess /> : <ExpandMore />}
                sx={{
                  color: 'rgba(255,255,255,0.7)',
                  '&:hover': { color: '#3CAAFF' }
                }}
              >
                Häufig gestellte Fragen
              </Button>
              <Collapse in={openFAQ}>
                <Box sx={{ mt: 2, color: 'rgba(255,255,255,0.7)' }}>
                  <Typography variant="body2" paragraph>
                    Hier finden Sie Antworten auf häufig gestellte Fragen.
                  </Typography>
                </Box>
              </Collapse>
            </Box>
          </Grid>

          {/* Copyright */}
          <Grid item xs={12} sx={{ mt: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              2024 Windsurf. Alle Rechte vorbehalten.
            </Typography>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={() => setOpenSnackbar(false)} severity="success">
            Vielen Dank für Ihre Anmeldung!
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Footer;
