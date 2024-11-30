import React from 'react';
import { Paper, Typography, Box, Rating } from '@mui/material';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, position, rating }) => {
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
      <Rating
        value={rating}
        readOnly
        sx={{
          mb: 2,
          '& .MuiRating-iconFilled': {
            color: '#0DAF94',
          },
        }}
      />
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.9)',
          mb: 3,
          fontStyle: 'italic',
          flexGrow: 1,
        }}
      >
        "{quote}"
      </Typography>
      <Box>
        <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
          {author}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
          {position}
        </Typography>
      </Box>
    </Paper>
  );
};

export default TestimonialCard;
