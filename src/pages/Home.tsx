import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { Carousel } from '../components/Carousel';
import { HBSlider } from '../components/HBSlider';
import Accordions from '../components/Accordions';
import TopicCard from '../components/TopicCard';
import SubjectItem from '../components/SubjectItem';

import { FREQUENTLY_ASKED_QUESTION } from '../constants/faq';
import { MAIN_TOPICS } from '../constants/topics';
import { MAIN_SUBJECTS } from '../constants/subjects';

import TopicsBgImg from '../images/topics_bg.png';

const useStyles = makeStyles({
  sectionTitle: {
    '&.MuiTypography-root': {
      marginBottom: '20px',
      color: 'rgba(19, 129, 136, 1)',
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 700,
    }
  },
  subjectSection: {
    padding: '30px',
  },
  faqSection: {
      padding: '30px',
      background: '#E8EAE9',
  },
  topicsSection: {
    padding: '30px',
    backgroundImage: `url(${TopicsBgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
  }
});

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-ui-name="home">
      <Grid container>
        <HBSlider />
      </Grid>

      <Grid container justifyContent="center" className={classes.subjectSection}>
        <Grid container maxWidth="lg">
          <Typography className={classes.sectionTitle}>
            Предметы
          </Typography>

          <Grid container justifyContent="space-evenly">
            {MAIN_SUBJECTS.map((subject: any) => (
              <SubjectItem key={subject.label} {...subject} />
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.faqSection}>
        <Grid container maxWidth="lg">
          <Typography className={classes.sectionTitle}>
            Вопросы о проекте
          </Typography>
          <Accordions data={FREQUENTLY_ASKED_QUESTION} />
        </Grid>
      </Grid>

      <Grid container justifyContent="center" className={classes.topicsSection}>
        <Grid container maxWidth="lg" flexDirection="column">
          <Typography className={classes.sectionTitle}>
            Темы
          </Typography>
          
          <Carousel>
            {MAIN_TOPICS.map((card: any) => (
              <TopicCard key={card.title} {...card} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
