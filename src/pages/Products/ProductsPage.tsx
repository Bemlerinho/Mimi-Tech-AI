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
import Layout from '../../components/Layout/Layout';

interface Product {
  title: string;
  description: string;
  icon: string;
  category: string;
}

const products: Product[] = [
  {
    title: 'Naturio Platform',
    description: 'Die provisionsfreie Plattform für nachhaltige Produkte und Dienstleistungen. Ermöglicht direkten Kontakt zwischen Anbietern und Kunden, mit integrierter Nachhaltigkeits-Zertifizierung.',
    icon: '/icons/naturio.svg',
    category: 'NACHHALTIGER HANDEL',
  },
  {
    title: 'OpenAI Swarm-Lösungen',
    description: 'Intelligente Automatisierung und Optimierung durch KI-gestützte Schwarmtechnologie. Echtzeitoptimierung und selbstlernende Systeme für maximale Effizienz.',
    icon: '/icons/swarm.svg',
    category: 'KI-AUTOMATION',
  },
  {
    title: 'Maßgeschneiderte Apps',
    description: 'Individuelle Softwarelösungen für Ihre spezifischen Anforderungen. Moderne Technologien und agile Entwicklungsmethoden für optimale Ergebnisse.',
    icon: '/icons/apps.svg',
    category: 'ENTWICKLUNG',
  },
];

const ProductsPage: React.FC = () => {
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
              <Grid item xs={12} md={6} key={product.title}>
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
                      p: 4,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 40px rgba(0, 183, 255, 0.15)',
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={product.icon}
                      alt=""
                      sx={{
                        width: 56,
                        height: 56,
                        mb: 2,
                        filter: 'drop-shadow(0 0 20px rgba(0, 183, 255, 0.3))',
                      }}
                    />
                    
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
                      {product.category}
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

export default ProductsPage;
