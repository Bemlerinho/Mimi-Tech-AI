import React from 'react';
import { Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

interface PageBackgroundProps {
  children?: React.ReactNode;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000814',
        overflow: 'hidden',
      }}
    >
      {/* Main background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, #000814 0%, #001233 100%)',
          opacity: 1,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageBackground;
