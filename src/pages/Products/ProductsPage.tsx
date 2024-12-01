import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SwarmBackground from '../../components/Background/SwarmBackground';
import MouseAgent3D from '../../components/Background/MouseAgent3D';
import SEO from '../../components/SEO/SEO';

interface Product {
  title: string;
  description: string;
  icon: string;
  category: string;
  image: string;
}

const products: Product[] = [
  {
    title: 'Naturio Platform',
    description: 'Die provisionsfreie Plattform für nachhaltige Produkte und Dienstleistungen. Ermöglicht direkten Kontakt zwischen Anbietern und Kunden, mit integrierter Nachhaltigkeits-Zertifizierung.',
    icon: '/naturio.svg',
    category: 'NACHHALTIGER HANDEL',
    image: '/Naturio.jpg',
  },
  {
    title: 'OpenAI Swarm-Lösungen',
    description: 'Intelligente Automatisierung und Optimierung durch KI-gestützte Schwarmtechnologie. Echtzeitoptimierung und selbstlernende Systeme für maximale Effizienz.',
    icon: '/icons/swarm.svg',
    category: 'KI-AUTOMATION',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1632&auto=format&fit=crop',
  },
  {
    title: 'Maßgeschneiderte Apps',
    description: 'Individuelle Softwarelösungen für Ihre spezifischen Anforderungen. Moderne Technologien und agile Entwicklungsmethoden für optimale Ergebnisse.',
    icon: '/icons/apps.svg',
    category: 'ENTWICKLUNG',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=1470&auto=format&fit=crop',
  },
];

const ProductsPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <SEO 
        title="Produkte & Lösungen | Mimi Tech AI"
        description="Entdecken Sie unsere innovativen KI-Lösungen für nachhaltige Geschäftsprozesse und digitale Transformation."
        keywords="Naturio Platform, OpenAI Swarm, Maßgeschneiderte Apps, KI-Lösungen, Nachhaltigkeit"
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
              Produkte & Lösungen
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
              Entdecken Sie unsere innovativen KI-Lösungen für nachhaltige 
              Geschäftsprozesse und digitale Transformation.
            </Typography>

            <Grid container spacing={4}>
              {products.map((product, index) => (
                <Grid item xs={12} md={6} lg={4} key={product.title}>
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
                          src={product.image}
                          alt={product.title}
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
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 3,
                          }}
                        >
                          <Box
                            component="img"
                            src={product.icon}
                            alt=""
                            sx={{
                              width: 48,
                              height: 48,
                              mr: 2,
                              filter: 'drop-shadow(0 0 25px rgba(0, 183, 255, 0.4))',
                            }}
                          />
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
                            {product.category}
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
                          {product.title}
                        </Typography>

                        <Typography
                          variant="body1"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.7)',
                            lineHeight: 1.8,
                            fontSize: '1rem',
                          }}
                        >
                          {product.description}
                        </Typography>
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

export default ProductsPage;
