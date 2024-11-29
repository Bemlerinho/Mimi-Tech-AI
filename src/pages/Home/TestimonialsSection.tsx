import React from 'react';
import { Box, Container, Typography, Avatar, Paper, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: 'Dr. Sarah Weber',
    role: 'CTO, TechVision GmbH',
    avatar: '/avatars/avatar1.jpg',
    rating: 5,
    text: 'Die KI-Lösungen von MIMI Tech AI haben unsere Produktivität um 40% gesteigert. Die Implementierung war reibungslos und der Support ist erstklassig.',
  },
  {
    name: 'Michael Schmidt',
    role: 'Geschäftsführer, InnovateTech',
    avatar: '/avatars/avatar2.jpg',
    rating: 5,
    text: 'Beeindruckende Technologie und hervorragende Beratung. MIMI Tech AI hat uns geholfen, unsere Prozesse zu optimieren und neue Geschäftsmöglichkeiten zu erschließen.',
  },
  {
    name: 'Lisa Müller',
    role: 'Leiterin Digitalisierung, FutureCore',
    avatar: '/avatars/avatar3.jpg',
    rating: 5,
    text: 'Die maßgeschneiderten KI-Lösungen haben unsere Erwartungen übertroffen. Ein echter Game-Changer für unser Unternehmen.',
  },
];

const TestimonialCard: React.FC<{
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  delay: number;
}> = ({ name, role, avatar, rating, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(20px)',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(33, 150, 243, 0.1)',
        },
      }}
    >
      <FormatQuoteIcon
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          fontSize: 40,
          color: 'rgba(33, 150, 243, 0.1)',
        }}
      />
      <Box sx={{ mb: 3 }}>
        <Rating value={rating} readOnly />
      </Box>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          color: 'text.secondary',
          fontStyle: 'italic',
          minHeight: '80px',
        }}
      >
        "{text}"
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          src={avatar}
          sx={{
            width: 56,
            height: 56,
            mr: 2,
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {role}
          </Typography>
        </Box>
      </Box>
    </Paper>
  </motion.div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #E3F2FD 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              mb: 2,
              background: 'linear-gradient(45deg, #2196F3 30%, #00BFA5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Was unsere Kunden sagen
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ maxWidth: '800px', mx: 'auto' }}
          >
            Erfahren Sie, wie unsere KI-Lösungen Unternehmen transformieren
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              delay={index * 0.2}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
