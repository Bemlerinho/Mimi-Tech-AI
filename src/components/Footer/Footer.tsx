import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: 'rgba(10, 26, 47, 0.95)',
  backdropFilter: 'blur(10px)',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: theme.spacing(6, 0),
  color: theme.palette.common.white,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  textDecoration: 'none',
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  },
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              MIMI Tech AI
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.7 }}>
              Innovative KI-Lösungen für die digitale Transformation Ihres Unternehmens.
            </Typography>
            <Stack direction="row" spacing={1}>
              <SocialButton size="small" aria-label="LinkedIn">
                <LinkedInIcon />
              </SocialButton>
              <SocialButton size="small" aria-label="Twitter">
                <TwitterIcon />
              </SocialButton>
              <SocialButton size="small" aria-label="Facebook">
                <FacebookIcon />
              </SocialButton>
              <SocialButton size="small" aria-label="Instagram">
                <InstagramIcon />
              </SocialButton>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Produkte
            </Typography>
            <Stack spacing={1}>
              <FooterLink component={RouterLink} to="/products">KI-Lösungen</FooterLink>
              <FooterLink component={RouterLink} to="/naturio">Naturio</FooterLink>
              <FooterLink component={RouterLink} to="/research">Forschung</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Unternehmen
            </Typography>
            <Stack spacing={1}>
              <FooterLink component={RouterLink} to="/about">Über uns</FooterLink>
              <FooterLink component={RouterLink} to="/blog">Blog</FooterLink>
              <FooterLink component={RouterLink} to="/contact">Kontakt</FooterLink>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
              Kontakt
            </Typography>
            <Typography variant="body2" sx={{ mb: 1, opacity: 0.7 }}>
              info@mimitech.ai
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              +49 (0) 123 456 789
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {new Date().getFullYear()} MIMI Tech AI. Alle Rechte vorbehalten.
          </Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
