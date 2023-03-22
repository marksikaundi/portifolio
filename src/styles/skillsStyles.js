export const styles = {
  minHeight: '100vh',
  background: '#00001c',
  display: 'flex',
  justifyContent: 'center',
  '@media (max-width: 1200px)': {
    minHeight: 'unset',
  },

  skillsContainer: {
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
    padding: '25px 0',
    display: 'flex',
    marginBottom: '20px',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },

  list: {
    background: '#eaf4fc',
    width: '100%',
    borderRadius: '25px',
    padding: '25px 0',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '80%',
    alignSelf: 'center',
    '@media (max-width: 1200px)': {
      width: '100%',
    },
  },

  buttonsContainer: {
    width: '100%',
  },

  button: {
    width: '80%',
    border: '1px solid #1495ff',
    borderRadius: '25px',
    margin: '25px auto',
    '@media (max-width: 1200px)': {
      width: '100%',
    },
  },

  description: {
    fontSize: '1rem',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
  },
};
