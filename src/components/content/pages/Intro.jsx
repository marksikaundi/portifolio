import { Typography, Box } from '@mui/material';
import { styles } from '../../../styles/introStyles';
import Profile from '../../../assets/profile.png';
import MongoDBImg from '../../../assets/mongodb.png';
import ReactImg from '../../../assets/react.png';
import ExpressImg from '../../../assets/express.png';
import NodeImg from '../../../assets/node.png';

const Intro = () => {
  return (
    <Box id="intro" sx={styles.introContainer} className="pages">
      <Box sx={styles.introText}>
        <Box sx={styles.title}>
          <Typography sx={styles.h1} variant="h1">
            Virag Kormoczy
          </Typography>
          <Typography sx={styles.h2} variant="h2">
            Full-Stack <span style={{ color: '#1495ff' }}>JavaScript</span>{' '}
            Developer
          </Typography>
          <Typography sx={styles.h3} variant="h3">
            Web Development | Technical Writing
          </Typography>
          <Box sx={styles.introIcons}>
            <img
              id="mongodb"
              className="introIcon"
              src={MongoDBImg}
              alt="MongoDB icon"
            />
            <img
              id="express"
              className="introIcon"
              src={ExpressImg}
              alt="Express icon"
            />
            <img
              id="react"
              className="introIcon"
              src={ReactImg}
              alt="React icon"
            />
            <img
              id="node"
              className="introIcon"
              src={NodeImg}
              alt="NodeJS icon"
            />
          </Box>
        </Box>
        <Box sx={styles.imageBox}>
          <img id="profile" src={Profile} alt="profile" />
        </Box>
      </Box>
    </Box>
  );
};

export default Intro;
