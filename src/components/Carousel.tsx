import { makeStyles } from '@mui/styles'
import React, { ReactNode, useMemo } from 'react'
import Slider, { Settings } from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export type ICarouselProps = Settings & {
  children: ReactNode
}

const useStyles = makeStyles({
  root: {
    maxWidth: 'calc(100vw - 220px)',
    width: 'calc(100% -141px)',
    overflow: 'hidden',
    '& .slick-slide > div': {
      margin: '10px !important',
    },
    '& .slick-list': {
      margin: '0 -10px !important',
    },
    '& .slick-slide img': {
      maxWidth: '190px',
      width: '100%',
      height: 'auto',
    },
  },
})

const defaultSettings: Settings = {
  infinite: true,
  dots: false,
  arrows: false,
  slidesToShow: 8,
  slidesToScroll: 1,
  lazyLoad: 'progressive',
  autoplay: true,
  autoplaySpeed: 2000,
}

const Carousel: React.FC<ICarouselProps> = ({ children, ...rest }) => {
  const classes = useStyles()

  const settings = useMemo(
    () => ({
      ...defaultSettings,
      ...rest,
    }),
    [rest],
  )

  return (
    <Slider className={classes.root} {...settings}>
      {children}
    </Slider>
  )
}

export { Carousel }
