import { ReactElement, useState, useEffect } from 'react';
import { useNavigate  } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { 
    Grid,
    TextField,
    Button,
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogTitle,
    InputAdornment,
    IconButton,
    Link
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const useStyles = makeStyles({
    root: {
        minWidth: '450px',
    },
    title: {
        '&.MuiTypography-root': {
            margin: "30px 30px 0",
            paddingBottom: "8px",
            fontSize: "20px", 
            textAlign: "center",
            borderBottom: "1px solid rgba(19, 129, 136, 1)",
        }
    },
    formField: {
        margin: "35px 0"
    },
    submitBtn: {
        '&.MuiDialogActions-root': {
            padding: '0 30px',
            margin: '0 0 30px',
            flexDirection: 'column',
            justifyContent: 'center',

            '& .MuiButtonBase-root.MuiButton-root': {
                minWidth: '250px',
                padding: '6px 50px',
                borderRadius: '15px',
                textTransform: 'initial',
                fontSize: '20px',
                
                '&:hover, &:active, &:focus': {
                    background: 'rgba(15, 128, 134, 1)',
                    color: '#fff'
                }
            },

            '& .MuiLink-root.MuiLink-button': {
                marginLeft: 0,
                marginTop: '10px',
                color: 'black',
                textDecorationColor: 'black'
            }
        }
    }
});

export type ILoginProps = {
    open: boolean;
    handleClose: () => void;
}

const Login = (props: ILoginProps): ReactElement => {
    const { open, handleClose } = props;
    const classes = useStyles();
    const navigate = useNavigate();
    const locale = localStorage.getItem("lang") as any;

    const [state, setState] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: '',
        errorMsg: '' as any
    });

    const handleClick = () => {
        navigate(locale?.toLowerCase() + "/contact-us");
        handleClose();
    }
    
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [isShownPass, setIsShownPass] = useState(false);
    const handleClickShowPassword = () => setIsShownPass(!isShownPass);
    const handleMouseDownPassword = () => setIsShownPass(!isShownPass);

    const validateValues = async () => {
        let hasErrors = errors;
        if(!state.email) {
            hasErrors.email = "The field is required";
        }

        if(state.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(state.email)) {
            hasErrors.email = "Email is invalid."
        }

        if(!state.password) {
            hasErrors.password = "The field is required";
        }
        setErrors(hasErrors);
    };

    const onChange = async (field: any, value: any) => {
        setState({
            ...state,
            [field]: value
        });
    }

    const handleLogin = async (e: any) => {
        e.preventDefault();
        const user = {
            email: state.email,
            password: state.password
        };

        try {
            // todo -> API request
        } catch (e) {
            setErrors({ ...errors, errorMsg: e });
        }
    }

    return (
        <Grid container justifyContent="center" data-ui-name="login">
            <Dialog open={open} PaperProps={{ style: { borderRadius: '20px' }   }}>
                <form 
                    noValidate={true}
                    autoComplete="off"
                    onSubmit={handleLogin}
                    className={classes.root}
                >
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: 'rgba(15, 128, 134, 1)',
                        }}
                        >
                        <CloseIcon />
                    </IconButton>
                    <DialogTitle className={classes.title}>Войти</DialogTitle>
                    <DialogContent>
                        <Grid className={classes.formField}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                id="email"
                                label="Логин"
                                type="email"
                                onChange={(e: any) => onChange("email", e.target.value)}
                                onBlur={(e: any) => validateValues()}
                                helperText={errors.email ? errors.email : ""}
                                error={!!errors.email}
                            />
                        </Grid>

                        <Grid className={classes.formField}>
                            <TextField
                                fullWidth
                                label="Пароль"
                                variant="outlined"
                                id="password"
                                type={isShownPass ? "text" : "password"}
                                onChange={(e: any) => onChange("password", e.target.value)}
                                onBlur={(e: any) => validateValues()}
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {isShownPass ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    )
                                }}
                                helperText={errors.password ? errors.password : ""}
                                error={!!errors.password}
                            />
                        </Grid>
                    </DialogContent>
                    <DialogActions className={classes.submitBtn}>
                        <Button variant="outlined" type="submit" disabled={btnDisabled}>
                            Войти
                        </Button>
                        <Link onClick={handleClick} component="button">
                            Забыли пароль?
                        </Link>
                    </DialogActions>
                </form>
            </Dialog>
        </Grid>
    );
};

export default Login;

