import React from 'react'
import { IMG_LINK } from '../utils/constants';

const MovieCards = ({posterPath}) => {

  if (!posterPath) return null;
  return (
    <div className='w-36' >
      <img src= { IMG_LINK + posterPath} alt='poster'/>
    </div>
  )
}

export default MovieCards;