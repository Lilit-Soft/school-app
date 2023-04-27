import React, { ReactElement, useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import HBSlideOneImg from '../images/hb-slide-1.png';
import HBSlideTwoImg from '../images/hb-slide-2.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type ISliderProps = Settings & {}

const useStyles = makeStyles({
    root: {
        width: '100%',

        '& .slick-dots': {
            bottom: '20px',

            '& li': {
                margin: '0 8px',
            },

            '& li button:before': {
                color: '#fff',
                fontSize: '16px',

                opacity: '1',
            },

            '& li.slick-active button:before': {
                color: 'rgba(254, 124, 0, 0.8)',
                opacity: '1',
            }
        }
    },
    slideItem: {
        maxHeight: '800px',
        position: 'relative',
    },
    slideImg: {
        width: '100%',
        height: 'auto',
    },
    slideContent: {
        margin: '0 auto',
        width: '100%',
        height: '100%',

        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        background: 'rgba(217, 217, 217, 0.8)',
        clipPath: 'circle(65% at 20% -80%)',

        '@media (max-width: 1600px)': {
            clipPath: 'circle(75% at 25% -80%)',
        },

        '@media (max-width: 1300px)': {
            clipPath: 'circle(85% at 20% -80%)',
        },

        '@media (max-width: 1200px)': {
            padding: '0 30px'
        },   
        
        '@media (max-width: 1100px)': {
            clipPath: 'circle(100% at 20% -80%)',
        },

        '@media (max-width: 991px)': {
            clipPath: 'circle(100% at 40% -75%)',
        },

        '@media (max-width: 700px)': {
            clipPath: 'circle(100% at 40% -50%)',
        },

        '& > div': {
            margin: '16px auto',

            '& p': {
                maxWidth: '480px'
            }
        }
    },
    slideTitle: {
        '&.MuiTypography-root': {
          marginBottom: '20px',
          color: 'rgba(19, 129, 136, 1)',
          fontSize: '48px',
          lineHeight: '56px',
          fontWeight: 700,

          '@media (max-width: 700px)': {
            marginBottom: '4px',
            fontSize: '32px',
          },
          '@media (max-width: 480px)': {
            fontSize: '22px',
            lineHeight: '24px',
          }
        }
    },
    slideDescription: {
        '&.MuiTypography-root': {
            fontSize: '18px',
            lineHeight: '28px',

            '@media (max-width: 480px)': {
                fontSize: '14px',
                lineHeight: '18px',
            }
        }
    }
})

const defaultSettings: Settings = {
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 2000,
}

const HBSlider: React.FC<ISliderProps> = ({ ...rest }) => {
    const classes = useStyles();

    const settings = useMemo(
        () => ({
          ...defaultSettings,
          ...rest,
        }),
        [rest],
    );
  
    return (
      <Slider className={classes.root} {...settings}>
        <Grid item container justifyContent="center" className={classes.slideItem}>
            <img alt="Slide 1" src={HBSlideOneImg} className={classes.slideImg} />

            <Grid className={classes.slideContent}>
                <Grid container maxWidth="lg" flexDirection="column">
                    <Typography className={classes.slideTitle}>Добро пожаловать!</Typography>
                    <Typography className={classes.slideDescription}>
                        Изучаем интересные темы через игры! 
                        ZhasQyran — это платформа, где вы можете узнать 
                        о различных предметах с помощью игр и
                        интерактивных уроков
                    </Typography>
                </Grid>
            </Grid>            
        </Grid>

        <Grid item container justifyContent="center" className={classes.slideItem}>
            <img alt="Slide 2" src={HBSlideTwoImg} className={classes.slideImg} />

            <Grid className={classes.slideContent}>
                <Grid container maxWidth="lg" flexDirection="column">
                    <Typography className={classes.slideTitle}>Lorem Ipsum</Typography>
                    <Typography className={classes.slideDescription}>Это просто текст-пустышка полиграфической и наборной индустрии.</Typography>
                </Grid>
            </Grid>
        </Grid>
      </Slider>
    )
  }
  
  export { HBSlider }