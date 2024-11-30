import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const TestimonialCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'rgba(255, 255, 255, 0.03)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 16px rgba(13, 175, 148, 0.15)',
    border: '1px solid rgba(13, 175, 148, 0.3)',
  },
}));

const testimonials = [
  {
    name: 'Michael Schmidt',
    role: 'CTO, TechCorp GmbH',
    comment: 'Die KI-Lösungen von MIMI Tech haben unsere Geschäftsprozesse revolutioniert. Die Implementierung war reibungslos und der Support ist erstklassig.',
    rating: 5,
  },
  {
    name: 'Sarah Weber',
    role: 'Projektmanagerin, InnovateTech',
    comment: 'Beeindruckende Expertise im Bereich Machine Learning. Das Team hat unsere Erwartungen übertroffen und lieferte maßgeschneiderte Lösungen.',
    rating: 5,
  },
  {
    name: 'Thomas Müller',
    role: 'CEO, DataSolutions AG',
    comment: 'MIMI Tech AI ist ein verlässlicher Partner für KI-Integration. Ihre innovativen Ansätze und das tiefe technische Verständnis sind bemerkenswert.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at center, rgba(13, 175, 148, 0.1) 0%, rgba(0, 0, 0, 0) 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 700,
              background: 'linear-gradient(135deg, #3CAAFF 0%, #0DAF94 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Was unsere Kunden sagen
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 6,
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Erfahren Sie, wie unsere KI-Lösungen Unternehmen transformieren
          </Typography>
        </motion.div>

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <TestimonialCard>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>
                    <Rating value={testimonial.rating} readOnly />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      color: 'rgba(255, 255, 255, 0.9)',
                      lineHeight: 1.8,
                      minHeight: '120px',
                    }}
                  >
                    "{testimonial.comment}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      sx={{
                        width: 48,
                        height: 48,
                        bgcolor: 'primary.main',
                        mr: 2,
                      }}
                    >
                      {testimonial.name[0]}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{ color: 'white', fontWeight: 600 }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: 'rgba(255, 255, 255, 0.7)' }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </TestimonialCard>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
