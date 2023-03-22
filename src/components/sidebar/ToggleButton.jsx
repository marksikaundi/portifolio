import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from '../../styles/sidebarStyles';

const ToggleButton = ({ handleDrawerToggle }) => {
  return (
    <Box sx={styles.toggleContainer}>
      <IconButton
        role="button"
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={styles.toggleButton}
      >
        <MenuIcon fontSize="large" sx={styles.menuIcon} />
      </IconButton>
    </Box>
  );
};

export default ToggleButton;
