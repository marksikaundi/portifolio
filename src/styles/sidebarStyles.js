export const styles = {
  icon: {
    color: '#1495ff',
  },
  listItem: {
    padding: '5px 0',
    transition: '0.8s',
    '&:hover': { background: '#0C2340' },
    '@media (max-width: 600px)': { width: '50%' },
  },

  listItemButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  span: {
    color: '#1877F2',
    textAlign: 'right',
    fontSize: '18px',
    letterSpacing: '1px',
    '@media (max-width: 600px)': {
      textAlign: 'left',
      width: '100%',
      marginLeft: '25px',
    },
  },

  toggleContainer: {
    display: 'flex',
    position: 'absolute',
    paddingLeft: '20px',
  },

  toggleButton: {
    display: { lg: 'none' },
    position: 'fixed',
    top: '2%',
    right: '5%',
    zIndex: 99,
  },

  menuIcon: {
    color: '#fff',
  },

  closeIcon: {
    display: 'none',
    color: '#1495ff',
    '@media (max-width: 1200px)': {
      display: 'block',
      position: 'absolute',
      top: '2%',
      right: '5%',
    },
  },

  navLinksContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    '@media (max-width: 600px)': {
      gap: '10px',
    },
    '@media (min-width: 601px) and (max-width: 1400px)': {
      gap: '20px',
    },
  },
};
