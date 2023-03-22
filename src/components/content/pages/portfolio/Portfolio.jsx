import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Item from './Item';
import { projects } from './projectsData';
import { styles } from '../../../../styles/portfolioStyles';

const Portfolio = () => {
  return (
    <Box id="portfolio" sx={styles}>
      <Box sx={styles.projectContainer}>
        <Typography variant="h3" sx={styles.h3}>
          Portfolio
        </Typography>
        <Box sx={styles.list}>
          {projects.map((project) => (
            <Box key={project.name} sx={styles.project}>
              <Item styles={styles} project={project} />
              <Box sx={styles.layer}>{project.description}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Portfolio;
