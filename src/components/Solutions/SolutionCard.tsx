import React from 'react';
import { Paper, Typography, Box, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, features }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)', mb: 3 }}>
        {description}
      </Typography>
      <List sx={{ mb: 3, flexGrow: 1 }}>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ p: 0, mb: 1 }}>
            <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
              <CheckCircleOutlineIcon />
            </ListItemIcon>
            <ListItemText
              primary={feature}
              sx={{
                '& .MuiListItemText-primary': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '0.875rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
      <Button
        variant="contained"
        endIcon={<ArrowForwardIcon />}
        sx={{
          mt: 'auto',
          backgroundColor: 'primary.main',
          color: 'white',
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        Jetzt anfragen
      </Button>
    </Paper>
  );
};

export default SolutionCard;
