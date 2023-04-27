import { ReactElement, useState } from 'react';

import { makeStyles } from '@mui/styles';
import { AppBar, Grid, IconButton } from '@mui/material';

import PermIdentityIcon from '@mui/icons-material/PermIdentity';

import Login from '../pages/Login';
import LanguageSelectorDropdownList  from './LanguageSelectorDropdownList';
import SearchBar from './SearchBar';
import { ReactComponent as Logo } from '../images/ZhasQyran.svg';

const useStyles = makeStyles({
    root: {
        padding: '0 30px',
        height: '70px',
        position: 'unset',
        justifyContent: 'center',
        alignItems: 'center',        
        background: '#E2E2E2 !important',
        '@media (max-width: 767px)': {
            height: 'auto',
            padding: '15px',

            '& div.MuiGrid-item': {
                margin: '4px 0',
            }
        }
    },
    logo: {
        cursor: 'unset',
        '&:hover': {
            backgroundColor: 'inherit !important',
        }
    },
    profileIcon: {
        color: 'rgba(105, 181, 186, 1)',
        fontSize: '1.25em !important',
    }
});

export type IHeaderProps = {}

const Header = (props: IHeaderProps): ReactElement => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <AppBar className={classes.root} data-ui-name="header" position="static">
            <Grid container maxWidth="lg" justifyContent="space-between">
                <Grid container direction="row" alignItems="center" justifyContent="space-between" item lg={4} md={6} sm={6} xs={12}>
                    <Grid item>
                        <IconButton 
                            className={classes.logo}
                            disableRipple 
                            disableFocusRipple 
                        >
                            <Logo />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <SearchBar />
                    </Grid>    
                </Grid>

                <Grid container direction="row" alignItems="center" justifyContent="space-between" item md={2} sm={3} xs={12}>
                    <Grid item>
                        <IconButton onClick={handleClickOpen}>
                            <PermIdentityIcon className={classes.profileIcon} />
                        </IconButton>

                        <Login open={open} handleClose={handleClose} />
                    </Grid>

                    <Grid item>
                        <LanguageSelectorDropdownList />
                    </Grid>
                </Grid>             
            </Grid>
        </AppBar>
    );
};

export default Header