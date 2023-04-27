import { makeStyles } from '@mui/styles';
import React, { ReactNode, useMemo } from 'react';
import Slider, { Settings } from 'react-slick';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type ICarouselProps = Settings & {
  children: ReactNode
}

const useStyles = makeStyles({
  root: {
    padding: '0 50px',
    maxWidth: '100%',
    '& .slick-slide > div': {
      margin: '10px !important',
    },

    '& .slick-list': {
      margin: '0 -10px !important',
    },

    '& svg.slick-arrow': {
      fontSize: '32px',
      color: '#000',
      border: '1px solid',
      borderRadius: '100%',

      '&.slick-prev': {
        left: '6px'
      },
      '&.slick-next': {
        right: '6px'
      },
    }
  },
})

const defaultSettings: Settings = {
  infinite: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  autoplay: true,
  autoplaySpeed: 2000,
  nextArrow: <KeyboardArrowRightIcon />,
  prevArrow: <KeyboardArrowLeftIcon />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const Carousel: React.FC<ICarouselProps> = ({ children, ...rest }) => {
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
      {children}
    </Slider>
  )
}

export { Carousel }
