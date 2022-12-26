import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { Button, Grid, styled, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'
import React from 'react'
import { IMovie } from '../types/IMovie'
import { msToTime } from '../utils/dateTime'

export type IFeaturedMovieProps = IMovie & {
  featureMovieBg: string
}

const FeaturedTitleImage = styled(Grid, { shouldForwardProp: (prop) => prop !== 'bgImage' })<{ bgImage: string }>(({ theme, bgImage }) => ({
  margin: '0 8px !important',
  height: '70px',
  backgroundImage: `url(images/${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
}))
const FeaturedBackground = styled(Grid, { shouldForwardProp: (prop) => prop !== 'bgImage' })<{ bgImage: string }>(({ theme, bgImage }) => ({
  padding: '0 30px',
  height: '725px',
  background: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color: '#fff',
}))

const useStyles = makeStyles<{ featureMovieBg: string; titleImage: string }>({
  caption: {
    color: '#808080',
    letterSpacing: '3px !important',
    fontWeight: '600 !important',
    textTransform: 'uppercase',
  },
  title: {
    textTransform: 'uppercase',
  },

  description: {
    fontSize: '22px !important',
    lineHeight: '1.5 !important',
  },
  button: {
    margin: '16px 0 !important',
    padding: '10px 50px !important',
    borderRadius: '50px!important',
    fontSize: '22px !important',
    lineHeight: '1.4 !important',
    fontWeight: '800 !important',
    textTransform: 'capitalize',
  },
  btnBlue: {
    color: 'white !important',
    background: '#00008B linear-gradient(to left, #14005C, #00008B) !important',
  },
  btnWhite: {
    color: 'black !important',
    backgroundColor: 'white !important',
  },
  mrSpacing: {
    marginRight: '16px !important',
  },
})

const FeaturedMovie: React.FC<IFeaturedMovieProps> = ({
  category,
  coverImage,
  date,
  description,
  duration,
  mpaRating,
  releaseYear,
  title,
  titleImage,
  videoUrl,
  featureMovieBg,
}) => {
  const classes = useStyles({ featureMovieBg, titleImage })
  console.log(titleImage)

  return (
    <FeaturedBackground container bgImage={featureMovieBg}>
      <Grid container item xs={12} sm={5} spacing={2} alignContent="center">
        <Grid item xs={12}>
          <Typography className={`${classes.description} ${classes.caption}`}>Movie</Typography>
        </Grid>
        <FeaturedTitleImage item xs={12} bgImage={titleImage} />

        <Grid item xs={12}>
          <Typography variant="h3" component="h2" className={classes.title}>
            {title}
          </Typography>
        </Grid>
        <Grid container item xs={10} sm={6} md={4} justifyContent="space-between">
          <Typography className={classes.description}>{releaseYear}</Typography>
          <Typography className={classes.description}>{mpaRating}</Typography>
          <Typography className={classes.description}>{msToTime(duration)}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.description}>{description}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            startIcon={<FontAwesomeIcon icon={faPlay} />}
            variant="contained"
            className={classNames(classes.button, classes.btnWhite, classes.mrSpacing)}
          >
            Play
          </Button>
          <Button variant="contained" className={classNames(classes.button, classes.btnBlue)}>
            More Info
          </Button>
        </Grid>
      </Grid>
    </FeaturedBackground>
  )
}

export { FeaturedMovie }
