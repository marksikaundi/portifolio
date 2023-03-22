import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from '../../../../styles/skillsStyles';

const ListItemSkill = ({ icon, name, description }) => {
  return (
    <Box>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="skill icon"
            src={icon}
            sx={{
              width: 56,
              height: 56,
              padding: '8px',
              marginRight: '10px',
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography color="text.primary" variant="body2" component="span">
              {name}
            </Typography>
          }
          secondary={
            <Typography
              component="p"
              variant="body1"
              color="text.secondary"
              sx={styles.description}
            >
              {description}
            </Typography>
          }
        />
      </ListItem>
      <Divider sx={{ width: '90%', float: 'right' }} />
    </Box>
  );
};

export default ListItemSkill;
