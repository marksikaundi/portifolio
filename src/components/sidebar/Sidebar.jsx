import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { NavLinks } from './links';
import { styles } from '../../styles/sidebarStyles';

const Sidebar = ({ handleDrawerToggle }) => {
  return (
    <Box sx={styles.navLinksContainer}>
      <IconButton
        role="button"
        aria-label="close drawer"
        onClick={handleDrawerToggle}
        sx={styles.closeIcon}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <List sx={styles.listContainer}>
        {NavLinks.map((navLink) => (
          <ListItem sx={styles.listItem} key={navLink.id}>
            <a href={`#${navLink.route}`}>
              <ListItemButton
                sx={styles.listItemButton}
                onClick={handleDrawerToggle}
              >
                <ListItemIcon sx={styles.icon}>{navLink.icon}</ListItemIcon>
                <Typography variant="span" sx={styles.span}>
                  {navLink.label}
                </Typography>
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
