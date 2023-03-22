import { Box, Typography } from '@mui/material';
import { styles } from '../../../styles/aboutMeStyles';

const AboutMe = () => {
  return (
    <Box id="about" sx={styles}>
      <Box sx={styles.textContainer}>
        <Typography sx={styles.h3} variant="h3">
          About Me
        </Typography>
        <br />
        <Box sx={styles.paraContainer}>
          <Typography sx={styles.p} variant="body1">
            Hello, I'm Mark!
            <br />
            <br />
            I'm a dedicated <span>Software Engineer</span> who specializes in Fullstack, Software Testing & Technicall Writing.
            <br />
            <br /> I found my passion for programming at the end of 2016, and in
            2018 I joined an online software program called{' '}
            <span>CS50</span>, where I studied{' '}
            <span>Introduction to Computer science</span>. <br />
            <br />
            During my time in the program, I gained essential technical and soft
            skills, for example, in <span>HTML5</span>, <span>CSS3/SCSS</span>,{' '}
            <span>JavaScript</span>, <span>React</span>, <span>Redux</span>,{' '}
            <span>Ruby</span>, <span>mobile-first approach</span>, and{' '}
            <span>test-driven development</span>. Collaborated with other
            developers from different cultures using the{' '}
            <span>pair programming</span> (driver/navigator) method with the
            industry-standard <span>gitflow</span>, <span>mentored</span> junior
            developers, provided <span>code reviews</span>, gave constructive
            feedback, worked in a team to build interactive apps using the{' '}
            <span>kanban method</span>, managed my time efficiently, attended{' '}
            <span>daily stand-ups</span> to communicate with my peers, and
            delivered projects before the deadline.
            <br />
            <br /> I enjoy building anything,{' '}
            <span>from small apps to interactive websites</span>. I also love
            learning new skills and am able to take on new ones quickly and
            efficiently.
            <br />
            <br /> My everyday consists of <span>building</span> web apps or{' '}
            <span>maintaining</span> my existing projects, <span>learning</span>{' '}
            new skills, <span>reading</span> documentation,{' '}
            <span>solving problems</span> and <span>networking</span>.
            <br />
            <br />I provide professional services in{' '}
            <span>web development</span> and <span>technical writing</span>,
            specializing in the <span>Python, C & JavaScript</span> programming language and
            the <span>MERN stack</span> (MongoDB, Express, React, NodeJS).
            Whether you need a new website developed, an existing site updated,
            or technical documents written, I have the skills and expertise to
            deliver <span>high-quality results</span>. I'm committed to
            providing efficient and reliable service to all of my clients.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
