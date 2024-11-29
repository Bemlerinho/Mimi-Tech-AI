import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircleOutline, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { styled } from '@mui/material/styles';
import ThreeAnimation from '../../components/ThreeAnimation';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  features: string[];
}

const ProductCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease-in-out',
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
    '& .product-overlay': {
      opacity: 1,
    },
  },
}));

const ProductImage = styled('img')({
  width: '100%',
  height: 280,
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out',
});

const ProductOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
});

const products: Product[] = [
  {
    id: 1,
    name: 'OpenAI Swarm-Lösungen',
    description: 'Intelligente Automatisierung und Optimierung durch KI-gestützte Schwarmtechnologie. Mit Echtzeitoptimierung, selbstlernenden Systemen, skalierbarer Architektur und energie-effizienten Algorithmen.',
    image: '/images/swarm-ai.jpg',
    features: [
      'Echtzeitoptimierung',
      'Selbstlernende Systeme',
      'Skalierbare Architektur',
      'Energie-effiziente Algorithmen'
    ]
  },
  {
    id: 2,
    name: 'Maßgeschneiderte Apps',
    description: 'Individuelle Softwarelösungen für Ihre spezifischen Anforderungen. Mit individueller Entwicklung, modernen Technologien, agilen Entwicklungsmethoden und kontinuierlicher Betreuung.',
    image: '/images/custom-apps.jpg',
    features: [
      'Individuelle Entwicklung',
      'Moderne Technologien',
      'Agile Entwicklungsmethoden',
      'Kontinuierliche Betreuung'
    ]
  }
];

const ProductsSection: React.FC = () => {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, rgba(0,128,128,0.1) 0%, rgba(0,64,128,0.1) 100%)' }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 700 }}
          >
            Unsere KI-Lösungen
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} md={6} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: product.id * 0.2 }}
              >
                <Card sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  }
                }}>
                  <Box sx={{ p: 3, flex: 1 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" paragraph>
                      {product.description}
                    </Typography>
                    <List>
                      {product.features.map((feature, index) => (
                        <ListItem key={index} sx={{ py: 0.5 }}>
                          <ListItemIcon>
                            <CheckCircleOutline sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                    <Button
                      variant="contained"
                      color="primary"
                      endIcon={<ArrowForward />}
                      href="/contact"
                      sx={{
                        mt: 2,
                        backgroundColor: '#00a86b',
                        '&:hover': {
                          backgroundColor: '#008f5d',
                        },
                      }}
                    >
                      Jetzt anfragen
                    </Button>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductsSection;
