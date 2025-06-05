import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailarVedio: null,
        popularMovies: null,
        upcomingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=> {
            state.nowPlayingMovies= action.payload;            
        },
        addTrailarVedio: (state,action)=> {
            state.trailarVedio = action.payload
        },
        addPopularMovies: (state, action)=> {
            state.popularMovies= action.payload;            
        },
         addUpcomingMovies: (state, action)=> {
            state.upcomingMovies= action.payload;            
        },
    },
})

export const {addNowPlayingMovies, addTrailarVedio, addPopularMovies,addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer
