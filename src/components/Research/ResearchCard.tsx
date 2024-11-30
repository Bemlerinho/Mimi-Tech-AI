import React from 'react';
import { Paper, Typography, Box, Chip } from '@mui/material';

interface ResearchCardProps {
  icon: string;
  category: string;
  title: string;
  description: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ icon, category, title, description }) => {
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
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          backgroundColor: 'rgba(13, 175, 148, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
        }}
      >
        <img src={icon} alt={title} style={{ width: 24, height: 24 }} />
      </Box>
      <Chip
        label={category}
        size="small"
        sx={{
          mb: 2,
          backgroundColor: 'rgba(13, 175, 148, 0.1)',
          color: 'primary.main',
        }}
      />
      <Typography variant="h5" component="h3" gutterBottom sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        {description}
      </Typography>
    </Paper>
  );
};

export default ResearchCard;
