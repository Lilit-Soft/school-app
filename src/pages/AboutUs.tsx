import React, { ReactElement } from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import HBImg from '../images/about-us-bg.png';

const useStyles = makeStyles({
    root: {
        margin: '0 2rem 2rem',
        padding: '1rem 0 22rem',

        backgroundImage: `url(${HBImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom right',

        '@media (max-width: 996px)': {
            backgroundSize: 'contain',
        },
        '@media (max-width: 840px)': {
            paddingBottom: '13rem',
        },
        '@media (max-width: 600px)': {
            paddingBottom: '15rem',
        },
        '@media (max-width: 480px)': {
            paddingBottom: '12rem',
        },
        '@media (max-width: 420px)': {
            paddingBottom: '8rem',
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
    description: {
        '&.MuiTypography-root': {
            paddingRight: '30rem',
            fontSize: '18px',
            lineHeight: '28px',

            '@media (max-width: 996px)': {
                paddingRight: '16rem',
                fontSize: '16px',
                lineHeight: '24px',
            },
            '@media (max-width: 840px)': {
                paddingRight: '14rem', 
            },
            '@media (max-width: 600px)': {
                paddingRight: 0,
            }
        }
    },
});

export type IAbouttUsProps = {}

const AboutUs = (props: IAbouttUsProps): ReactElement => {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <Grid container justifyContent="center" data-ui-name="about-us">
            <Grid container maxWidth="lg" className={classes.root}>
                <Grid item container sm={12} xs={12}>
                    <Typography className={classes.title}>
                        {t('О проекте')}
                    </Typography>

                    <Typography className={classes.description}>
                        {t('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')} 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AboutUs;
