import { createTheme } from '@mui/material/styles';

export const portfolioTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Montserrat',
    body1: {
      color: 'rgba(250, 250, 250, 0.9)',
    },
    h1: {
      fontFamily: 'Orbitron',
    },
    h6: {
      color: '#1495ff',
      fontWeight: 700,
    },
    body2: {
      fontSize: '1rem',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem',
      },
    },
  },
});
