import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { PaletteOptions, Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// Mimi Tech AI color palette definitions
const lightPalette: PaletteOptions = {
  mode: 'light',
  primary: {
    main: '#3CAAFF', // Mimi Tech AI blue
    light: '#7CCCFF',
    dark: '#0088CC',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#19857b', // Teal accent
    light: '#4EB5AB',
    dark: '#00574B',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#2E7D32',
    light: '#4CAF50',
    dark: '#1B5E20',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#0288D1',
    light: '#03A9F4',
    dark: '#01579B',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#ED6C02',
    light: '#FF9800',
    dark: '#E65100',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#FFFFFF',
    paper: '#F8FAFC', // Slightly blue-tinted background
  },
  text: {
    primary: '#2C3E50',
    secondary: '#546E7A',
  },
  grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

const darkPalette: PaletteOptions = {
  mode: 'dark',
  primary: {
    main: '#3CAAFF',
    light: '#7CCCFF',
    dark: '#0088CC',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#0DAF94',
    light: '#26CCBA',
    dark: '#088F77',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#000000',
    paper: '#111111',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.87)',
  },
};

// Component customizations with Mimi Tech AI specific styles
const getComponents = (theme: Theme): Components => ({
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#FFFFFF',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
        fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        textShadow: theme.palette.mode === 'dark' ? '0 1px 2px rgba(0, 0, 0, 0.5)' : 'none',
      },
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        letterSpacing: '-0.01562em',
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
        textShadow: theme.palette.mode === 'dark' ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none',
      },
      h2: {
        fontSize: '2.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
        textShadow: theme.palette.mode === 'dark' ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none',
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 600,
        lineHeight: 1.4,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.4,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.4,
        color: theme.palette.mode === 'dark' ? '#FFFFFF' : '#2C3E50',
      },
      body1: {
        fontSize: '1.125rem',
        lineHeight: 1.75,
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.95)' : '#546E7A',
        fontWeight: 400,
      },
      body2: {
        fontSize: '1rem',
        lineHeight: 1.75,
        color: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.87)' : '#546E7A',
        fontWeight: 400,
      },
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        borderRadius: '8px',
        padding: '10px 24px',
      },
      contained: {
        boxShadow: theme.palette.mode === 'dark' ? '0 2px 4px rgba(0, 0, 0, 0.2)' : 'none',
        '&:hover': {
          boxShadow: theme.palette.mode === 'dark' ? '0 4px 8px rgba(60, 170, 255, 0.3)' : '0 8px 16px rgba(60, 170, 255, 0.2)',
        },
      },
    },
  },
  MuiContainer: {
    styleOverrides: {
      root: {
        '@media (min-width: 1200px)': {
          paddingLeft: '2rem',
          paddingRight: '2rem',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.95)' : alpha(theme.palette.background.default, 0.9),
        backdropFilter: 'blur(8px)',
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 12,
        boxShadow: theme.palette.mode === 'dark'
          ? '0 4px 6px rgba(0, 0, 0, 0.3)'
          : '0 4px 6px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: theme.palette.mode === 'dark'
            ? '0 6px 12px rgba(60, 170, 255, 0.2)'
            : '0 6px 12px rgba(60, 170, 255, 0.15)',
        },
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        transition: 'all 0.2s ease-in-out',
      },
      elevation1: {
        boxShadow: theme.palette.mode === 'dark'
          ? '0 2px 4px rgba(0, 0, 0, 0.3)'
          : '0 2px 4px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        '& .MuiOutlinedInput-root': {
          borderRadius: 8,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            borderColor: theme.palette.primary.main,
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.2)}`,
          },
        },
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        '&.MuiChip-clickable:hover': {
          transform: 'translateY(-1px)',
        },
      },
    },
  },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        borderRadius: 8,
        background: theme.palette.mode === 'dark'
          ? alpha(theme.palette.grey[900], 0.9)
          : alpha(theme.palette.grey[800], 0.9),
        backdropFilter: 'blur(4px)',
        padding: '8px 12px',
        fontSize: '0.875rem',
      },
    },
  },
  MuiDialog: {
    styleOverrides: {
      paper: {
        borderRadius: 16,
        boxShadow: theme.palette.mode === 'dark'
          ? '0 8px 32px rgba(0, 0, 0, 0.4)'
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiDrawer: {
    styleOverrides: {
      paper: {
        background: theme.palette.mode === 'dark'
          ? alpha(theme.palette.background.paper, 0.95)
          : alpha(theme.palette.background.default, 0.95),
        backdropFilter: 'blur(8px)',
      },
    },
  },
  // Add support for SVG icons and images
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        fontSize: '1.5rem',
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },
    },
  },
});

const createAppTheme = (darkMode: boolean) => {
  const baseTheme = createTheme({
    palette: darkMode ? darkPalette : lightPalette,
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
    shape: {
      borderRadius: 8,
    },
    shadows: darkMode ? [
      'none',
      '0 2px 4px rgba(0,0,0,0.3)',
      '0 4px 8px rgba(0,0,0,0.3)',
      '0 8px 16px rgba(0,0,0,0.3)',
      '0 12px 24px rgba(0,0,0,0.3)',
      // ... add more shadow levels as needed
    ] : [
      'none',
      '0 2px 4px rgba(0,0,0,0.05)',
      '0 4px 8px rgba(0,0,0,0.1)',
      '0 8px 16px rgba(0,0,0,0.1)',
      '0 12px 24px rgba(0,0,0,0.1)',
      // ... add more shadow levels as needed
    ],
  });

  // Add components with access to the theme
  const themeWithComponents = createTheme(baseTheme, {
    components: getComponents(baseTheme),
  });

  return responsiveFontSizes(themeWithComponents);
};

export default createAppTheme;
