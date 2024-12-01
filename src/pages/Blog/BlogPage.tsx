import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  Box,
  useTheme,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';

interface BlogPost {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    title: 'Die Zukunft der KI in der Nachhaltigkeit',
    description: 'Wie künstliche Intelligenz uns dabei hilft, eine nachhaltigere Zukunft zu gestalten und welche Rolle Technologie dabei spielt.',
    category: 'KI & NACHHALTIGKEIT',
    date: '15. März 2024',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop',
    readTime: '5 min',
    tags: ['KI', 'Nachhaltigkeit', 'Innovation'],
  },
  {
    title: 'Erfolgreiche Digitale Transformation',
    description: 'Best Practices und Strategien für eine erfolgreiche digitale Transformation in Ihrem Unternehmen.',
    category: 'DIGITALISIERUNG',
    date: '10. März 2024',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=1469&auto=format&fit=crop',
    readTime: '4 min',
    tags: ['Digital', 'Transformation', 'Business'],
  },
  {
    title: 'Machine Learning in der Praxis',
    description: 'Praktische Anwendungsbeispiele von Machine Learning in verschiedenen Branchen und deren Auswirkungen.',
    category: 'TECHNOLOGIE',
    date: '5. März 2024',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop',
    readTime: '6 min',
    tags: ['ML', 'AI', 'Praxis'],
  },
];

const BlogPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <SEO 
        title="Blog & Insights | Mimi Tech AI"
        description="Entdecken Sie aktuelle Einblicke und Trends aus der Welt der KI, Nachhaltigkeit und digitalen Transformation."
        keywords="KI Blog, Nachhaltigkeit, Digitale Transformation, Tech Insights"
      />
      <Box sx={{ 
        position: 'relative',
        background: '#0A1A2F',
        minHeight: '100vh',
      }}>
        <SwarmBackground />
        <MouseAgent3D />
        <Container 
          maxWidth="xl" 
          sx={{ 
            position: 'relative',
            zIndex: 1,
            py: 8
          }}
        >
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
              Entdecken Sie aktuelle Einblicke und Trends aus der Welt der KI,
              Nachhaltigkeit und digitalen Transformation.
            </Typography>

            <Grid container spacing={4}>
              {blogPosts.map((post, index) => (
                <Grid item xs={12} md={6} lg={4} key={post.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        bgcolor: 'rgba(17, 25, 40, 0.88)',
                        borderRadius: 4,
                        backdropFilter: 'blur(20px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        overflow: 'hidden',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 40px rgba(0, 183, 255, 0.2)',
                          border: '1px solid rgba(0, 183, 255, 0.3)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          paddingTop: '56.25%', // 16:9 Aspect Ratio
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={post.image}
                          alt={post.title}
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.4s ease-in-out',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                        />
                      </Box>

                      <Box sx={{ p: 4 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                          <Typography
                            variant="overline"
                            sx={{
                              color: '#00b8ff',
                              fontWeight: 600,
                              letterSpacing: 1.2,
                              fontSize: '0.8rem',
                              textShadow: '0 0 20px rgba(0, 183, 255, 0.3)',
                            }}
                          >
                            {post.category}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: 'rgba(255, 255, 255, 0.6)',
                            }}
                          >
                            {post.readTime}
                          </Typography>
                        </Box>

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
                            mb: 3,
                          }}
                        >
                          {post.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {post.tags.map((tag) => (
                            <Chip
                              key={tag}
                              label={tag}
                              size="small"
                              sx={{
                                bgcolor: 'rgba(0, 184, 255, 0.1)',
                                color: '#00b8ff',
                                borderRadius: 2,
                                '&:hover': {
                                  bgcolor: 'rgba(0, 184, 255, 0.2)',
                                },
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </>
  );
};

export default BlogPage;
