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
      <Box 
        component="header" 
        role="banner"
        sx={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Navbar />
      </Box>
      <Box 
        component="main"
        role="main"
        sx={{ 
          flexGrow: 1, 
          position: 'relative',
          zIndex: 1,
          '& > *': {
            position: 'relative'
          }
        }}
      >
        {children}
      </Box>
      <Box 
        component="footer" 
        role="contentinfo"
        sx={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
