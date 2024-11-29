import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box
          py={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              color="primary"
              gutterBottom
              sx={{ fontSize: { xs: '4rem', md: '6rem' } }}
            >
              404
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 4 }}
            >
              Seite nicht gefunden
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Die von Ihnen gesuchte Seite existiert leider nicht.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/')}
              sx={{ mt: 2 }}
            >
              Zurück zur Startseite
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
