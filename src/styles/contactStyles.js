export const styles = {
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0',
  '@media (max-width: 600px)': {
    paddingBottom: '50px',
  },

  contactContainer: {
    width: '80%',
    maxWidth: '1600px',
    padding: '0 30px',
    boxShadow: '0 0 10px #1495ff',
    '@media (max-width: 1200px)': {
      width: '98%',
      maxHeight: 'unset',
      height: 'auto',
      boxShadow: '0 0 5px #1495ff',
    },
    height: '85vh',
    maxHeight: '1000px',
    background: 'rgba(0, 0, 28, 0.8)',
    backdropFilter: 'blur(10px)',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  h3: {
    color: '#fff',
    borderBottom: '1px solid #1495ff',
    padding: '25px 0',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },

  formContainer: {
    width: '100%',
    height: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: '30px',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      gap: '10px',
      paddingBottom: '40px',
    },
  },

  successMessage: {
    height: '100%',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.8rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },

  inputsContainer: {
    height: '60%',
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    '@media (max-width: 1200px)': {
      width: '100%',
      height: '80%',
    },
  },

  inputs: {
    marginBottom: '25px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },

  para: {
    fontSize: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '60%',
    marginBottom: '30px',
    '@media (min-width: 900px) and (max-width: 1440px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 1200px)': {
      width: '60%',
      height: 'unset',
      padding: '50px 0 0 0',
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
      height: 'unset',
      padding: '50px 0 0 0',
      width: '100%',
    },
  },

  submit: {
    width: '160px',
    fontFamily: 'Oxygen',
    fontSize: '0.7rem',
    background: '#1495ff',
    padding: '15px 0',
    color: '#fff',
    fontWeight: 700,
    letterSpacing: '1.5px',
    '&:hover': {
      color: '#1495ff',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem',
      width: '120px',
    },
  },

  inputColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  errorMessage: {
    padding: '10px 0',
    color: 'red',
  },

  container: {
    width: '35%',
    '@media (max-width: 1200px)': {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  socialLinksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px 15px',
    width: '100%',
  },

  iconButton: {
    color: '#1495ff',
    transition: '0.5s',
    '&:hover': { boxShadow: '0 0 30px #fff', color: '#fff' },
  },
};
