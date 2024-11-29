import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThreeAnimation from '../../components/ThreeAnimation';

const VideoBackground = styled('video')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
});

const HeroOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 0,
});

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(135deg, rgba(0,128,128,0.9) 0%, rgba(0,64,128,0.9) 100%)',
});

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '25px',
  padding: '10px 25px',
  fontSize: '1.1rem',
  textTransform: 'none',
  '&.primary': {
    backgroundColor: '#00a86b',
    color: 'white',
    '&:hover': {
      backgroundColor: '#008f5d',
    },
  },
  '&.secondary': {
    borderColor: '#00a86b',
    color: 'white',
    '&:hover': {
      borderColor: '#008f5d',
      backgroundColor: 'rgba(255,255,255,0.1)',
    },
  },
}));

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <ThreeAnimation />
      <HeroContent>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              color="white"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', md: '4rem' },
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                mb: 3,
              }}
            >
              Nachhaltige KI-Lösungen für die Zukunft
            </Typography>
            <Typography
              variant="h5"
              color="white"
              sx={{
                mb: 4,
                maxWidth: '600px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                opacity: 0.9,
              }}
            >
              Innovative KI-Technologien für nachhaltiges Wachstum und digitale Transformation
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StyledButton
                  variant="contained"
                  className="primary"
                  endIcon={<ArrowForwardIcon />}
                >
                  Mehr erfahren
                </StyledButton>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StyledButton
                  variant="outlined"
                  className="secondary"
                >
                  Kontakt aufnehmen
                </StyledButton>
              </motion.div>
            </Stack>
          </motion.div>
        </Container>
      </HeroContent>
    </Box>
  );
};

export default HeroSection;
