import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

import { ReactComponent as Logo } from '../images/ZhasQyran.svg';

const useStyles = makeStyles({
    root: {
        padding: '30px 20px',
    },
    footerText: {
        '&.MuiTypography-root': {
            fontSize: '20px',
            lineHeight: '24px'
        }
    }
});

export type IFooterProps = {}

const Footer = (props: IFooterProps): ReactElement => {
    const classes = useStyles();

    return (
        <Grid container justifyContent="center" data-ui-name="footer" className={classes.root}>
            <Grid container maxWidth="lg" alignItems="center" justifyContent="space-evenly">
                <Grid item>
                    <Logo />
                </Grid>

                <Grid item>
                    <Typography align="center" className={classes.footerText}>
                        ©TOO”bilim.app” 2020-2023
                        <br />
                        Все права защищены.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Footer