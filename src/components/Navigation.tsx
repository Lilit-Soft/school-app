import React, { ReactElement, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

import { MAIN_NAVIGATION } from '../constants/mainNavigation';

const useStyles = makeStyles({
    root: {
        padding: '0 30px',
    },
    menuList: {
        display: 'flex',
        flexDirection: 'row',

        '& li:first-child': {
            '& > div': {
                paddingLeft: '0 !important',
                '@media (max-width: 600px)': {
                    padding: '15px 0 !important',
                }
            }            
        },

        '@media (max-width: 600px)': {
            flexWrap: 'wrap',

            '& li': {
                '& > div': {
                    padding: '15px 0 !important',
                }            
            }
        }
    },
    menuItem: {
        padding: '15px 22.5px !important',

        '&:hover': {
            backgroundColor: 'inherit !important',

            '& span': {
                borderBottom: '1px solid #000',
            }          
        },

        '& span': {
            width: 'max-content',
            fontSize: '15px',
            lineHeight: '18px'
        }
    },
    activeMenuItem: {
        '& span': {
            borderBottom: '1px solid #000',
        }
    }
});

export type INavigationProps = {}

const Navigation = (props: INavigationProps): ReactElement => {
    const classes = useStyles();
    const locale = localStorage.getItem("lang") as any;

    const navigate = useNavigate();
    const { pathname: currentPath } = useLocation();
    const navigateToPath = useCallback(
        (path: string) => () => {
            let pathTo = locale?.toLowerCase() + path;

            navigate(pathTo);
        },
        [locale],
    );

    return (
        <Grid container justifyContent="center" data-ui-name="navigation" className={classes.root}>
            <Grid container maxWidth="lg">
                <List className={classes.menuList}>
                    {MAIN_NAVIGATION.map(({ label, path }, index) => {
                        const active = (`/${locale?.toLowerCase()}` + path) === currentPath;

                        return (
                            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton 
                                    onClick={navigateToPath(path)}
                                    className={classNames(classes.menuItem, active ? classes.activeMenuItem : '')}
                                >
                                    <ListItemText primary={label} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid>
        </Grid>
    );
}
  
export default Navigation

