import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';
import SwarmBackground from '../SwarmBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        bgcolor: '#000000',
        color: '#ffffff',
        position: 'relative',
        '& img': {
          maxWidth: '100%',
          height: 'auto',
          display: 'block'
        }
      }}
    >
      <SwarmBackground />
      
      {/* Header mit erhöhtem z-index */}
      <Box 
        component="header" 
        role="banner"
        sx={{
          position: 'relative',
          zIndex: 10, // Erhöhter z-index für bessere Sichtbarkeit
          mb: 8 // Margin bottom für Abstand zum Content
        }}
      >
        <Navbar />
      </Box>

      {/* Hauptinhalt */}
      <Box 
        component="main"
        role="main"
        sx={{ 
          flexGrow: 1, 
          position: 'relative',
          zIndex: 2,
          pt: { xs: 8, md: 10 }, // Padding top für Abstand zur Navbar
          '& > *': {
            position: 'relative'
          }
        }}
      >
        {children}
      </Box>

      {/* Footer */}
      <Box 
        component="footer" 
        role="contentinfo"
        sx={{
          position: 'relative',
          zIndex: 2,
          mt: 'auto' // Pushes footer to bottom
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
