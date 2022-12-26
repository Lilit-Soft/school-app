import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from '../components/Carousel'
import { FeaturedMovie } from '../components/FeaturedMovie'
import { MovieCard } from '../components/MovieCard'
import { selectCurrentMovie, selectTrendingList, setSelected } from '../features/moviesSlice'
import featuredImage from '../images/featuredImage.png'


const useStyles = makeStyles({
  trendingNowWrapper: {
    padding: '0 30px',
    position: 'relative',
    color: '#fff',
    background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(10, 10, 10) 90.2%)',
  },
  title: {
    position: 'absolute',
    top: '-70px',
  },
})

const Home = () => {
  const dispatch = useDispatch()

  const trendingNow = useSelector(selectTrendingList)
  const currentMovie = useSelector(selectCurrentMovie)
  const classes = useStyles()
  const onMovieClick = useCallback(
    (id: string) => {
      dispatch(setSelected(id))
    },
    [dispatch],
  )
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}>
      <FeaturedMovie featureMovieBg={featuredImage} {...currentMovie} />
      <Grid className={classes.trendingNowWrapper}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" className={classes.title}>
            Trending Now
          </Typography>
        </Grid>
        <div style={{}}>
          <Carousel>
            {trendingNow.map((movie) => (
              <MovieCard onClick={onMovieClick} {...movie} />
            ))}
          </Carousel>
        </div>
      </Grid>
    </div>
  )
}

export default Home
