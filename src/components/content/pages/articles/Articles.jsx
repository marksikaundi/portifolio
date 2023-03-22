import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArticleCard from './ArticleCard';
import { styles } from '../../../../styles/articlesStyles';
import { articles } from './articles';

const Articles = () => {
  return (
    <Box id="articles" sx={styles}>
      <Box sx={styles.articlesContainer}>
        <Typography variant="h3">Latest Articles...</Typography>
        <Box sx={styles.grid}>
          {articles.map((article) => (
            <ArticleCard key={article.title} article={article} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Articles;
