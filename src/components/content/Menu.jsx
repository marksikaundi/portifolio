import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import { styles } from '../../styles/menuStyles';
import Sidebar from '../sidebar/Sidebar';
import ToggleButton from '../sidebar/ToggleButton';

const Menu = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box sx={styles.boxContainer}>
        <CssBaseline />
        <Box sx={styles.navContainer} component="nav" aria-label="nav icons">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={styles.navDrawer.mobile}
            transitionDuration={{ enter: 700, exit: 700 }}
          >
            <Sidebar handleDrawerToggle={handleDrawerToggle} />
          </Drawer>
          <Drawer variant="permanent" sx={styles.navDrawer.desktop} open>
            <Sidebar />
          </Drawer>
        </Box>
        <ToggleButton handleDrawerToggle={handleDrawerToggle} />
      </Box>
    </Box>
  );
};

export default Menu;
