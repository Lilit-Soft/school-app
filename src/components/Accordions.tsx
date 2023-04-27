import React, { ReactElement, useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';

import ControlPointIcon from '@mui/icons-material/ControlPoint';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    accordionRoot: {
        margin: '10px 0',
        width: '100%',

        background: '#fff',
        borderRadius: '20px !important',
        boxShadow: 'none !important',

        '&:before': {
            display: 'none',
        }
    },
    accordionSummary: {
        padding: '10px 20px !important',
        flexDirection: 'row-reverse',

        '& div:first-child': {
            marginLeft: '50px',
        }
    },
    accordionDetails: {
        margin: '0 16px 16px',
        padding: '16px 8px 0 !important',
        borderTop: '1px solid #BCB6B6',
    },
    icon: {
        color: '#FE7C00',
        fontSize: '2.5em !important',
    }
});

export type IAccordionsProps = {
    data: any
}

const Accordions = (props: IAccordionsProps): ReactElement => {
    const { data } = props;
    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel: any) => (event: any, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return(
        <>
            {data.map((accordion: any) => {
                const { id, question, answer } = accordion;

                return(
                    <Accordion
                        className={classes.accordionRoot}
                        expanded={expanded === id}
                        key={id}
                        onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            className={classes.accordionSummary}
                            expandIcon={expanded === id ? <RemoveCircleIcon className={classes.icon} /> : <ControlPointIcon className={classes.icon} />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography>{question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className={classes.accordionDetails}>
                            <Typography>{answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
}

export default Accordions