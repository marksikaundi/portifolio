export const styles = {
  background: '#00001c',
  display: 'flex',
  justifyContent: 'center',
  projectContainer: {
    width: '80%',
    maxWidth: '1600px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
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
    marginBottom: '20px',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      width: '100%',
      margin: '0 auto 20px auto',
    },
  },

  list: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '25px',
    '@media (max-width: 1800px)': {
      gridTemplateColumns: '1fr',
      gap: '100px',
    },
  },

  project: {
    position: 'relative',
  },

  layer: {
    position: 'absolute',
    top: '0',
    width: '100%',
    height: '100%',
    transition: '1s',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '25px',
    padding: '10px',
    color: 'transparent',
    fontSize: '1rem',
    '&:hover': {
      background: 'rgba(0, 0, 28, 0.9)',
      color: '#fff',
    },
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '0.9rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8rem',
    },
  },

  bar: {
    zIndex: 99,
  },

  link: {
    width: '110px',
    textAlign: 'center',
    textDecoration: 'none',
    background: '#fff',
    color: '#1495ff',
    fontWeight: 700,
    fontSize: '0.7rem',
    padding: '12px 5px',
    borderRadius: '5px',
    transition: '.8s',
    zIndex: 99,
    '&:hover': {
      background: '#00001c',
      color: '#1495ff',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem',
      padding: '10px 0',
    },
  },
};
