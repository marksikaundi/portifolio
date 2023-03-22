import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArticleIcon from '@mui/icons-material/Article';

export const NavLinks = [
  {
    id: 0,
    icon: <HomeIcon fontSize="large" />,
    label: 'Intro',
    route: 'intro',
  },
  {
    id: 1,
    icon: <AccountCircleIcon fontSize="large" />,
    label: 'About',
    route: 'about',
  },
  {
    id: 2,
    icon: <StarIcon fontSize="large" />,
    label: 'Portfolio',
    route: 'portfolio',
  },
  {
    id: 3,
    icon: <ArticleIcon fontSize="large" />,
    label: 'Articles',
    route: 'articles',
  },
  {
    id: 4,
    icon: <ConstructionIcon fontSize="large" />,
    label: 'Skills',
    route: 'skills',
  },

  {
    id: 5,
    icon: <EmailIcon fontSize="large" />,
    label: 'Contact',
    route: 'contact',
  },
];
