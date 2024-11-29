import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import theme from './theme';

// Layout
import Layout from './components/Layout/Layout';

// Pages
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ProductsPage from './pages/Products/ProductsPage';
import BlogPage from './pages/Blog/BlogPage';
import ResearchPage from './pages/Research/ResearchPage';
import PricingPage from './pages/Pricing/PricingPage';
import ConfiguratorPage from './pages/Configurator/ConfiguratorPage';
import NaturioPage from './pages/Naturio/NaturioPage';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/configurator" element={<ConfiguratorPage />} />
              <Route path="/naturio" element={<NaturioPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
