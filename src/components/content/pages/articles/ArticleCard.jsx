import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import MediumIcon from '../../../../assets/icons/medium.png';

const ArticleCard = ({ article }) => {
  return (
    <Card>
      <CardHeader
        title={article.title}
        subheader={article.createdAt}
        avatar={
          <Avatar>
            <img src={MediumIcon} alt="medium icon" width="70%" />
          </Avatar>
        }
      />
      <Link href={article.link} target="_blank">
        <CardMedia component="img" alt="article" image={article.image} />
      </Link>
      <CardContent>
        <Typography color="text.secondary" variant="body1">
          In this article, I'm comparing a NodeJS and an Express version of the
          same code to explain what are the benefits of using the Express
          framework and what other things it solves for us.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
