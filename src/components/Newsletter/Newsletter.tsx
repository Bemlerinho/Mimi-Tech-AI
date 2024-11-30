import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const NewsletterWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(8, 0),
  background: 'rgba(10, 26, 47, 0.6)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 100%)',
    zIndex: 0,
  },
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(5px)',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.5)',
      opacity: 1,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  borderRadius: '8px',
  padding: '12px 32px',
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(13, 175, 148, 0.2)',
  },
}));

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setOpenSuccess(true);
      setEmail('');
    } else {
      setOpenError(true);
    }
  };

  return (
    <NewsletterWrapper>
      <Container maxWidth="lg">
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                background: 'linear-gradient(135deg, #3CAAFF 0%, #0DAF94 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Bleiben Sie auf dem Laufenden
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.1rem',
              }}
            >
              Abonnieren Sie unseren Newsletter für die neuesten Updates zu KI-Technologien
              und Innovationen.
            </Typography>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <StyledTextField
                fullWidth
                placeholder="Ihre E-Mail-Adresse"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ maxWidth: { sm: '400px' } }}
              />
              <SubmitButton
                type="submit"
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
              >
                Abonnieren
              </SubmitButton>
            </Box>
          </motion.form>
        </Box>
      </Container>

      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Vielen Dank für Ihre Anmeldung!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={() => setOpenError(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenError(false)}
          severity="error"
          sx={{ width: '100%' }}
        >
          Bitte geben Sie eine gültige E-Mail-Adresse ein.
        </Alert>
      </Snackbar>
    </NewsletterWrapper>
  );
};

export default Newsletter;
