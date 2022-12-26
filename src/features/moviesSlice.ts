import { createSelector, createSlice } from '@reduxjs/toolkit'
import { camelizeKeys } from 'humps'

import data from '../db/data.json'
import { IMovie } from '../types/IMovie'

const FEATURE_NAME = 'MOVIES'

type MoviesState = {
  selected: IMovie
  featured: IMovie
  trendingList: IMovie[]
}

const initialState: MoviesState = {
  featured: camelizeKeys(data.Featured) as IMovie,
  selected: camelizeKeys(data.Featured) as IMovie,
  trendingList: camelizeKeys(data.TendingNow) as IMovie[],
}

export const moviesSlice = createSlice({
  name: FEATURE_NAME,
  initialState: initialState,
  reducers: {
    setSelected: (state, { payload }) => {
      const movie = state.trendingList.find((m) => m.id === payload)
      if (movie) {
        state.selected = movie
      }
    },
  },
})

export const { setSelected } = moviesSlice.actions

const selectedState = (state: { [FEATURE_NAME]: MoviesState }) => state[FEATURE_NAME]

export const selectTrendingList = createSelector(selectedState, (state) => state.trendingList)
export const selectCurrentMovie = createSelector(selectedState, (state) => state.selected)
export const selectFeatureMovie = createSelector(selectedState, (state) => state.featured)
