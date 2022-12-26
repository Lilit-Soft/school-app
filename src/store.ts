import { configureStore } from '@reduxjs/toolkit'
import { moviesSlice } from './features/moviesSlice'

export const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
