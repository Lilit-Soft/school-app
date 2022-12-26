import React from 'react'
import { FnMovieSelection } from '../types/common'
import { IMovie } from '../types/IMovie'
import { MovieCard } from './MovieCard'

export type IMovieListProps = {
  list: IMovie[]
  onClick: FnMovieSelection
}

const MovieList: React.FC<IMovieListProps> = ({ list }) => {
  return (
    <>
      {list.map((movie) => (
        <MovieCard {...movie} />
      ))}
    </>
  )
}

export { MovieList }
