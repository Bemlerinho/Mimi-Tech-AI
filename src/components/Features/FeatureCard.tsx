import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
        },
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 2, fontSize: '2rem' }}>
        {icon}
      </Box>
      <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default FeatureCard;
