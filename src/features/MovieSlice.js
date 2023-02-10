import { createSlice } from "@reduxjs/toolkit";

const initialState={
    movies:[]
}


const moviesSlice=createSlice({
    name:'movie',
    initialState:initialState,
    reducers:{
        setMovies:(state,action)=>{
                state.movies=action.payload;
        }
    }
})

export const {setMovies}=moviesSlice.actions;

export const movieReducer=moviesSlice.reducer;