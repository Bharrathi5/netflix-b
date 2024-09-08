import React, { useEffect } from 'react'
import Header from './Header'
import TrendingMovie from './TrendingMovie'
import ListContainer from './ListContainer'
import useNowPlaying from '../hooks/useNowPlaying'
import useTrending from '../hooks/useTrending'
import usePopular from '../hooks/usePopular'
import usePopularTv from '../hooks/usePopularTv'
import useTopRated from '../hooks/useTopRated'
import useTopRatedTv from '../hooks/useTopRatedTv'

const Browse = () => {

  useNowPlaying();
  useTrending();
  usePopular();
  usePopularTv();
  useTopRated();
  useTopRatedTv();

  return (
    <div>
        <Header/>
        <TrendingMovie/>
        <ListContainer/>
    </div>
  )
}

export default Browse;