import searchIcon from '../icons/search.png'
import clockIcon from '../icons/clock.png'
import moviesIcon from '../icons/movies.png'
import genresIcon from '../icons/genres.png'
import showsIcon from '../icons/shows.png'
import homeIcon from '../icons/home.png'

export const MAIN_NAVIGATION = [
  {
    icon: searchIcon,
    label: 'Search',
    path: '/search',
  },
  {
    icon: homeIcon,
    label: 'Home',
    path: '/',
  },
  {
    icon: showsIcon,
    label: 'TV Shows',
    path: '/tv-shows',
  },
  {
    icon: moviesIcon,
    label: 'Movies',
    path: '/movies',
  },
  {
    icon: genresIcon,
    label: 'Genres',
    path: '/genres',
  },
  {
    icon: clockIcon,
    label: 'Watch Later',
    path: '/watch-later',
  },  
]
