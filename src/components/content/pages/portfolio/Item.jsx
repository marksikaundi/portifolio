import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';

const Item = ({ project, styles }) => {
  return (
    <Card>
      <CardHeader
        subheader={project.name}
        sx={{ borderBottom: '1px solid gainsboro' }}
      />
      <CardMedia
        sx={{ borderBottom: '1px solid gainsboro' }}
        component="img"
        alt="project"
        image={project.image}
      />
      <CardActions sx={styles.bar}>
        <Link sx={styles.link} href={project.liveLink} target="_blank">
          VIEW LIVE
        </Link>
        <Link sx={styles.link} href={project.githubLink} target="_blank">
          SOURCE CODE
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
