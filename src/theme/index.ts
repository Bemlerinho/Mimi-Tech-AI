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
    main: '#4EB5AB',
    light: '#7CE7DD',
    dark: '#19857b',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#4CAF50',
    light: '#81C784',
    dark: '#388E3C',
    contrastText: '#FFFFFF',
  },
  info: {
    main: '#03A9F4',
    light: '#4FC3F7',
    dark: '#0288D1',
    contrastText: '#FFFFFF',
  },
  warning: {
    main: '#FF9800',
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#FFFFFF',
  },
  error: {
    main: '#F44336',
    light: '#E57373',
    dark: '#D32F2F',
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#0A1929', // Dark blue background
    paper: '#132F4C', // Slightly lighter blue
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B0BEC5',
  },
  grey: {
    50: '#0A1929',
    100: '#132F4C',
    200: '#1A3B5D',
    300: '#245D93',
    400: '#367BB7',
    500: '#4B96DB',
    600: '#64B6FF',
    700: '#95CDFF',
    800: '#CAE6FF',
    900: '#E6F3FF',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

// Component customizations with Mimi Tech AI specific styles
const getComponents = (theme: Theme): Components => ({
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
        fontWeight: 600,
        padding: '8px 16px',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-1px)',
          boxShadow: theme.palette.mode === 'dark' 
            ? '0 4px 8px rgba(60, 170, 255, 0.2)'
            : '0 4px 8px rgba(60, 170, 255, 0.2)',
        },
      },
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: theme.palette.mode === 'dark'
            ? '0 4px 8px rgba(60, 170, 255, 0.2)'
            : '0 4px 8px rgba(60, 170, 255, 0.2)',
        },
      },
      outlined: {
        borderWidth: 2,
        '&:hover': {
          borderWidth: 2,
        },
      },
    },
    variants: [
      {
        props: { variant: 'gradient' },
        style: {
          background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: '#FFFFFF',
          '&:hover': {
            background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
          },
        },
      },
    ],
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
  MuiAppBar: {
    styleOverrides: {
      root: {
        background: theme.palette.mode === 'dark'
          ? alpha(theme.palette.background.paper, 0.9)
          : alpha(theme.palette.background.default, 0.9),
        backdropFilter: 'blur(8px)',
        boxShadow: theme.palette.mode === 'dark'
          ? '0 2px 8px rgba(0, 0, 0, 0.3)'
          : '0 2px 8px rgba(0, 0, 0, 0.05)',
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
      fontFamily: [
        'Roboto',
        'Open Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        'sans-serif',
      ].join(','),
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h4: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      h6: {
        fontSize: '1.25rem',
        fontWeight: 500,
        lineHeight: 1.4,
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.5,
      },
      button: {
        fontWeight: 600,
      },
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
