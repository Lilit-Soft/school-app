import React, { ReactElement, useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { 
    Grid,
    Typography, 
    TextField, 
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel
} from '@mui/material';

import PhoneIcon from '../icons/phone.png';
import MailIcon from '../icons/message.png';
import LocationIcon from '../icons/location.png';
import Quiz from '../quiz/Quiz';

const useStyles = makeStyles({
    root: {
        margin: '3rem 2rem 10rem',
        padding: '30px 20px',
        boxShadow: '0px 0px 15px 0px rgb(0 0 0 / 25%)',
        borderRadius: '20px',

        '& > div:first-child': {
            padding: '0 10px',
            borderRight: '1px solid rgba(15, 128, 134, 1)',
        },
        '& > div:last-child': {
            padding: '0 30px',
            position: 'relative',

            '& > div:first-child': {
                marginTop: '50px',
            }
        }
    },
    title: {
        '&.MuiTypography-root': {
          color: 'rgba(19, 129, 136, 1)',
          fontSize: '48px',
          lineHeight: '56px',
          fontWeight: 700,
        }
    },
    item: {
        '&.MuiGrid-root': {
            margin: '30px 0',
        }
    },
    label: {
        '&.MuiTypography-root': {
          marginLeft: '35px',
          fontSize: '20px',
          lineHeight: '28px',
        }
    },
    inputItem: {
        '&.MuiGrid-root': {
            margin: '16px 0',
            '& > div': {
                width: '45%',
            } 
        }
    },
    inputMsgItem: {
        '&.MuiGrid-root': {
            margin: '16px',
            '& > div': {
                width: '100%',
            },
        }
    },
    submitBtn: {
        '&.MuiGrid-root': {
            '& .MuiButtonBase-root.MuiButton-root': {
                padding: '6px 50px',
                borderRadius: '15px',
                textTransform: 'initial',
                fontSize: '20px',
                
                '&:hover, &:active, &:focus': {
                    background: 'rgba(15, 128, 134, 1)',
                    color: '#fff'
                }
            }
        }
    },
    radioGroup: {
        '& .MuiFormControl-root': {
            margin: '30px 16px'
        },
        '& .MuiFormGroup-root': {
            flexDirection: 'row',
            justifyContent: 'space-between'
        }
    }
});

export type IContactUsProps = {}

const ContactUs = (props: IContactUsProps): ReactElement => {
    const classes = useStyles();
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        msg: '',
        sender: 'child'
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        msg: '',
        errorMsg: '' as any
    });

    const validateValues = async () => {
        let hasErrors = errors;
        if(!state.firstName) {
            hasErrors.firstName = "Заполните Имя";
        }

        if(!state.firstName) {
            hasErrors.lastName = "Заполните Фамилию";
        }

        if(!state.email) {
            hasErrors.email = "Заполните поле";
        }

        if(!state.phoneNumber) {
            hasErrors.phoneNumber = "Заполните поле";
        }

        if(!state.msg) {
            hasErrors.msg = "Заполните поле";
        }

        if(state.email && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(state.email)) {
            hasErrors.email = "Не корректно введен mail "
        }

        if(state.phoneNumber && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(state.phoneNumber)) {
            hasErrors.phoneNumber = "Не корректно введен номер телефона "
        }

        setErrors(hasErrors);
    };

    const handleChange = async (field: any, value: any) => {
        setState({
            ...state,
            [field]: value
        });
    }

    return (
        <Grid container justifyContent="center" data-ui-name="contact-us">
            <Grid container maxWidth="lg" className={classes.root} alignItems='baseline'>
                <Grid item container md={5} sm={6} xs={12}>
                    <Typography className={classes.title}>
                        Контакты
                    </Typography>

                    <Grid className={classes.item} container item xs={12} alignItems="center">
                        <img src={PhoneIcon} alt="Phone" />
                        <Typography className={classes.label}>+8952214813</Typography>
                    </Grid>

                    <Grid className={classes.item} container item xs={12} alignItems="center">
                        <img src={MailIcon} alt="E-mail" />
                        <Typography className={classes.label}>toobilimapp@gmail.com</Typography>
                    </Grid>

                    <Grid className={classes.item} container item xs={12} alignItems="center">
                        <img src={LocationIcon} alt="Location" />
                        <Typography className={classes.label}>Гринтаун, улица Иствуд, 41</Typography>
                    </Grid>
                </Grid>

                <Grid item container md={7} sm={6} xs={12} alignContent="flex-start">
                    <Grid className={classes.inputItem} item container xs={12} flexDirection="row" justifyContent="space-around">
                        <TextField 
                            id="firstName" 
                            label="Имя" 
                            variant="standard" 
                            type="text"
                            onChange={(e: any) => handleChange("firstName", e.target.value)}
                            onBlur={(e: any) => validateValues()}
                            helperText={errors.firstName ? errors.firstName : ""}
                            error={!!errors.firstName}
                        />
                        <TextField 
                            id="lastName" 
                            label="Фамилия" 
                            variant="standard" 
                            type="text"
                            onChange={(e: any) => handleChange("lastName", e.target.value)}
                            onBlur={(e: any) => validateValues()}
                            helperText={errors.lastName ? errors.lastName : ""}
                            error={!!errors.lastName}
                        />
                    </Grid>

                    <Grid className={classes.inputItem} item container xs={12} flexDirection="row" justifyContent="space-around">
                        <TextField 
                            id="e-mail" 
                            label="Mail" 
                            variant="standard" 
                            type="email"
                            onChange={(e: any) => handleChange("email", e.target.value)}
                            onBlur={(e: any) => validateValues()}
                            helperText={errors.email ? errors.email : ""}
                            error={!!errors.email}
                        />
                        <TextField 
                            id="phoneNumber" 
                            label="Номер телефона" 
                            variant="standard"
                            type="phone"
                            onChange={(e: any) => handleChange("phoneNumber", e.target.value)}
                            onBlur={(e: any) => validateValues()}
                            helperText={errors.phoneNumber ? errors.phoneNumber : ""}
                            error={!!errors.phoneNumber} 
                        />
                    </Grid>

                    <Grid className={classes.inputMsgItem} item container xs={12}>
                        <TextField
                            id="msg"
                            label="Сообщение"
                            placeholder="Напишите свое сообщение..."
                            multiline
                            variant="standard"
                            type="text"
                            onChange={(e: any) => handleChange("msg", e.target.value)}
                            onBlur={(e: any) => validateValues()}
                            helperText={errors.msg ? errors.msg : ""}
                            error={!!errors.msg}
                        />
                    </Grid>

                    <Grid className={classes.radioGroup} container item xs={12}>
                        <FormControl>
                            <FormLabel>От кого сообщение?</FormLabel>
                                <RadioGroup
                                    value={state.sender}
                                    onChange={(e: any) => handleChange("sender", e.target.value)}
                                >
                                    <FormControlLabel value="teacher" control={<Radio />} label="Учитель" />
                                    <FormControlLabel value="child" control={<Radio />} label="Ученик" />
                                    <FormControlLabel value="parent" control={<Radio />} label="Родитель" />
                                </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid className={classes.submitBtn} item container xs={12} justifyContent="flex-end">
                        <Button variant="outlined">
                            Отправить
                        </Button>
                    </Grid>                   
                </Grid>                
            </Grid>
        </Grid>
    );
};

export default ContactUs
