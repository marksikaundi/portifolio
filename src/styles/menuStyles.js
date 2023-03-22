export const styles = {
  boxContainer: {
    display: 'flex',
    '@media (max-width: 600px)': {
      alignItems: 'center',
    },
  },

  navContainer: {
    width: { lg: 200 },
    flexShrink: { lg: 0 },
  },

  navDrawer: {
    desktop: {
      '& .MuiDrawer-paper': {
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
        boxSizing: 'border-box',
        width: 200,
        backgroundColor: '#00001c',
      },
    },

    mobile: {
      '& .MuiDrawer-paper': {
        display: { sx: 'block', lg: 'none' },
        boxSizing: 'border-box',
        backgroundColor: '#00001c',
        '@media (max-width: 600px)': {
          width: '100%',
        },
        '@media (min-width: 601px) and (max-width: 1200px)': {
          width: '250px',
        },
      },
    },
  },
};
