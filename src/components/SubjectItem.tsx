import React, { ReactElement } from 'react';
import { useNavigate  } from "react-router-dom";

import { Grid, Typography, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        '&.MuiGrid-root': {
            margin: '20px 0',
            padding: '10px 20px',
            width: 'fit-content',
            background: 'rgba(255, 246, 233, 1)',
            borderRadius: '20px',
        }
    },
    label: {
        '&.MuiTypography-root': {
            marginLeft: '15px',
            fontSize: '20px',
            lineHeight: '24px',

            '@media (max-width: 480px)': {
                fontSize: '16px',
            }
        }
    },
    icon: {
        height: 'auto',
        maxWidth: '100%',
    }
});

export type ISubjectItemProps = {
    icon: any,
    label: string,
    url: string,
}

const SubjectItem = (props: ISubjectItemProps): ReactElement => {
    const { icon, label, url } = props;
    const navigate = useNavigate();

    const classes = useStyles();

    const handleClick = () => {
        navigate(url);
    }

    return (
        <Link onClick={handleClick} underline="none" component="button">
            <Grid item container alignItems="center" className={classes.root}>
                <img alt={label} src={icon} className={classes.icon} />
                <Typography className={classes.label}>{label}</Typography>            
            </Grid>
        </Link>
        
    );
}

export default SubjectItem