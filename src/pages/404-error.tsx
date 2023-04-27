import { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';

import ErrorImg from '../images/404-error.png';

const useStyles = makeStyles({
    root: {
        margin: '2em 0 3em',
        padding: '30px',
        height: '270px',
        backgroundImage: `url(${ErrorImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',

        '@media (max-width: 992px)': {
            height: '195px',
        }
    }
});

export type IErrProps = {}

const Error = (props: IErrProps): ReactElement => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" data-ui-name="404-error">
      <Grid container justifyContent="center" className={classes.root}></Grid>
    </Grid>
  );
}

export default Error;
