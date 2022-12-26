// Libraries
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Box from '@mui/material/Box'
// Main sidebar
import Sidebar from '../components/Sidebar'

// Pages
import Genres from '../pages/Genres'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import TvShows from '../pages/TvShows'
import WatchLater from '../pages/WatchLater'

export type IMainLayoutProps = {}

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

      <Switch>
        <Route path="/genres">
          <Genres />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tv-shows">
          <TvShows />
        </Route>
        <Route path="/watch-later">
          <WatchLater />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Box>
  )
}

export default MainLayout
