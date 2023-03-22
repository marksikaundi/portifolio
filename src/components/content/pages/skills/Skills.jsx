import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemSkill from './ListItem';
import { listItems } from './skillsData';
import { styles } from '../../../../styles/skillsStyles';
import '../../../../styles/icons.css';

const Skills = () => {
  const [open, setOpen] = useState({
    frontend: false,
    backend: false,
    tools: false,
  });

  return (
    <Box id="skills" sx={styles}>
      <Box sx={styles.skillsContainer}>
        <Typography sx={styles.h3} variant="h3">
          Skills
        </Typography>
        <List sx={styles.container}>
          <Box sx={styles.buttonsContainer}>
            <ListItemButton
              sx={styles.button}
              onClick={() => setOpen({ ...open, frontend: !open.frontend })}
            >
              <ListItemText primary="Front-End" />
              {open.frontend ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ width: '100%' }}
              in={open.frontend}
              timeout="auto"
              unmountOnExit
            >
              <List sx={styles.list}>
                {listItems[0].map((item) => (
                  <ListItemSkill
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </List>
            </Collapse>
            <ListItemButton
              sx={styles.button}
              onClick={() => setOpen({ ...open, backend: !open.backend })}
            >
              <ListItemText primary="Back-End" />
              {open.backend ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ width: '100%' }}
              in={open.backend}
              timeout="auto"
              unmountOnExit
            >
              <List sx={styles.list}>
                {listItems[1].map((item) => (
                  <ListItemSkill
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </List>
            </Collapse>
            <ListItemButton
              sx={styles.button}
              onClick={() => setOpen({ ...open, tools: !open.tools })}
            >
              <ListItemText primary="Tools" />
              {open.tools ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              sx={{ width: '100%' }}
              in={open.tools}
              timeout="auto"
              unmountOnExit
            >
              <List sx={styles.list}>
                {listItems[2].map((item) => (
                  <ListItemSkill
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                    description={item.description}
                  />
                ))}
              </List>
            </Collapse>
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default Skills;
