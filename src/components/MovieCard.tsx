import React from 'react'
import { FnMovieSelection } from '../types/common'
import { IMovie } from '../types/IMovie'

export type IMovieCardProps = IMovie & {
  onClick?: FnMovieSelection
}

const MovieCard: React.FC<IMovieCardProps> = ({ coverImage, id, onClick, title }) => {
  const handleClick = () => {
    if (onClick) onClick(id)
  }

  return (
    <div key={id} style={{ cursor: 'pointer' }} onClick={handleClick}>
      <img alt={title} src={`images/${coverImage}`} />
    </div>
  )
}

export { MovieCard }
