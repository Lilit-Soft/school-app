import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

import liveImg from  '../images/live-img.png';

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
      fontWeight: 700,
    }
  },
  itemParagraph: {
    '&.MuiTypography-root': {
      marginBottom: '4px',
      fontSize: '18px',
    }
  }
});

const defaultLives = [
  {
    img: liveImg,
    title: 'Прямой эфир 1',
    date: '07.03.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 2',
    date: '07.07.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 3',
    date: '07.04.2023',
    time: '18:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 4',
    date: '17.06.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 5',
    date: '07.08.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 6',
    date: '07.03.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 7',
    date: '07.03.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 8',
    date: '07.03.2023',
    time: '17:00' 
  },
  {
    img: liveImg,
    title: 'Прямой эфир 9',
    date: '07.03.2023',
    time: '17:00' 
  },
];

export type ILiveProps = {}

const Live = (props: ILiveProps): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-ui-name="live">
      <Grid container justifyContent="center" className={classes.root}>
        <Grid container maxWidth="lg">
          <Typography className={classes.title}>
            Прямые эфиры
          </Typography>

          <Grid container justifyContent="space-evenly" className={classes.grid}>
            {defaultLives.map((live: any) => (
              <Grid key={live.title} item container className={classes.gridItem} flexDirection='column'>
                <img alt={live.title} src={live.img} />
                <Typography className={classes.itemTitle}>{live.title}</Typography>
                <Typography className={classes.itemParagraph}>{live.date}</Typography>
                <Typography className={classes.itemParagraph}>{live.time}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Live
