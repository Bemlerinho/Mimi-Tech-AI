import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';

interface BlogPost {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'Die Zukunft der KI in der Industrie',
    description: 'Wie künstliche Intelligenz die Fertigungsprozesse revolutioniert und welche Chancen sich für Unternehmen ergeben. Ein Einblick in die neuesten Entwicklungen und Trends.',
    image: '/images/blog/ai-industry.jpg',
    category: 'TECHNOLOGIE & INNOVATION',
    date: '15. März 2024',
  },
  {
    title: 'Nachhaltige KI-Entwicklung',
    description: 'Strategien und Best Practices für die umweltbewusste Entwicklung von KI-Systemen. Wie wir bei MIMI Tech AI Nachhaltigkeit in unsere Entwicklungsprozesse integrieren.',
    image: '/images/blog/sustainable-ai.jpg',
    category: 'NACHHALTIGKEIT',
    date: '10. März 2024',
  },
  {
    title: 'Machine Learning in der Praxis',
    description: 'Praktische Anwendungsbeispiele von Machine Learning in verschiedenen Branchen. Von der Datenanalyse bis zur Prozessoptimierung - ein umfassender Überblick.',
    image: '/images/blog/ml-practice.jpg',
    category: 'MACHINE LEARNING',
    date: '5. März 2024',
  },
  {
    title: 'KI und Datenschutz',
    description: 'Wie können Unternehmen KI-Systeme datenschutzkonform einsetzen? Ein Leitfaden zu rechtlichen Anforderungen und technischen Lösungen.',
    image: '/images/blog/ai-privacy.jpg',
    category: 'DATENSCHUTZ & SICHERHEIT',
    date: '1. März 2024',
  },
];

const BlogPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            align="center"
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #00ff9b 0%, #00b8ff 50%, #7b42ff 100%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 40px rgba(0, 183, 255, 0.15)',
            }}
          >
            Blog & Insights
          </Typography>

          <Typography
            variant="h5"
            align="center"
            sx={{ 
              mb: 8, 
              maxWidth: '800px', 
              mx: 'auto',
              color: 'text.secondary',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              lineHeight: 1.8,
            }}
          >
            Aktuelle Einblicke in die Welt der künstlichen Intelligenz, 
            Technologie-Trends und nachhaltige Entwicklung.
          </Typography>

          <Grid container spacing={4}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} md={6} key={post.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      bgcolor: 'rgba(17, 25, 40, 0.75)',
                      borderRadius: 4,
                      backdropFilter: 'blur(16px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.125)',
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 183, 255, 0.15)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 240,
                        width: '100%',
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Box
                        component="img"
                        src={post.image}
                        alt={post.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>

                    <Box sx={{ p: 4 }}>
                      <Typography
                        variant="overline"
                        sx={{
                          color: '#00b8ff',
                          fontWeight: 600,
                          letterSpacing: 1,
                          mb: 1,
                          display: 'block',
                          fontSize: '0.75rem',
                        }}
                      >
                        {post.category}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.5)',
                          mb: 2,
                          display: 'block',
                        }}
                      >
                        {post.date}
                      </Typography>

                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          fontWeight: 700,
                          color: 'white',
                          fontSize: { xs: '1.5rem', md: '1.75rem' },
                        }}
                      >
                        {post.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          lineHeight: 1.8,
                          fontSize: '1rem',
                        }}
                      >
                        {post.description}
                      </Typography>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default BlogPage;
