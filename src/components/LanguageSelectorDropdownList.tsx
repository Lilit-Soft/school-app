import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@mui/styles';
import { MenuItem, Select, Box, SvgIcon } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

import { SITE_LANGUAGES } from '../config/languages';


const useStyles = makeStyles({
    selectRoot: {
        background: '#fff',
        color: 'rgba(105, 181, 186, 1) !important',

        '& > div': {
            paddingTop: '10px',
            paddingBottom: '10px',
        },

        '& svg': {
            color: 'inherit',
        }        
    }
});

export type ILanguageSelectorProps = {}

const LanguageSelectorDropdownList = (props: ILanguageSelectorProps): ReactElement => {
    const classes = useStyles();
    const { i18n } = useTranslation();

    const navigate = useNavigate();
    const location = useLocation();
    
    const [lang, setLang] = useState(SITE_LANGUAGES[0].value);

    useEffect(() => {
        localStorage.setItem("lang", lang);
        const language = localStorage.getItem("lang")?.toLowerCase();
        const path = location.pathname.split('/')[2];

        let pathTo = `/${language}` + `/${path}`;
        navigate(pathTo)
    }, [lang]);

    const handleChange = (event: any) => {
        const language = event.target.value;
        setLang(language);
        localStorage.setItem("lang", language);
        i18n.changeLanguage(language);
    };
  
    return (
        <>
           <Select
                className={classes.selectRoot}
                sx={{ 
                    width: 100,
                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(228, 219, 233, 0.25)',
                    }, 
                }}
                defaultValue={SITE_LANGUAGES[0].value}
                onChange={handleChange}
                displayEmpty
                MenuProps={{
                    PaperProps: {
                        sx: {
                            bgcolor: '#fff',
                            '.MuiButtonBase-root.MuiMenuItem-root': {
                                color: 'rgba(105, 181, 186, 1)',
                            }
                        },
                    },
                }}
                renderValue={(value: any) => {
                    return (
                        <Box sx={{ display: "flex", gap: 1 }}>
                            <SvgIcon color="primary">
                                <LanguageIcon />
                            </SvgIcon>
                            {value}
                        </Box>
                    );
                }}
            >
                {SITE_LANGUAGES.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </Select>
        </>
    );
};

export default LanguageSelectorDropdownList