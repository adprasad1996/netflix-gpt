import React, {useEffect} from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SeconderyContainer from './SeconderyContainer';



function Browser() {
  useNowPlayingMovies()
 
  return (
    <div className="">
      <Header/>    
      {/* 
      MainContainer
       - VedioBackground
       - VedioTitle
       SeconderyContainer
        - MoviesList * n 
        - CardList * n
      
       */}
       <MainContainer/>
       <SeconderyContainer/>
    </div>
  );
}   
export default Browser;