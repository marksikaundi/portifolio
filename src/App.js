import Menu from './components/content/Menu';
import Intro from './components/content/pages/Intro';
import Portfolio from './components/content/pages/portfolio/Portfolio';
import Articles from './components/content/pages/articles/Articles';
import Skills from './components/content/pages/skills/Skills';
import Contact from './components/content/pages/Contact';
import AboutMe from './components/content/pages/AboutMe';
import Box from '@mui/material/Box';
import { styles } from './styles/mainContainerStyles';
import './styles/app.css';

const App = () => {
  return (
    <Box id="App">
      <Menu />
      <Box sx={styles}>
        <Intro />
        <AboutMe />
        <Portfolio />
        <Articles />
        <Skills />
        <Contact />
      </Box>
    </Box>
  );
};

export default App;
