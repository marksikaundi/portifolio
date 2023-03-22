import background from '../assets/4.png';

export const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  padding: '0 0 50px 0',
  overflowY: 'auto',
  width: { lg: 'calc(100% - 200px)', md: '100%' },
  marginLeft: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '@media (max-width: 600px)': {
    padding: '30px 0',
  },
};
