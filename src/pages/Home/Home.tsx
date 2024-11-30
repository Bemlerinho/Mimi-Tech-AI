import React from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import Solutions from '../../components/Solutions/Solutions';
import Research from '../../components/Research/Research';
import Services from '../../components/Services/Services';
import About from '../../components/About/About';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';

const containerVariants = {
  initial: { 
    opacity: 0,
    rotateX: 20,
    transformPerspective: 1000,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  initial: {
    opacity: 0,
    rotateX: 20,
    y: 50,
    transformPerspective: 1000,
  },
  animate: {
    opacity: 1,
    rotateX: 0,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const Home: React.FC = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(90deg, #0DAF94, #13A7B0, #0A1A2F)',
      minHeight: '100vh',
      transformStyle: 'preserve-3d',
    }}>
      <HeroSection />
      
      <Container maxWidth={false} disableGutters>
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="initial"
          animate="animate"
          sx={{
            width: '100%',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
          }}
        >
          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <Solutions />
          </motion.div>

          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <Research />
          </motion.div>

          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <Services />
          </motion.div>

          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <About />
          </motion.div>

          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <Testimonials />
          </motion.div>

          <motion.div variants={sectionVariants} style={{ transformStyle: 'preserve-3d' }}>
            <Newsletter />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
