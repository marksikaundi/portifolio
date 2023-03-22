export const styles = {
  introContainer: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
  },

  introText: {
    width: '80%',
    maxWidth: '1600px',
    height: '70%',
    maxHeight: '800px',
    background: '#00001c',
    borderRadius: '50px',
    display: 'flex',
    padding: '50px',
    boxShadow: '0 0 10px #1495ff',
    '@media (max-width: 600px)': {
      width: '98%',
      height: 'auto',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '50px 20px',
      boxShadow: '0 0 5px #1495ff',
      borderRadius: '25px',
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      height: '40%',
      width: '95%',
      padding: '30px',
    },
    '@media (min-width: 901px) and (max-width: 1400px)': {
      height: '500px',
      width: '90%',
    },
  },

  title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    fontSize: '4.2rem',
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      fontSize: '2.2rem',
    },
    '@media (min-width: 901px) and (max-width: 1400px)': {
      fontSize: '2.8rem',
    },
    '@media (min-width: 1401px) and (max-width: 1600px)': {
      fontSize: '3.2rem',
    },
  },

  h2: {
    marginTop: '50px',
    fontSize: '2rem',
    display: 'flex',
    gap: '15px',
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width: 901px) and (max-width: 1400px)': {
      fontSize: '1.5rem',
    },
    '@media (min-width: 1401px) and (max-width: 1600px)': {
      fontSize: '1.6rem',
    },
  },
  h3: {
    fontSize: '1.5rem',
    marginTop: '30px',
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      fontSize: '1.1rem',
    },
    '@media (min-width: 901px) and (max-width: 1400px)': {
      fontSize: '1.2rem',
    },
    '@media (min-width: 1401px) and (max-width: 1600px)': {
      fontSize: '1.3rem',
    },
  },
  introIcons: {
    marginTop: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  imageBox: {
    width: 'inherit',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      width: '80%',
      marginTop: '50px',
    },
    '@media (min-width: 601px) and (max-width: 900px)': {
      width: '100%',
      minWidth: '230px',
    },
    '@media (min-width: 901px) and (max-width: 1400px)': {
      width: '100%',
    },
    '@media (min-width: 1401px) and (max-width: 1600px)': {
      width: '100%',
    },
  },
};
