import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "40%",
    subline: "Produktivitätssteigerung",
    highlight: "Durch KI-gestützte Prozessoptimierung",
    impact: "Automatisierung von Routineaufgaben und verbesserte Entscheidungsfindung",
    industry: "TECHNOLOGIE",
  },
  {
    quote: "30%",
    subline: "Kostenreduktion",
    highlight: "Effizientere Ressourcennutzung",
    impact: "Optimierte Workflows und reduzierte manuelle Eingriffe",
    industry: "PRODUKTION",
  },
  {
    quote: "2x",
    subline: "schnellere Markteinführung",
    highlight: "Beschleunigte Entwicklungszyklen",
    impact: "KI-gestützte Produktentwicklung und Testing",
    industry: "SOFTWARE",
  },
];

const TestimonialCard: React.FC<{
  quote: string;
  subline: string;
  highlight: string;
  impact: string;
  industry: string;
  delay: number;
}> = ({ quote, subline, highlight, impact, industry, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <Box
      sx={{
        p: 4,
        height: '100%',
        minHeight: '380px',
        width: '100%',
        background: 'linear-gradient(165deg, rgba(19, 167, 176, 0.15) 0%, rgba(19, 167, 176, 0.05) 100%)',
        borderRadius: '24px',
        border: '1px solid rgba(19, 167, 176, 0.2)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 20px 40px rgba(19, 167, 176, 0.15)',
          '&::before': {
            transform: 'translateX(100%)',
          }
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(19, 167, 176, 0.1), transparent)',
          transform: 'translateX(-100%)',
          transition: 'transform 0.6s ease',
        }
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: { xs: '2.5rem', md: '2.8rem' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #13A7B0 0%, #89F9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            display: 'inline',
          }}
        >
          {quote}
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontSize: { xs: '1.4rem', md: '1.6rem' },
            fontWeight: 800,
            background: 'linear-gradient(135deg, #13A7B0 0%, #89F9FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            display: 'inline-block',
            ml: 1,
            maxWidth: '100%',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {subline}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          color: '#ffffff',
          mb: 2,
          fontSize: '1.25rem',
          letterSpacing: '0.5px',
          lineHeight: 1.4,
        }}
      >
        {highlight}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(255, 255, 255, 0.85)',
          mb: 'auto',
          lineHeight: 1.8,
          fontSize: '1.1rem',
        }}
      >
        {impact}
      </Typography>
      <Box
        sx={{
          display: 'inline-block',
          background: 'rgba(19, 167, 176, 0.15)',
          padding: '8px 16px',
          borderRadius: '12px',
          border: '1px solid rgba(19, 167, 176, 0.3)',
          mt: 3,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            color: '#13A7B0',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            fontSize: '0.875rem',
          }}
        >
          {industry}
        </Typography>
      </Box>
    </Box>
  </motion.div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(19, 167, 176, 0.3), transparent)',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(19, 167, 176, 0.3), transparent)',
        }
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2.75rem', md: '3.75rem' },
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FFFFFF 0%, #13A7B0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 3,
              letterSpacing: '-0.02em',
            }}
          >
            Messbare Erfolge
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              mx: 'auto',
              fontSize: '1.35rem',
              lineHeight: 1.6,
              letterSpacing: '0.3px',
            }}
          >
            Konkrete Ergebnisse unserer KI-Implementierungen
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ minWidth: { md: '400px' } }}>
              <TestimonialCard {...testimonial} delay={index * 0.2} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
