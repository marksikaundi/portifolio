export const styles = {
  background: '#00001c',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  textContainer: {
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

  h3: {
    color: '#fff',
    borderBottom: '1px solid #1495ff',
    paddingBottom: '25px',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    },
  },

  p: {
    fontSize: '1.3rem',
    lineHeight: '1.4',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },

  paraContainer: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '@media (max-height: 920px) and (min-width: 1200px)': {
      overflowY: 'auto',
    },
  },

  span: {
    color: '#1495ff',
  },
};
