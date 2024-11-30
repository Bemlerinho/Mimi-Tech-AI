import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from '../Footer/Footer';
import ParticleBackground from '../Background/ParticleBackground';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        background: isHomePage 
          ? '#0A1A2F'
          : 'linear-gradient(135deg, #006B76 0%, #00334D 100%)',
        color: 'white',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHomePage 
            ? 'none'
            : 'radial-gradient(circle at 50% 50%, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        },
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
    >
      <CssBaseline />
      <ParticleBackground />
      <Header />
      <Box
        component={motion.main}
        initial={{ opacity: 0, rotateX: '3deg' }}
        animate={{ opacity: 1, rotateX: '0deg' }}
        transition={{ duration: 0.8 }}
        sx={{
          flex: 1,
          position: 'relative',
          zIndex: 1,
          overflowX: 'hidden',
          transformStyle: 'preserve-3d',
          '& > *': {
            position: 'relative',
            zIndex: 2,
            transformStyle: 'preserve-3d',
            '& h1, & h2, & h3, & h4, & h5, & h6': {
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontWeight: 'bold',
              letterSpacing: '0.5px',
            },
            '& p, & span, & li': {
              color: '#F0F0F0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              fontSize: '1.1rem',
              lineHeight: 1.6,
              letterSpacing: '0.3px',
            },
            '& .MuiCard-root': {
              background: 'rgba(0, 51, 77, 0.95)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(13, 175, 148, 0.2)',
              transition: 'all 0.3s ease-in-out',
              transform: 'translateZ(20px)',
              '&:hover': {
                transform: 'translateZ(30px) translateY(-5px)',
                boxShadow: '0 12px 40px rgba(13, 175, 148, 0.15)',
                border: '1px solid rgba(13, 175, 148, 0.3)',
                background: 'rgba(0, 51, 77, 0.98)',
              },
            },
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
