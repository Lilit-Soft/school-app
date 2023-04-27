import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

import newsImg from  '../images/news_default.png';

const useStyles = makeStyles({
  root: {
    padding: '30px',
  },
  grid: {
    '&.MuiGrid-root': {
      margin: '0 30px',
      display: 'inline-grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      columnGap: '30px',

      '@media (max-width: 1200px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
      },

      '@media (max-width: 767px)': {
        gridTemplateColumns: 'repeat(1, 1fr)',
      },
    }
  },
  gridItem: {
    '&.MuiGrid-root': {
      padding: '30px',
    }
  },
  title: {
    '&.MuiTypography-root': {
      marginBottom: '20px',
      color: 'rgba(19, 129, 136, 1)',
      fontSize: '48px',
      lineHeight: '56px',
      fontWeight: 700,
    }
  },
  itemTitle: {
    '&.MuiTypography-root': {
      margin: '8px 0 4px',
      fontSize: '25px',
      lineHeight: '29px',
      fontWeight: 700,
    }
  },
  itemParagraph: {
    '&.MuiTypography-root': {
      marginBottom: '4px',
      fontSize: '18px',
      lineheight: '24px'
    }
  }
});

const defaultNews = [
  {
    img: newsImg,
    title: 'Тема новости',
    date: '07.03.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости Тема новости',
    date: '07.07.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости Тема новости Тема новости Тема новости',
    date: '07.04.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости',
    date: '17.06.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости 5',
    date: '07.08.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости 6',
    date: '07.03.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости 7',
    date: '07.03.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости 8',
    date: '07.03.2023',
  },
  {
    img: newsImg,
    title: 'Тема новости 9',
    date: '07.03.2023',
  },
];

export type INewsProps = {}

const News = (props: INewsProps): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-ui-name="news">
      <Grid container justifyContent="center" className={classes.root}>
        <Grid container maxWidth="lg">
          <Typography className={classes.title}>
            Новости
          </Typography>

          <Grid container justifyContent="space-evenly" className={classes.grid}>
            {defaultNews.map((news: any) => (
              <Grid key={news.title} item container className={classes.gridItem} flexDirection='column'>
                <img alt={news.title} src={news.img} />
                <Typography className={classes.itemTitle}>{news.title}</Typography>
                <Typography className={classes.itemParagraph}>{news.date}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default News
