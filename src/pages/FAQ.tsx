import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

import Accordions from '../components/Accordions';

import { FREQUENTLY_ASKED_QUESTION } from '../constants/faq';

import FAQBgImg from '../images/faq-bg.png';

const useStyles = makeStyles({
  hbRoot: {
    padding: '30px',
    height: '485px',
    backgroundImage: `url(${FAQBgImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: 'cover',

    '@media (max-width: 992px)': {
      height: '195px',
    }
  },
  faqSection: {
    padding: '30px',
    background: '#E8EAE9',
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
});

export type IFAQProps = {}

const FAQ = (props: IFAQProps): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-ui-name="faq">
      <Grid container justifyContent="center" className={classes.hbRoot}></Grid>

      <Grid container justifyContent="center" className={classes.faqSection}>
        <Grid container maxWidth="lg">
          <Typography className={classes.title}>
            Вопросы о проекте
          </Typography>
          <Accordions data={FREQUENTLY_ASKED_QUESTION} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FAQ;
