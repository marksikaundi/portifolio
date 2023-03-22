export const styles = {
  minHeight: '100vh',
  background: '#00001c',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 1200px)': {
    minHeight: 'unset',
  },
  articlesContainer: {
    width: '80%',
    maxWidth: '1600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    padding: '50px 0',
    '@media (max-width: 600px)': {
      width: '90%',
    },
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
    '@media (max-width: 1800px)': {
      gridTemplateColumns: '1fr',
      gap: '100px',
    },
  },

  h3: {
    color: '#fff',
    borderBottom: '1px solid #1495ff',
    paddingBottom: '25px',
    marginBottom: '20px',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    },
  },
};
