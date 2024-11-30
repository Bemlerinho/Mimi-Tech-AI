import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Button,
  useScrollTrigger,
  Slide,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  window?: () => Window;
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(10, 26, 47, 0.8)',
  backdropFilter: 'blur(10px)',
  boxShadow: 'none',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
}));

const Logo = styled(motion.img)({
  height: '40px',
  cursor: 'pointer',
});

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontSize: '1rem',
  padding: '6px 16px',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(13, 175, 148, 0.1)',
    transform: 'translateY(-2px)',
  },
}));

const ActiveNavButton = styled(NavButton)(({ theme }) => ({
  backgroundColor: 'rgba(13, 175, 148, 0.15)',
  '&:hover': {
    backgroundColor: 'rgba(13, 175, 148, 0.2)',
  },
}));

const MobileDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: '100%',
    maxWidth: '300px',
    background: 'rgba(10, 26, 47, 0.95)',
    backdropFilter: 'blur(10px)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
  },
}));

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Über uns', path: '/about' },
  { label: 'Produkte', path: '/products' },
  { label: 'Blog', path: '/blog' },
  { label: 'Research', path: '/research' },
  { label: 'Naturio', path: '/naturio' },
];

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header: React.FC<Props> = (props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const drawer = (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
        <IconButton
          onClick={handleDrawerToggle}
          sx={{ color: 'white' }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.path}
            component={Link}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: '8px',
              mb: 1,
              backgroundColor: isActive(item.path)
                ? 'rgba(13, 175, 148, 0.15)'
                : 'transparent',
              '&:hover': {
                backgroundColor: 'rgba(13, 175, 148, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.label}
              sx={{
                color: 'white',
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <HideOnScroll {...props}>
      <StyledAppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled
            ? 'rgba(10, 26, 47, 0.95)'
            : 'rgba(10, 26, 47, 0.8)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/">
                <Logo
                  src="/mimi-tech-ai-logo.svg"
                  alt="MIMI Tech AI Logo"
                  sx={{
                    height: '50px',
                    filter: 'brightness(1)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      filter: 'brightness(1.2) drop-shadow(0 0 10px rgba(19, 167, 176, 0.5))',
                      transform: 'scale(1.05)',
                    },
                    animation: 'glow 3s ease-in-out infinite',
                    '@keyframes glow': {
                      '0%': {
                        filter: 'brightness(1) drop-shadow(0 0 5px rgba(19, 167, 176, 0.2))',
                      },
                      '50%': {
                        filter: 'brightness(1.1) drop-shadow(0 0 10px rgba(19, 167, 176, 0.4))',
                      },
                      '100%': {
                        filter: 'brightness(1) drop-shadow(0 0 5px rgba(19, 167, 176, 0.2))',
                      },
                    },
                  }}
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {isActive(item.path) ? (
                    <ActiveNavButton
                      component={Link}
                      to={item.path}
                    >
                      {item.label}
                    </ActiveNavButton>
                  ) : (
                    <NavButton
                      component={Link}
                      to={item.path}
                    >
                      {item.label}
                    </NavButton>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  component={Link}
                  to="/contact"
                  variant="contained"
                  color="primary"
                  sx={{
                    ml: 2,
                    textTransform: 'none',
                    borderRadius: '8px',
                    px: 3,
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 8px rgba(13, 175, 148, 0.2)',
                    },
                  }}
                >
                  Kontakt
                </Button>
              </motion.div>
            </Stack>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>

        {/* Mobile Navigation Drawer */}
        <MobileDrawer
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </MobileDrawer>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Header;
