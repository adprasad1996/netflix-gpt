import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailarVedio: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action)=> {
            state.nowPlayingMovies= action.payload;            
        },
        addTrailarVedio: (state,action)=> {
            state.trailarVedio = action.payload
        }
    },
})

export const {addNowPlayingMovies, addTrailarVedio} = movieSlice.actions;
export default movieSlice.reducer
