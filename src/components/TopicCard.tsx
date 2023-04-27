import React, { ReactElement } from 'react';
import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({
    card: {
        padding: '20px',
        background: '#fff',
        border: '3px solid #5C5CB5',
        borderRadius: '10px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
    },
    cardTitle: {
        '&.MuiTypography-root': {
            fontSize: '20px',
            lineHeight: '23px',
        }
    },
    cardDescription: {
        '&.MuiTypography-root': {
            margin: '10px 0 40px',
            fontSize: '15px',
            lineHeight: '23px',
        }
    },
    cardLink: {
        '&.MuiTypography-root': {
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            color: '#000',
            textAlign: 'right',
            fontSize: '15px',
            fontWeight: '300',
            textDecoration: 'none',

            '& svg': {
                marginLeft: '6px',
                fontSize: '13px'
            }
        }
    }
});

export type ITopicCardProps = {
    title: string,
    description: string,
    url: string
}

const TopicCard = (props: ITopicCardProps): ReactElement => {
    const { title, description, url } = props;
    const classes = useStyles();

    return (
        <Grid item container className={classes.card}>
            <Typography className={classes.cardTitle}>{title}</Typography>
            <Typography className={classes.cardDescription}>{description}</Typography>
            <Link className={classes.cardLink} href={url}>
                Подробнее
                <ArrowForwardIosIcon fontSize="small" />
            </Link>
        </Grid>
    );
}

export default TopicCard