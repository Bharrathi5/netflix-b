import React from 'react'
import { IMG_LINK } from '../utils/constants';

const MovieCards = ({posterPath}) => {

  if (!posterPath) return null;
  return (
    <div>
      <img src= { IMG_LINK + posterPath} alt=''/>
    </div>
  )
}

export default MovieCards;