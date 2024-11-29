import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  { title: 'Produkte', path: '/products' },
  { title: 'Naturio', path: '/naturio' },
  { title: 'Forschung', path: '/research' },
  { title: 'Unternehmen', path: '/about' },
  { title: 'Blog', path: '/blog' },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: isScrolled || trigger
          ? 'rgba(0, 0, 0, 0.95)'
          : 'transparent',
        borderBottom: isScrolled || trigger
          ? '1px solid rgba(255, 255, 255, 0.1)'
          : 'none',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: isScrolled || trigger ? 'blur(10px)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="/mimi-tech-ai-logo.svg"
              alt="MimiTech AI Logo"
              style={{
                height: '45px',
                width: 'auto',
                marginRight: '12px',
              }}
            />
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: '#ffffff' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: '#111111',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  sx={{
                    color: '#ffffff',
                    '&:hover': {
                      backgroundColor: 'rgba(60, 170, 255, 0.1)',
                    },
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <img
              src="/mimi-tech-ai-logo.svg"
              alt="MimiTech AI Logo"
              style={{
                height: '35px',
                width: 'auto',
              }}
            />
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  mx: 1,
                  my: 2,
                  color: '#ffffff',
                  display: 'block',
                  fontSize: '0.9rem',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#3CAAFF',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Contact button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              sx={{
                backgroundColor: '#3CAAFF',
                color: '#000000',
                textTransform: 'none',
                px: 3,
                '&:hover': {
                  backgroundColor: '#2b99ff',
                },
              }}
            >
              Kontakt
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
